import React, { Component } from 'react'

//i18n
import { translate, Trans } from 'react-i18next'

//Components
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div id="App">
        <Header />
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('th')}>th</button>
        <div>{t('title')}</div>
        <Body />
        <Footer />
      </div>
    )
  }
}

export default translate('translations')(App);
