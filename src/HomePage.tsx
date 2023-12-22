import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <aside className="sidebar">
        {/* Populate sidebar links here */}
        <nav>
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#endpoints">Endpoints</a>
            </li>
            {/* Add other sidebar items here */}
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        {/* Main content goes here */}
        <h1>NestEgg Partner API</h1>
        {/* Add more content and sections here */}
      </main>
    </div>
  );
};

export default HomePage;
