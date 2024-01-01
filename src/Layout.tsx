import { NavLink } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        {/* Logo */}
        <div className="logo-container">
          <img src="/images/logo3.webp" alt="Company Logo" />
        </div>

        {/* Main navigation */}
        <nav>
          <ul className="sidebar__nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/use-guides"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Use Guides
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/open-banking"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Open Banking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/webhooks"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Webhooks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/glossary"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Glossary
              </NavLink>
            </li>
            {/* Other links */}
            <li>
              <a
                href={`${window.location.origin}/app`}
                target="_blank"
                rel="noopener noreferrer"
              >
                API Reference
              </a>
            </li>
          </ul>
        </nav>

        {/* Footer navigation for API Reference if needed*/}
        <div className="sidebar__footer">
          <ul className="sidebar__nav"></ul>
        </div>
      </aside>
      <div className="main-content-container">
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
