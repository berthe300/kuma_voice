import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle"; // Importer le composant ThemeToggle
import "./Navbar.css"; // Importer les styles de Navbar

const AppNavbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <img className="logo-img mr-2" src="logo/logo1.png" alt="Logo" />
      <Navbar.Brand href="/" className="mr-4">KUMA KUNNAFONIDILAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-grow-1 justify-content-between">
          <Nav.Link href="/Contribute" className="nav-link-spaced">{t("contribute")}</Nav.Link>
          <Nav.Link href="/Datasets" className="nav-link-spaced">{t("datasets")}</Nav.Link>
          <Nav.Link href="/Languages" className="nav-link-spaced">{t("languages")}</Nav.Link>
          <Nav.Link href="/Partenaire" className="nav-link-spaced">{t("becomePartner")}</Nav.Link>
          <Nav.Link href="/About" className="nav-link-spaced">{t("about")}</Nav.Link>
          <div className="user-section nav-link-spaced">
            <div className="nav-login-container">
              <div className="user-icon-container"></div>
              <Nav.Link href="/Signp">{t("login")}</Nav.Link>
            </div>
          </div>
        </Nav>
        <NavDropdown
          title={<FontAwesomeIcon icon={faGlobe} />}
          id="basic-nav-dropdown"
          className="mr-4"
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
        <ThemeToggle /> {/* Ajouter le sélecteur de thème */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
