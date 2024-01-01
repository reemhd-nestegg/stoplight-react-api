const payload = JSON.stringify({
  event: "decision.requested_bank_details",
  data: {
    user_id: "applicant@email.com",
    customer_type: "New",
    decision_id: "DECISION-ID-HERE",
  },
  occured_at: "TIMESTAMP",
});

const rubyCode = `require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(params[:payload])
  "I got some JSON: \#{push.inspect}"
end`;

const rubyCode2 = `
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(params[:payload])
  "I got some JSON: \#{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end
`;

const mathExpressions = [
  "60 + Math.pow(4,1) ~ 1m",
  "60 + Math.pow(4,2) ~ 1m",
  "60 + Math.pow(4,3) ~ 2m",
  "60 + Math.pow(4,4) ~ 5m",
  "60 + Math.pow(4,5) ~ 18m",
  "60 + Math.pow(4,6) ~ 70m",
  "60 + Math.pow(4,7) ~ 4.5h",
  "60 + Math.pow(4,8) ~ 18h",
];


const Webhooks = () => {
  return (
    <div className="webhook-content">
      <h1>Webhooks</h1>
      <p>
        Webhooks allow you to build or set up integrations which subscribe to
        certain events on the NestEgg server. When one of those events is
        triggered, we'll send an HTTP POST payload to the webhook's configured
        URL. Webhooks can be used to trigger an email to an applicant, update
        your CRM, request an applicant uploads an ID document, or connect their
        bank account via Open Banking. Webhooks are also used to notify a
        core-system of any available event such as a lender approving a
        decision.
      </p>
      <p>
        A webhook can be installed for an event for a client. Once installed,
        the webhook will be triggered (called by the Nestegg server) each time
        the subscribed event occurs.
      </p>
      <p>
        Currently just one webhook can be set up per event per client. (In the
        future we may allow multiple webhooks per event per client)
      </p>
      <p>
        Contact Nestegg if you would like to register a webhook for an event.
      </p>
      <br />
      <h2>Events</h2>
      <p>
        When configuring a webhook, you can choose which event you would like to
        receive payloads for. Only subscribing to the specific events you plan
        on handling is useful for limiting the number of HTTP requests to your
        server. You can enable or disable subscribed events by contacting
        NestEgg support. A disabled event means the webhook is still installed
        but will not be triggered until and unless it is enabled
      </p>
      <p>The available events are:</p>
      <h3>decision.updated</h3>
      <p>
        This event is generated when the decision engine updates a decision in
        the form of a new Open Banking connection and when new submission data
        is added to it via NestEgg workflow (if configured for client).
      </p>
      <p>
        The event may be picked up by a 3rd-party application such as a
        downstream core system which may want to keep lenders updated as a
        decision is updated. Note that this event is not generated when the
        decision status changes - these are indicated via the
        'decision.accepted', 'decision.declined' and 'decision.withdrawn'
        events.
      </p>
      <h3>decision.accepted</h3>
      <p>
        This event is generated by the POST decisions/ID/accept endpoint which
        in turn is called by the Dashboard when a lender user confirms the
        ACCEPT status of a decision. The payload includes details of the
        decision. This payload data will be in the form of a JSON decision
        object. Note that this event can be followed by decision.declined or
        decision.withdrawn event if a user had realized they had 'accepted' by
        mistake or some late-breaking information comes to light. But unless and
        until that happens then the 'accepted' status of the decision should be
        assumed.
      </p>
      <h3>decision.declined</h3>
      <p>
        This event is generated by the POST decisions/ID/decline endpoint which
        in turn is called by the Dashboard when a lender user confirms the
        DECLINE status of a decision. The event is available to a 3rd-party
        application such as a downstream core system to pass through the details
        of a DECLINED decision. The payload is subject to the same rules as for
        decision.accepted.
      </p>
      <h3>decision.withdrawn</h3>
      <p>
        This event is generated by the POST decisions/ID/withdraw endpoint which
        in turn is called by the Dashboard when a lender user confirms the
        WITHDRAWN status of a decision. The event is available to a 3rd-party
        application such as a downstream core system to pass through the details
        of a WITHDRAWN decision. The payload is subject to the same rules as for
        decision.accepted.
      </p>
      <h3>decision.requested_bank_details</h3>
      <p>
        Triggered when a lender user requests an applicant provide their bank
        details, e.g. via statement upload or by connecting their bank account
        via Open Banking. [Not yet available to partners]
      </p>
      <h3>decision.requested_id_doc</h3>
      <p>
        Triggered when a lender user requests an applicant to upload a
        proof-of-ID document like a passport or driving license.
      </p>
      <h3>decision.requested_payslips</h3>
      <p>
        Triggered when a lender user requests an applicant to upload payslips.
        [Not yet available to partners]
      </p>
      <br />
      <h2>Payloads</h2>
      <p>
        Each event type has a specific payload format with the relevant event
        information.
      </p>
      <h3>Delivery headers</h3>
      <p>
        HTTP POST payloads that are delivered to your webhook's configured URL
        endpoint will contain several special headers:
      </p>
      <table>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>PARAMS</th>
            <th>VALUES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HEAD</td>
            <td>Content-Type</td>
            <td>application/json</td>
          </tr>
          <tr>
            <td>HEAD</td>
            <td>Token</td>
            <td>DIGEST</td>
          </tr>
        </tbody>
      </table>
      <p>Here is an example of a payload:</p>
      <pre>
        <code>{payload}</code>
      </pre>
      <br />
      <h3>Securing your webhooks</h3>
      <p>
        Once your server is configured to receive payloads, it'll listen for any
        payload sent to the endpoint you configured. For security reasons, you
        probably want to verify requests are coming from NestEgg. The method we
        recommend is to set up a secret token and verify the payload.
      </p>
      <p>
        NestEgg will issue you with a secret token which is then used to create
        a hash signature with each payload. This hash signature is passed along
        with each request in the headers as Token. Suppose you have a basic
        server listening to webhooks that looks like this:
      </p>
      <pre>
        <code>{rubyCode}</code>
      </pre>
      <br />
      <p>
        The goal is to compute a hash using your SECRET_TOKEN, and ensure that
        the hash from NestEgg matches. NestEgg uses an HMAC hexdigest to compute
        the hash, so you could change your server to look a little like this:
      </p>
      <pre>
        <code>{rubyCode2}</code>
      </pre>
      <p>
        Obviously, your language and server implementations may differ than this
        code. [We plan to add an endpoint to verify and decrypt the payload for
        you. Contact us for details if interested.]
      </p>
      <h3>Webhook retries</h3>
      <p>
        The webhook call is considered as a failed call if the HTTP status of
        the response is not in the range of 2xx or if the call times out. We
        give the webhook calls 10 seconds to respond. If this is the case and
        the webhook has failed, Nestegg will automatically retry calling the
        webhook with the same parameters up to 8 times with exponential
        back-off. The back-off is calculated with the basis of 4 with the
        formula:{" "}
        <pre>
          <code>60 + Math.pow(4, n)</code>
        </pre>
        where n is the current retry count and the result is the backoff in
        seconds.
      </p>
      <p>Below represents the timeouts in the number of seconds:</p>
      <pre>
        <code>
          {mathExpressions.map((expr, index) => (
            <span key={index}>
              {expr}
              <br />
            </span>
          ))}
        </code>
      </pre>
      <br />
      <p>
        If the 6th retry fails, the user is notified via email about this and
        the 7th retry is scheduled and if the 7th and 8th retry fail, the
        webhook will be disabled and the user will be notified via email about
        this. Nestegg will use the email configured for the failing webhook. To
        re-enable the webhook, please contact Nestegg once the issue with the
        webhook has been resolved.
      </p>
    </div>
  );
};

export default Webhooks;