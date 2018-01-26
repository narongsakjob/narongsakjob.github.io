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
	
	listenScrollEvent() {
    console.log('Scroll event detected!');
	}

	render() {
		let { t } = this.props
		return(
			<Container onScroll={this.listenScrollEvent}>
				<Title>{ t('title.welcome') }</Title>
			</Container>
		)
	}
}