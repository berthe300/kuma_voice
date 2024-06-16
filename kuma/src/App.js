import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import Datasets from "./pages/Datasets";
import Language from "./pages/Languages";
import Partenaire from "./pages/Partenaire";
import Login from "./pages/Login";
import Signp from "./pages/Signp";
import AppNavbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Importez AppRouter
import Listen from "./pages/Listen";
import Write from "./pages/Write";
import Fulla from "./pages/langues/Fulla";
import Maneka from "./pages/langues/Maneka";
import Maraka from "./pages/langues/Maraka";
import Senofo from "./pages/langues/Senofo";
import Dogon from "./pages/langues/Dogon";
import Souraka from "./pages/langues/Souraka";
import Bozo from "./pages/langues/Bozo";
import Kassongue from "./pages/langues/Kassongue";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }

  componentWillUnmount() {
    window
      .matchMedia("(min-width: 768px)")
      .removeEventListener("change", this.handler);
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="App">
            <AppNavbar />

            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contribute" element={<Contribute />} />
                <Route path="/Datasets" element={<Datasets />} />
                <Route path="/Languages" element={<Language />} />
                <Route path="/Partenaire" element={<Partenaire />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signp" element={<Signp />} />
                <Route path="/Listen" element={<Listen />} />
                <Route path="Write" element={<Write />} />
                <Route path="/Fulla" element={<Fulla/>} />
                <Route path="/Maneka" element={<Maneka />} />
                <Route path="/Maraka" element={<Maraka />} />
                <Route path="/Senofo" element={<Senofo />} />
                <Route path="/Dogon" element={<Dogon />} />
                <Route path="/Souraka" element={<Souraka />} />
                <Route path="/Bozo" element={<Bozo />} />
                <Route path="/Kassongue" element={<Kassongue />} />

              </Routes>
            </main>
          </div>
        </Router>
      </I18nextProvider>
    );
  }
}

export default App;
