import React, { Component } from 'react'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
