import { useEffect, useState } from "react";
import PartnerLoginForm from "./PartnerLoginForm";
import GeneralLoginForm from "./GeneralLoginForm";

export const LoginForm = ({ onApiChange }: any) => {
  const [token, setToken] = useState("");
  const [loginData, setLoginData] = useState(null); // Initialized to null instead of false
  const [showPartnerForm, setShowPartnerForm] = useState(false);

  useEffect(() => {
    if (loginData) {
      fetch("https://testing.nestegg.ai/api/v1/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.token) {
            setToken(response.token);
          }
        })
        .catch((error) => {
          console.error("Error during authentication:", error);
        });
    }
  }, [loginData]);

  useEffect(() => {
    if (token) {
      fetch("https://testing.nestegg.ai/api/v1/openapi/openapi.yml", {
        method: "GET",
        headers: new Headers({
          "content-type": "application/json",
          "x-access-token": token,
        }),
      })
        .then((response) => response.text())
        .then((response) => {
          onApiChange(
            "data:text/plain;charset=UTF-8;base64," +
              btoa(unescape(encodeURIComponent(response)))
          );
        })
        .catch((error) => {
          console.error("Error fetching OpenAPI spec:", error);
        });
    }
  }, [token, onApiChange]);

  const togglePartnerForm = () => {
    setShowPartnerForm((prevShowPartnerForm) => !prevShowPartnerForm);
  };

  return (
    <div className="login-form">
      {showPartnerForm ? (
        <PartnerLoginForm onFormSubmit={setLoginData} />
      ) : (
        <GeneralLoginForm onFormSubmit={setLoginData} />
      )}
      <a href="#!" onClick={togglePartnerForm}>
        {showPartnerForm ? "General Login" : "Partner Login"}
      </a>
    </div>
  );
};

export default LoginForm;
