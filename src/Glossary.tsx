const Glossary = () => {
  return (
    <div className="glossary-content">
      <h1>Glossary</h1>
      <ul>
        <ul>
          <li>
            <strong>Client</strong> - Client application.
          </li>
          <li>
            <strong>Status</strong> - HTTP status code of response.
          </li>
          <li>
            All the possible responses are listed under 'Responses' for each
            method. Only one of them is issued per request server.
          </li>
          <li>All responses are in JSON format.</li>
          <li>
            All request parameters are mandatory unless explicitly marked as{" "}
            <strong>[optional]</strong>.
          </li>
          <li>
            The type of values accepted for a request parameter are shown in the
            values column like this <code>[10|&lt;any number&gt;]</code>. The
            "|" symbol means OR. If the parameter is <strong>[optional]</strong>
            , the default value is shown in in blue bold text, as{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>10</span> as
            written in <code>[10|&lt;any number&gt;]</code>.
          </li>
        </ul>
      </ul>
      <h2>URI</h2>
      <p>
        The sandbox URI for all routes is:{" "}
        <pre>
          <code>https://sandbox.nestegg.ai</code>
        </pre>
      </p>
      <h2>Status Codes</h2>
      <p>
        All status codes are standard HTTP status codes. The below ones are used
        in this API.
      </p>
      <ul>
        <li>
          <strong>2XX</strong> - Success of some kind
        </li>
        <li>
          <strong>4XX</strong> - Error occurred in client's part
        </li>
        <li>
          <strong>5XX</strong> - Error occurred in server's part
        </li>
      </ul>
      <br />
      <table>
        <thead>
          <tr>
            <th>STATUS CODE</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200</td>
            <td>OK</td>
          </tr>
          <tr>
            <td>201</td>
            <td>Created</td>
          </tr>
          <tr>
            <td>202</td>
            <td>Accepted (Request accepted, and queued for execution)</td>
          </tr>
          <tr>
            <td>400</td>
            <td>Bad request</td>
          </tr>
          <tr>
            <td>401</td>
            <td>Authentication failure</td>
          </tr>
          <tr>
            <td>403</td>
            <td>Forbidden</td>
          </tr>
          <tr>
            <td>404</td>
            <td>Resource not found</td>
          </tr>
          <tr>
            <td>405</td>
            <td>Method Not Allowed</td>
          </tr>
          <tr>
            <td>409</td>
            <td>Conflict</td>
          </tr>
          <tr>
            <td>412</td>
            <td>Precondition Failed</td>
          </tr>
          <tr>
            <td>413</td>
            <td>Request Entity Too Large</td>
          </tr>
          <tr>
            <td>500</td>
            <td>Internal Server Error</td>
          </tr>
          <tr>
            <td>501</td>
            <td>Not Implemented</td>
          </tr>
          <tr>
            <td>503</td>
            <td>Service Unavailable</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>API Response Structure for Errors</h3>
      <p>All routes use the same error fields as below.</p>
      <table>
        <thead>
          <tr>
            <th>FIELD NAME</th>
            <th>TYPE</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>error</td>
            <td>string</td>
            <td>An error code for classification. e.g.: internal_error</td>
          </tr>
          <tr>
            <td>error_description</td>
            <td>string</td>
            <td>When possible, extra details about the specific error</td>
          </tr>
          <tr>
            <td>error_details</td>
            <td>object</td>
            <td>Additional key/value error details if available</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default Glossary;
