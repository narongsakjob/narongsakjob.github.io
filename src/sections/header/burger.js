import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Element, scrollSpy, Events, Link } from 'react-scroll';

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
				<Link to="about" spy={true} smooth={true} duration={500} offset={-50}  className="menu-item" >About</Link>
				<Link to="profile" spy={true} smooth={true} duration={500} offset={-50} className="menu-item" >Information</Link>
				<Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="menu-item" >Contact</Link>
				<Link to="project" spy={true} smooth={true} duration={500} offset={-50} className="menu-item" >Projects</Link>        
			</Menu>
    );
  }
}

export default Burger