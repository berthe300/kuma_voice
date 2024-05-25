// Partenaire.js
import React from "react";
import "./Pages.css";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaUser, FaComment, FaEnvelope } from "react-icons/fa"; // Importez les icônes nécessaires depuis react-icons
import img from "../components/images/robot.png";
import part1 from "../components/images/Agetic.jpeg";
import part3 from "../components/images/moov.jpeg";

import part4 from "../components/images/matrix.jpg";
import part6 from "../components/images/nvidia.jpg";

function Partenaire() {
  return (
    <div class="partner-main-container">
      <section class="partnership-section">
        <div class="partnership-container">
          <div class="partnership-header-text">
            <h1>Partnerships</h1>
            <p>
              It takes a lot to make Common Voice happen! We don't do it alone.
              Want to partner with us? We'd love to hear from you. Get in touch
            </p>
            <button class="contactButton">
              Nous contacter
              <div class="iconButton">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>

          <div class="partnership-header-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="ours-partner">
          <h1>Ours Partners</h1>
        </div>
      </section>
      <div className="ours-partner-img">
        <div className="image-container">
          <img src={part1} alt="" />
        </div>

        <div className="image-container">
          <img src={part3} alt="" />
        </div>

        <div className="image-container">
          <img src={part4} alt="" />
        </div>
        <div className="image-container">
          <img src={part6} alt="" />
        </div>
      </div>

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

export default Partenaire;
