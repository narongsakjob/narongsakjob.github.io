import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	margin: auto;
	display: block;
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