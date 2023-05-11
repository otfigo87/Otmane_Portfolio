import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li className="nav-portfolio">
            Portfolio
            <ul className="nav-projects">
              <NavLink
                to="/project1"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Crypto-Watch</li>
              </NavLink>
              <NavLink
                to="/project2"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Connectify</li>
              </NavLink>
              <NavLink
                to="/project3"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Lyon Béton</li>
              </NavLink>
              <NavLink
                to="/project4 "
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>Nation Flags</li>
              </NavLink>
              <NavLink
                to="/project5 "
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>SEI Café</li>
              </NavLink>
            </ul>
          </li>
        </NavLink>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
