import React from 'react'
import styled from 'styled-components'
import ScrollEvent from 'react-onscroll';

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
	
	constructor(props) {
		super(props);
		let { t } = this.props
		this.handleScrollCallback = this.handleScrollCallback.bind(this);
		this.state = { show: t('title.welcome') }
	}

	handleScrollCallback() {
		let { t } = this.props
		let about = document.getElementsByName("about")[0]
		let profile = document.getElementsByName("profile")[0]				
		let contact = document.getElementsByName("contact")[0]		
		let project = document.getElementsByName("project")[0]
		if( project.getBoundingClientRect().top < 60 ) {
			this.setState({ show: t('title.project') })
		}else if(contact.getBoundingClientRect().top < 60) {
			this.setState({ show: t('title.contact') })
		}else if(profile.getBoundingClientRect().top < 60) {
			this.setState({ show: t('title.information') })
		}else if(about.getBoundingClientRect().top < 60) {
			this.setState({ show: t('title.about') })
		}else {
			this.setState({ show: t('title.welcome') })
		}
	}
	listenScrollEvent() {
    console.log('Scroll event detected!');
	}

	render() {
		let { t } = this.props
		return(
			<Container onScroll={this.listenScrollEvent}>
				<ScrollEvent handleScrollCallback={this.handleScrollCallback} />
				<Title>{ this.state.show }</Title>
			</Container>
		)
	}
}