import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const AppNavbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <img className="logo-img" src="logo/logo1.png" alt="Logo" />
      <Navbar.Brand href="/">KUMA KUNNAFONIDILAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-grow-2 justify-content-between">
          <Nav.Link href="/Contribute">{t("contribute")}</Nav.Link>
          <Nav.Link href="/Datasets">{t("datasets")}</Nav.Link>
          <Nav.Link href="/Languages">{t("languages")}</Nav.Link>
          <Nav.Link href="/Partenaire">{t("becomePartner")}</Nav.Link>
          <Nav.Link href="/About">{t("about")}</Nav.Link>
          <div className="user-section">
            <div className="nav-login-container">
              <div className="user-icon-container"></div>
              {/*<Nav.Link href="/Login">{t("login")}</Nav.Link>*/}
              <Nav.Link href="Signp">{t("login")}</Nav.Link>
            </div>
          </div>
        </Nav>
        <NavDropdown
          title={<FontAwesomeIcon icon={faGlobe} />}
          id="basic-nav-dropdown"
          className="lex-grow-1.5"
        >
          <NavDropdown.Item onClick={() => changeLanguage("en")}>
            English
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => changeLanguage("fr")}>
            Français
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => changeLanguage("di")}>
            Bambara
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
