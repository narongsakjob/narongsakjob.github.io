import React from 'react'
import styled from 'styled-components'
import Profile from './information'
import Contact from './contact'

const Title = styled.div`
	margin: 30px auto 40px auto;
	padding-bottom: 20px;
	text-align: center;
	border-bottom: 2px solid rgba(0,0,0,0.25);	
	width: 75%;
	font-size: 40px;
	color: #B5AD6A;
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
	@media only screen and (max-width: 768px) {
		margin-bottom: 40px;
	}
`
const AboutMe = styled.div`
	align-self: center;
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #B5AD6A;
	word-wrap: break-word;
	padding: 20px;
	color: #FFF;
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
				<h1>{t('about.first_name.value')} {t('about.last_name.value')}</h1>
				<h4 style={{ marginBottom: "20px" }}>{t('about.role')}</h4>
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
				<Title><i class="fa fa-user-circle" aria-hidden="true"></i> { t('title.information') }</Title>
				<Profile t={t} />
				<Title><i class="fa fa-address-book" aria-hidden="true"></i> { t('title.contact') }</Title>
				<Contact t={t}/>
			</Container>
		)
	}
 }
