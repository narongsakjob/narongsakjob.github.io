import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: #f3f3f3;
	padding: 10%;
	text-align: center;
`
const Profile = [
	<img src=""/>
]


export default class About extends React.Component {
	render() {
		const { t } = this.props
		return (
			<Container className="container-fluid">
				{ Profile }
			</Container>
		)
	}
 }