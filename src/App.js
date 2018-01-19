import React, { Component } from 'react'

//i18n
import { translate, Trans } from 'react-i18next'

//Components
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

import './App.css';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div id="App">
        <Header t={t} />
        <Body t={t} />
        <Footer t={t} />
      </div>
    )
  }
}

export default translate('translations')(App);
