import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	margin: auto 0 auto 0;
	padding-right: 5%;
`
const Button = styled.button`
	background-color: transparent;
	border: 0;
	&:focus{outline: 0;};
	&:hover{cursor: pointer;};
`

const Image = styled.img`
	width: 30px;
	height: 30px;
	@media only screen and (max-width: 768px) {
		width: 25px;
		height: 25px;
	}
`

export default class Change extends React.Component {
	render() {
		return(
			<Container>
				<Button><Image src={ require("../../assets/images/th.png") } alt='' /></Button>
				<Button><Image src={ require("../../assets/images/en.png") } alt='' /></Button>
			</Container>
		)
	}
}