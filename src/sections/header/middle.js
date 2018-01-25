import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	margin: auto 0% auto 42.5%;
	@media only screen and (max-width: 1000px) {
		margin: auto;
	}
`
const Title = styled.div`
	font-size: 30px;
`

export default class Middle extends React.Component {

	check_position () {
		var winHeight = window.innerHeight;
		console.log(winHeight)
	}

	render() {
		return(
			<Container>
				{ this.check_position() }
				<Title>Welcome</Title>
			</Container>
		)
	}
}