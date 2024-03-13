// Navbar.js
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
      <img class="logo-img" src="logo/logo1.png" alt="Logo" />
      <Navbar.Brand href="#">KUMA KUNNAFONIDILAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-grow-2 justify-content-between">
          {" "}
          {/* Ajoutez la classe justify-content-between ici */}
          <NavDropdown title={t("contribute")} id="basic-nav-dropdown">
            <NavDropdown.Item href="#">{t("speak")}</NavDropdown.Item>
            <NavDropdown.Item href="#">{t("listen")}</NavDropdown.Item>
            <NavDropdown.Item href="#">{t("write")}</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">{t("datasets")}</Nav.Link>
          <Nav.Link href="#">{t("languages")}</Nav.Link>
          <Nav.Link href="#">{t("becomePartner")}</Nav.Link>
          <Nav.Link href="#">{t("whoWeAre")}</Nav.Link>
          {/* Icône utilisateur, lien de connexion et lien d'inscription rassemblés dans une div */}
          <div className="user-section">
            {" "}
            {/* Ajoutez cette div pour la section "Se connecter" et "S'inscrire" */}
            <div className="nav-login-container">
              <div className="user-icon-container">
                {" "}
                {/* Ajoutez cette div pour l'icône utilisateur */}
              </div>
              <Nav.Link href="#">{t("login")}</Nav.Link>
              <Nav.Link href="#">{t("signup")}</Nav.Link>
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
          {/* Ajoutez d'autres langues ici */}
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
