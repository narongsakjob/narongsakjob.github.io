import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll';

import Image from './images'
import Data from './data'

const Title = styled.div`
	margin: 0 auto 70px auto;
	padding-bottom: 30px;
	text-align: center;
	border-bottom: 2px solid rgba(0,0,0,0.25);	
	width: 75%;
	font-size: 40px;
	color: #B5AD6A;
`

const Container = styled.div`
	padding:  0% 8% 8% 8%;
`
const Underline = styled.div`
	border-bottom: 2px solid rgba(0,0,0,0.25);	
	width: 75%;
	margin : 70px auto 0 auto;
`
export default class Project extends React.Component {

	constructor(props) {
		super(props)
		this.getTable = this.getTable.bind(this)
	}

	getTable() {
		let table = []
		let size = 11
		let {t} = this.props		
		for (let j = 0; j < size ; j++) {
			table.push(
				<Container key={j}>
					<div className="row hidden-md-down">
						{ j%2 === 0 ? <Data index={j} t={t} /> : <Image index={j}/> }
						<div className="col-md-1" style={ {zIndex: '-1'} } ></div>
						{ j%2 !== 0 ? <Data index={j} t={t} /> : <Image index={j}/> }
					</div>
					<div className="container row hidden-lg-up">
						<Data index={j} t={t} />
						<Image index={j}/>
					</div>
					{ j < size-1 ? <Underline /> : ''}
				</Container>
			)
		}
		return table
	}

	render() {
		let {t} = this.props
		return (
			<Element name="project">
				<Title><i className="fa fa-th" aria-hidden="true"></i> { t('title.project') }</Title>
				{ this.getTable() }
			</Element>
		)
	}
}