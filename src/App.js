import React, { Component } from 'react'

//i18n
import { translate } from 'react-i18next'

//Components
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

import './App.css';

class App extends Component {
  render() {
    const { t } = this.props;

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
