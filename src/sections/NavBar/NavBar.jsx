import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.scss";
import cross from "../../resources/images/icons/cross.svg";
import hamburger from "../../resources/images/icons/hamburger.svg";
import ExpandableCard from "../../components/ExpandableCard/ExpandableCard";

const NavBar = ({ routes, logoRoute }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-links-container">
            <Link
              className="logo-link"
              activeClass="active"
              to={`/#${logoRoute.sectionId}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img src={logoRoute.logoSrc} alt="logo" />
            </Link>
            <div className="nav-links">
              <div className="nav-desktop-links">
                {routes.map((route) => (
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to={`/#${route.sectionId}`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className="mobile-menu" onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <img className="nav-x" src={cross} alt="cross" />
              ) : (
                <img
                  className="nav-hamburger"
                  src={hamburger}
                  alt="hamburger menu"
                />
              )}
            </div>
          </div>
        </div>

        {showNav && (
          <div className="nav-mobile-links">
            {routes.map((route) => (
              <Link
                className="nav-link"
                activeClass="active"
                to={`/#${route.sectionId}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setShowNav(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
