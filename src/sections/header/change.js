import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	margin: auto 0 auto 0;
	padding-right: 5%;
`

export default class Change extends React.Component {
	render() {
		return(
			<Container>
				<button>a</button>
				<button>b</button>
			</Container>
		)
	}
}