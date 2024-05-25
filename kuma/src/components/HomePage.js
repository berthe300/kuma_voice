import React, { useState } from "react";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaUser, FaComment, FaEnvelope } from "react-icons/fa"; // Importez les icônes nécessaires depuis react-icons
import "./HomePage.css";
import { useTranslation } from "react-i18next"; // Importez le hook useTranslation
import img from "./images/image3.png";
import team01 from "./images/team-01.png";
import team02 from "./images/team-02.jpg";
import team04 from "./images/team-04.png";
import berthe from "./images/berthe.jpg";

// Définition du composant TeamSection
const TeamSection = () => {
  // Tableau de données des membres de l'équipe (nom, image, liens sociaux)
  const teamMembers = [
    {
      name: "Mouhamed Traore",
      image: team01, // Chemin de l'image
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        // Ajoutez d'autres liens sociaux au besoin
      },
    },
    {
      name: "Malamine Diabira",
      image: team02, // Chemin de l'image
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        // Ajoutez d'autres liens sociaux au besoin
      },
    },
    {
      name: "Ibrahim Berthe",
      image: berthe, // Chemin de l'image
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        // Ajoutez d'autres liens sociaux au besoin
      },
    },
    {
      name: "Hawa Gafou",
      image: team04, // Chemin de l'image
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        // Ajoutez d'autres liens sociaux au besoin
      },
    },
    // Ajoutez d'autres membres de l'équipe au besoin
  ];

  return (
    <div className="team-section">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.image} alt={member.name} className="member-image" />
          <h3 className="member-name">{member.name}</h3>
          <div className="social-links">
            {/* Affiche les liens sociaux pour chaque membre */}
            {Object.entries(member.socialLinks).map(
              ([socialPlatform, link]) => (
                <a
                  href={link}
                  key={socialPlatform}
                  className={`social-link ${socialPlatform}`}
                >
                  {socialPlatform}
                </a>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

function HomePage() {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation(); // Utilisez le hook useTranslation pour obtenir la fonction de traduction

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="home-page">
      <div className="hero-multiple">
        <div className="hero-box-container hero-box-container-speak">
          <div className="hero-box speak">
            <div className="content">
              <div className="text-container">
                <h2 className="title">{t("title")}</h2>
                <p className="description">{t("description")}</p>
              </div>

              <a href="/contribute">
                <button>
                  {t("button1")}
                  <div className="star-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                    <div className="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 784.11 815.53"
                      >
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-box-container hero-box-container-listen">
          <div className="hero-box listen">
            <div className="content">
              <div className="text-container">
                <h2 className="title">{t("title2")}</h2>
                <p className="description">{t("description1")}</p>
              </div>

              <a href="/listen">
                <button>
                  {t("button2")}
                  <div className="star-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                  </div>
                  <div className="star-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      ></path>
                    </svg>
                    <div className="star-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 784.11 815.53"
                      >
                        <path
                          className="fil0"
                          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================Nouveau div text en bas====================== */}
      <div className="bottom-content">
        <div className="left-section">
          <img src="./logo/robot.png" alt="" />
          <h1>{t("projetVoice")}</h1>
        </div>
        <div className="right-section">
          <div className="description">
            <p>{t("voiceTechnology")}</p>
            <p>{t("voiceTechnology2")}</p>
            {showMore && (
              <div>
                <p>{t("voiceTechnology3")}</p>
              </div>
            )}
            <button className="button-more-info" onClick={handleShowMore}>
              En savoir plus
            </button>
            {/**<button onClick={handleShowMore}>En savoir plus</button> */}
          </div>
        </div>
      </div>

      {/* C'EST LA PARTIE DES DEUX CONTENEURS  */}
      <div className="stats">
        {/* Ajout des deux nouvelles divs */}
        <div className="container">
          <img src="./logo/graph1.png" alt="" />
          {/* Contenu de la première div </div>*/}
          <img src="./logo/graph2.png" alt="" />
          {/* Contenu de la deuxième div */}
        </div>
      </div>

      {/* CODE DE LA PARTIE OUR TEAM*/}
      <h2>NOTRE EQUIPE</h2>
      <p>Contacter nos groupes </p>
      <TeamSection />
      {/* FIN DE CODE DE LA PARTIE OUR TEAM*/}

      {/**============================FOOTER======================== */}

      <div className="footer-content">
        <div className="help">
          <div className="icon">
            <span>
              <FaUser />
            </span>
            <span>Qui sommes-nous</span>
            <div className="vertical-line"></div>
          </div>
          <div className="icon">
            <span>
              <FaComment />
            </span>
            <span>Discourse</span>
            <div className="vertical-line"></div>
          </div>
          <div className="icon">
            <span>
              <FaEnvelope />
            </span>
            <span>Nous contacter</span>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="logo">
          <div class="logo-content">
            <img class="logo-img" src={img} alt="Logo" />
            <span class="logo-text">
              <a href="d">Contenu disponible sous licence</a>
            </span>
          </div>
        </div>
        <div class="links">
          <ul>
            <li>
              <a href="d">Vie privée</a>
            </li>
            <li>
              <a href="d">Conditions</a>
            </li>
            <li>
              <a href="d">Qui sommes-nous</a>
            </li>
            <li>
              <a href="d">GitHub</a>
            </li>
          </ul>
        </div>
        <div class="sharing">
          <div class="title">
            <span>Aidez-nous à collecter davantage de voix !</span>
          </div>
          <div class="icons">
            <div className="icons">
              <a
                href="https://www.wikipedia.org/"
                style={{ marginRight: "10px" }}
              >
                <FaCopy size={32} />
              </a>
              <a href="x" style={{ marginRight: "10px" }}>
                <FaFacebook size={32} />
              </a>
              <a href="s" style={{ marginRight: "10px" }}>
                <FaTwitter size={32} />
              </a>
              <a href="b" style={{ marginRight: "10px" }}>
                <FaWhatsapp size={32} />
              </a>
            </div>
          </div>
        </div>
        <div class="goal-title">
          <p
            style={{
              width: "300px",
              height: "71.81px",
              fontSize: "18px",
              fontFamily: "Open Sans, sans-serif",
              margin: "0px 0px 10px",
            }}
          >
            Abonnez-vous aux lettres d’information, rappels d’objectifs et bilan
            des progrès de Common Voice
          </p>
          <input
            placeholder="Enter your email"
            class="input"
            name="email"
            type="email"
          />
          <button class="button">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
