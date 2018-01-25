import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
	background-color: #f3f3f3;
	padding: 4%;
	text-align: center;
	margin-top: 7%;
	@media only screen and (max-width: 768px) {
		margin-top: 0%;
	}
`
const Image = styled.img`
	width: 150px;
`

export default class About extends React.Component {

	constructor(props) {
		super(props)
		this.Profile = this.Profile.bind(this)
	}
	
	Profile() {
		let { t } = this.props
		let image_url = require("../../assets/images/me.jpg")
		return (
			<div>
				<Image src={ image_url }  className="rounded-circle img-fluid" key="image"/><br/>
				<div><label>{ t('about.first_name.label') } : </label> { t('about.first_name.value') } { t('about.last_name.value') }</div>
				<div><label>{ t('about.nickname.label') } : </label> { t('about.nickname.value') }</div>
				<div><label>{ t('about.birthdate.label') } : </label> { t('about.birthdate.value') } <label>{ t('about.age.label') } : </label> { t('about.age.value') } { t('about.age.unit') }</div>
				<div><label>{ t('about.nationality.label') } : </label> { t('about.nationality.value') }</div>
				<div><label>{ t('about.education.label') } : </label> { t('about.education.value') } <label> { t('about.major.label') } </label> { t('about.major.value') }</div>
			</div>
		)
	}
	
	render() {
		return (
			<Container className="container-fluid">
				{this.Profile()}
			</Container>
		)
	}
 }
