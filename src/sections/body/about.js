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
				<div><label>Name : </label> { t('about.first_name') } { t('about.last_name') }</div>
				<div><label>Nickname : </label> { t('about.nickname') }</div>
				<div><label>Birthdate : </label> { t('about.birthdate') } <label>Age : </label> { t('about.age') } years old</div>
				<div><label>Nationality : </label> { t('about.nationality') }</div>
				<div><label>Education : </label> { t('about.education') } <label> Bachelor in </label> { t('about.major') }</div>
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
