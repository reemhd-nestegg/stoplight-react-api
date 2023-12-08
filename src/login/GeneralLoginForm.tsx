import React, { useEffect } from 'react';

export const GeneralLoginForm = ({ onFormSubmit } : any) => {
  const [apiKey, setApiKey] = React.useState('');
  const [clientId, setClientId] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);


  function handleSubmit(event: any) {
    event.preventDefault();

    onFormSubmit({ client_id: clientId, api_key: apiKey });
  }
  
  function handleClientIdChange(event: any) {
    setClientId(event.target.value);
  }
  
  function handleApiKeyChange(event: any) {
    setApiKey(event.target.value);
  }
  
  useEffect(() => {
    if (apiKey !== '' || clientId !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [clientId, apiKey]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className='login-form-field'>
        <label htmlFor="client-id">Client ID:</label>
        <input
          id="client-id"
          type="text"
          onChange={handleClientIdChange}
          value={clientId}
        />
      </div>
      <div className='login-form-field'>
        <label htmlFor="api-key">API Key:</label>
        <input
          id="api-key"
          type="password"
          onChange={handleApiKeyChange}
          value={apiKey}
        />
      </div>
      <button id="login-button" type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};

export default GeneralLoginForm;
