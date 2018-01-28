import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll' 

const Title = styled.div`
	margin: 0 auto 70px auto;
	padding-bottom: 30px;
	text-align: center;
	border-bottom: 2px solid rgba(0,0,0,0.25);	
	width: 75%;
	font-size: 40px;
	color: #B5AD6A;
`

const skills = () => (
	<Element className="container text-center" name="skill">
		<Title> Skills </Title>
	</Element>
)

export default skills