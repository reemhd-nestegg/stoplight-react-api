import React, { useEffect } from 'react';
import PartnerLoginForm from './PartnerLoginForm';
import GeneralLoginForm from './GeneralLoginForm';


export const LoginForm = ({ onApiChange } :any) => {
  const [token, setToken] = React.useState('');

  const [loginData, setLoginData] = React.useState(false);
  const [showPartnerForm, setShowPartnerForm] = React.useState(false);

  useEffect(() => {
    fetch('https://testing.nestegg.ai/api/v1/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    }).then((response) => response.json()).then((response) => {
      if (!response.token) {
        return;
      }
      
      
      setToken(response.token);
    });
  }, [loginData]);
  
  useEffect(() => {
    if (!token) {
      return;
    }
    
    fetch('https://testing.nestegg.ai/api/v1/openapi/openapi.yml', {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json',
        'x-access-token': token
      }),
    }).then((response) => response.text()).then((response) => {
      onApiChange('data:text/plain;charset=UTF-8;base64,' + btoa(unescape(encodeURIComponent(response))))
    });
  }, [token]);

  return (
    <div className='login-form'>
        {showPartnerForm ? <PartnerLoginForm onFormSubmit={setLoginData} /> : <GeneralLoginForm onFormSubmit={setLoginData} />}
        <a href="#" onClick={() => setShowPartnerForm(!showPartnerForm)}>{showPartnerForm ? 'General Login' : 'Partner Login'}</a>
    </div>
  );
};

export default LoginForm;
