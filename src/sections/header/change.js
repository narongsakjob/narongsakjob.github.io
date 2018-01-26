import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	top: 40px;
	right: 100px;
	position: fixed;
	@media only screen and (max-width: 768px) {
		margin-left: 60%;
		position: relative;
		top: auto;
		right: auto;
	}
`
const Button = styled.button`
	background-color: transparent;
	border: 0;
	&:focus{outline: 0;};
	&:hover{cursor: pointer;};
	color: #931F1D;
`

export default class Change extends React.Component {
	render() {
		
		let { i18n } = this.props

		const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

		return(
			<Container>
				<Button onClick={() => changeLanguage('th')}>TH</Button>|
				<Button onClick={() => changeLanguage('en')}>EN</Button>
			</Container>
		)
	}
}