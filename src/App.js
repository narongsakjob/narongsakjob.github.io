import React, { Component } from 'react'

//i18n
import { translate } from 'react-i18next'

//Components
import Header from './components/header'
import Body from './components/body'

import './App.css';

class App extends Component {
  render() {
    const { t, i18n } = this.props;
    
    return (
      <div id="App">
        <Header t={t} i18n={i18n} />
        <Body t={t} />
      </div>
    )
  }
}

export default translate('translations')(App);