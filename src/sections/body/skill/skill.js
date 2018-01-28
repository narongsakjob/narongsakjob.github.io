import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

import Title from '../_shared/title'
import data from './data'

const Progress = styled.div`
	background-color: red;
	height: 20px;
`
const Image = styled.img`
	height: 50px;
	width: 50px;
	margin-right: 5px;
`

const get_data = () => (
	data.map( (object, key) =>  
		<div className="row" key={key} style={{ marginBottom: "20px" }} >
			<div className="col-md-3"/>
			<h5 className="col-md-3">
				<Image src={ require(`../../../assets/images/skill/${object.image}.png`) } className="img-fluid"/> {object.name}
			</h5>
			<div className="col-md-5">
				<div>{object.framework}</div>
				<div className="progress" style={{ padding: "0px" }}>
					<Progress style={{ width: `${object.percent}%` }}/>
				</div>
			</div>
		</div>
	)
)

const skills = ({t}) => (
	<Element className="container" name="skill" style={{ padding: "50px", marginBottom: "80px" }} >
		<Title menu="skill" t={t} icon="star"/>
		{ get_data() }
	</Element>
)

export default skills