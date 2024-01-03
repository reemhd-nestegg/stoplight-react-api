const UseGuides = () => {
  return (
    <div className="use-guides-content">
      <h1>Use Cases</h1>
      <p>
        There are currently three ways that a lender's systems can interact with
        the NestEgg server API and Workflow (online application forms):
      </p>
      <br />
      <h2>Use Case 1:</h2>
      <p>
        A loan application is initiated by a lender's user from inside the
        NestEgg Dashboard web app.
      </p>
      <img src="/images/usecase1.png" alt="Use Case 1" />
      <h2>Use Case 2:</h2>
      <p>
        A loan application is initiated by a lender's (existing or applying)
        member from inside the NestEgg Workflow embedded within the lender's
        website. A new member can also apply to join and save via the Nestegg
        Workflow. In either case, the Nestegg Workflow handles the Common Bond
        (and other joining eligibility checks) as well as the loan or savings
        application.
      </p>

      <img src="/images/usecase2.png" alt="Use Case 2" />
      <h2>Use Case 3:</h2>
      <p>
        A loan application is initiated by a lender's system, e.g. the lender's
        own or a third-party's online forms embedded within the lender's
        website.
      </p>
      <img src="/images/usecase3.png" alt="Use Case 3" />
    </div>
  );
};

export default UseGuides;
