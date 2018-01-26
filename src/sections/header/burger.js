import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
		position: 'relative',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#931F1D'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fff'
  },
  bmMenu: {
    background: '#931F1D',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#D1CB8A',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Burger extends Component {
  render () {
    return (
			<Menu left styles={ styles }>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
			</Menu>
    );
  }
}

export default Burger