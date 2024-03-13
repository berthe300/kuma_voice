// ===============================LE FICHIER APP.JS================================================//

import React, { Component } from 'react';
import AppNavbar from './components/Navbar';
import HomePage from './components/HomePage';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import '../src/components/Navbar.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }

  componentWillUnmount() {
    window.matchMedia("(min-width: 768px)").removeEventListener('change', this.handler);
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <div className="App">
          <AppNavbar />
          <main>
        

            {this.state.matches ? <HomePage /> : <HomePage />} {/* Affiche HomePage pour les écrans petits aussi */}
          </main>
        </div>
      </I18nextProvider>
    );
  }
}

export default App;
