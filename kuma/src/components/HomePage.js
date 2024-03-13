import React, { useState } from "react";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaUser, FaComment, FaEnvelope } from "react-icons/fa"; // Importez les icônes nécessaires depuis react-icons
import "./HomePage.css";
import img from "./images/image3.png";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);

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
                <h2 className="title">KUMA!!</h2>
                <p className="description">Donnez un peu de votre voix</p>
              </div>
              <button>
                KUMA
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
            </div>
          </div>
        </div>
        <div className="hero-box-container hero-box-container-listen">
          <div className="hero-box listen">
            <div className="content">
              <div className="text-container">
                <h2 className="title">A LAME!!!</h2>
                <p className="description">
                  Aidez-nous à valider les échantillons vocaux
                </p>
              </div>
              <button>
                A LAME
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
            </div>
          </div>
        </div>
      </div>

      {/* =====================Nouveau div text en bas====================== */}
      <div className="bottom-content">
        <div className="left-section">
          <img src="./logo/robot.png" alt="" />
          <h1>
            Le projet KUMA de MatrixAI aide à apprendre aux machines comment les
            humains parlent vraiment.
          </h1>
        </div>
        <div className="right-section">
          <div className="description">
            <p>
              La voix est naturelle, elle est humaine. C’est pourquoi nous
              sommes impatients de créer une technologie vocale pour nos
              appareils. Mais pour élaborer de tels systèmes vocaux, les
              développeurs ont besoin de vastes échantillons de données vocales.
            </p>
            <p>
              La plupart des données utilisées par les grandes entreprises ne
              sont pas disponibles pour le grand public. Nous estimons que cela
              entrave l’innovation. C’est pourquoi nous avons lancé le projet
              Common Voice, destiné à rendre la reconnaissance vocale ouverte et
              accessible à tout le monde.
            </p>
            {showMore && (
              <div>
                <p>
                  Vous pouvez donner un peu de votre voix pour nous aider à
                  créer une base de données libre, utilisable par n’importe qui
                  pour réaliser des applications innovantes, y compris sur le
                  Web. Lisez une phrase pour aider les machines à apprendre la
                  façon de parler des êtres humains. Écoutez les enregistrements
                  que d’autres ont réalisés pour les valider et ainsi améliorer
                  la qualité des données. C’est aussi simple que ça !
                </p>
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
};

export default HomePage;
