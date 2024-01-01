const OpenBanking = () => {
  return (
    <div className="ob-content">
      <h1>Open Banking</h1>
      <br />
      <p>
        NestEgg provides clients (lenders) with the option to request applicants
        provide their banking data via Open Banking (OB).
      </p>
      <p>
        The request is triggered via an 'authentication link' at the point you
        want to request an applicant to authorize their bank account for Open
        Banking. This is simply a single URI as follows:
      </p>
      <pre>
        <code>
          https://OB-PROVIDER/?CLIENT-SPECIFIC-HERE&state=DECISION-ID-HERE|CLIENT-ID-HERE|RETURN-URI-HERE
        </code>
      </pre>
      <p>The authentication link URI includes the following components:</p>
      <ul>
        <li>
          A 'redirect URI' (a NestEgg server endpoint) - NestEgg will provide
          this as part of CLIENT-SPECIFIC-HERE
        </li>
        <li>
          The unique ID for the decision you would like the requested banking
          data to be associated with - DECISION-ID-HERE
        </li>
        <li>A client ID for the lender - CLIENT-ID-HERE</li>
        <li>
          A return URI where you would like the applicant to be sent after the
          OB authentication process - RETURN-URI-HERE
        </li>
      </ul>
      <p>
        The NestEgg-provided components (OB-PROVIDER CLIENT-SPECIFIC-HERE and
        CLIENT-ID-HERE) of the authentication link URI will be shared (with an
        authorized partner) prior to integration testing once NestEgg has
        configured an Open Banking account for the client.
      </p>
      <p>
        The authentication link URI ensures that the OB data is made accessible
        to the NestEgg decision engine and thereby to client (lender) users via
        the NestEgg dashboard.
      </p>
      <p>
        The OB data is also obtainable (at a categorized level) programmatically
        for a given decision via the categories endpoint.
      </p>
      <p>
        [Open banking summary data is expected to be available along with
        decision data to partners in beta in late February 2022]
      </p>
    </div>
  );
};

export default OpenBanking;
