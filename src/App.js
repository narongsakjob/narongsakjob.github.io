import React, { Component } from 'react'
import { render } from 'react-dom';

//i18n
import { translate } from 'react-i18next'

//Components
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

import './App.css';

class App extends Component {
  render() {
    const { t, i18n } = this.props;
    
    return (
      <div id="App">
        <Header t={t} i18n={i18n} />
        <Body t={t} />
        {/* <Footer t={t} /> */}
      </div>
    )
  }
}

export default translate('translations')(App);

document.body.addEventListener("scroll", () => {

  console.log("scroll event outside ")

});