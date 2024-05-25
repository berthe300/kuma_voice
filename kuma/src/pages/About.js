import React from "react";
import "./Pages.css";
import { useTranslation } from "react-i18next";
import robot1 from "../components/images/robot1.png";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import img1 from "../components/images/image3.png";
function About() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="nav desktop"></div>
      <div className="about-container about-heading">
        <div className="about-header-text">
          <h1>{t("why")}</h1>
          <p>
            {t("reason")}
          </p>
          <p>
          {t("reason1")}
          </p>
        </div>
        <div className="about-image">
          <img src={robot1} alt="Robot" />
          <h1>{t("bt")}</h1>
          <p>
            We’re crowdsourcing an open-source dataset of voices. Donate your
            voice, validate the accuracy of other people’s clips, make the
            dataset better for everyone
          </p>
        </div>
      </div>
      <div className="button-container">
        <button className="button1">{t("bt")}</button>
        <button className="button2">{t("bt1")}</button>
      </div>

      <div className="how-it-work">
        <div className="how-it-work-intro">
          <h1>{t("bt")}</h1>
          <p>
          {t("para")}
          </p>
        </div>
      </div>
      <div className="how-it-works-content ">
        <div className="how-it-works-blocks">
          <div className="how-it-works-icon">1</div>
          <h3>1. {t("unT")}</h3>
          <p>{t("un")}.</p>
        </div>
        <div className="how-it-works-blocks">
          <div className="how-it-works-icon">2</div>
          <h3>2.{t("deuxT")}</h3>
          <p>{t("deux")}</p>
        </div>
        <div className="how-it-works-blocks">
          <div className="how-it-works-icon">3</div>
          <h3>3.{t("troisT")}</h3>
          <p>{t("trois")}</p>
        </div>
        <div className="how-it-works-blocks">
          <div className="how-it-works-icon">4</div>
          <h3>4.{t("quatreT")}</h3>
          <p>{t("quatre")}</p>
        </div>
        <div className="how-it-works-blocks">
          <div className="how-it-works-icon">5</div>
          <h3>5.{t("cinqT")}</h3>
          <p>{t("cinq")}</p>
        </div>
        <div className="how-it-works-blocks">
          <div className="how-it-works-icon">6</div>
          <h3>6.Voice Validation</h3>
          <p>Other people validate those voice clips.</p>
        </div>
      </div>

      <footer class="footer">
        <div class="logo">
          <div class="logo-content">
            <img class="logo-img" src={img1} alt="Logo" />
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

export default About;
