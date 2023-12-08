import React, { useEffect } from 'react';

export const PartnerLoginForm = ({ onFormSubmit }: any) => {
  const [apiKey, setApiKey] = React.useState('');
  const [clientId, setClientId] = React.useState('');
  const [partnerId, setPartnerId] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);


  function handleSubmit(event: any) {
    event.preventDefault();

    onFormSubmit({ client_id: clientId, api_key: apiKey, partner_id: partnerId });
  }
  
  function handleClientIdChange(event: any) {
    setClientId(event.target.value);
  }
  
  function handleApiKeyChange(event: any) {
    setApiKey(event.target.value);
  }

  function handlepPartnerIdChange(event: any) {
    setPartnerId(event.target.value);
  }
  
  useEffect(() => {
    if (apiKey !== '' || clientId !== '' || partnerId !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [clientId, apiKey]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Partner Login</h1>
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
      <div className='login-form-field'>
        <label htmlFor="partner-id">Partner ID:</label>
        <input
          id="partner-id"
          type="text"
          onChange={handlepPartnerIdChange}
          value={partnerId}
        />
      </div>
      <button id="login-button" type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};

export default PartnerLoginForm;
