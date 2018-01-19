import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	margin: auto 0% auto 45%;
	@media only screen and (max-width: 1000px) {
		margin: auto;
	}
`

export default class Middle extends React.Component {
	render() {
		return(
			<Container>
				<div>Welcome</div>
			</Container>
		)
	}
}