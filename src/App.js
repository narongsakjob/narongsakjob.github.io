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
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <div className="App-intro">
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
          <div>{t('description.part2')}</div>
        </div>
    )
  }
}

export default translate('translations')(App);
