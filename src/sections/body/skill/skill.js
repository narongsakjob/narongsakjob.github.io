import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll' 
import Title from '../_shared/title'

const Progress = styled.div`
	background-color: red;
	width: 20%;
`
const Image = styled.img`
	max-height: 30px;
`

const skills = ({t}) => (
	<Element className="container" name="skill" style={{ padding: "50px", marginBottom: "80px" }} >
		<Title menu="skill" t={t} icon="star"/>
		<div>
			<div className="row">
				<div className="col-md-3"/>
				<div className="col-md-2">
					<Image src={ require('../../../assets/images/skill/ruby.png') } className="img-fluid"/> Ruby
				</div>
				<div className="progress col-md-4" style={{ padding: "0px" }}>
					<Progress />
				</div>
			</div>
		</div>
		<div>Python</div>
		<div>HTML/CSS</div>		
		<div>Java</div>
		<div>Javascript</div>
		<div>Swift</div>
		<div>C/C++</div>
		<div>PHP</div>
	</Element>
)

export default skills