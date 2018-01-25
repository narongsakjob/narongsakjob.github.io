import React from 'react'
import styled from 'styled-components'

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
const Information = styled.div`
	margin-top: 20px;
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #ede3e1;
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
		this.Profile = this.Profile.bind(this)
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

	Profile() {
		let { t } = this.props
		return (
			<Information>
				<div className="row"><label className="col-md-5 text-right">{ t('about.first_name.label') } : </label> <div className="col-md-3">{ t('about.first_name.value') } { t('about.last_name.value') }</div></div>
				<div className="row"><label className="col-md-5 text-right">{ t('about.nickname.label') } : </label> <div className="col-md-3">{ t('about.nickname.value') }</div></div>
				<div className="row"><label className="col-md-5 text-right">{ t('about.birthdate.label') } : </label> <div className="col-md-3">{ t('about.birthdate.value') }</div></div>
				<div className="row"><label className="col-md-5 text-right">{ t('about.age.label') } : </label> <div className="col-md-3">{ t('about.age.value') } { t('about.age.unit') }</div></div>
				<div className="row"><label className="col-md-5 text-right">{ t('about.nationality.label') } : </label> <div className="col-md-3">{ t('about.nationality.value') }</div></div>
				<div className="row"><label className="col-md-5 text-right">{ t('about.education.label') } : </label> <div className="col-md-4">{ t('about.education.value') } <label>{ t('about.major.label') }</label></div></div>
				<div className="row"><div className="col-md-5"/><div className="col-md-4 text-left">&nbsp;{ t('about.major.value') }</div></div>
			</Information>
		)
	}
	
	render() {
		let image_url = require("../../assets/images/me.jpg")
		return (
			<Container className="container">
				<div className="row">
					<Image src={ image_url }  className="rounded-circle img-fluid col-md-4" key="image"/><br/>
					{this.About()}
				</div>
				<Title>Information</Title>
				{this.Profile()}
			</Container>
		)
	}
 }
