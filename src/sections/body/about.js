import React from 'react'
import styled from 'styled-components'
import Profile from './information'

const Title = styled.div`
	margin: 30px auto 0 auto;
	padding-bottom: 30px;
	text-align: center;
	border-bottom: 2px solid rgba(0,0,0,0.25);	
	width: 75%;
	font-size: 40px;
`

const Container = styled.div`
	padding: 8%;
	text-align: center;
	margin-top: 7%;
	@media only screen and (max-width: 768px) {
		margin-top: 0%;
	}
`
const Image = styled.img`
	max-height: 300px;
`
const AboutMe = styled.div`
	align-self: center;
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #ede3e1;
	word-wrap: break-word;
	padding: 20px;
`


export default class About extends React.Component {

	constructor(props) {
		super(props)
		this.About = this.About.bind(this)
	}

	About() {
		let { t } = this.props
		return (
			<AboutMe className="col-md-7">
				<h1 style={{ marginBottom: "20px" }}>Software Developer</h1>
				<p>{ t('about.title') }</p>
			</AboutMe>
		)
	}
	
	render() {
		let { t } = this.props
		let image_url = require("../../assets/images/me.jpg")
		return (
			<Container className="container">
				<div className="row">
					<Image src={ image_url }  className="rounded-circle img-fluid col-md-4" key="image"/><br/>
					{this.About()}
				</div>
				<Title>Information</Title>
				<Profile t={t} />
			</Container>
		)
	}
 }
