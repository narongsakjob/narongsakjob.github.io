import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10% 10% 0% 10%;
`
const Image = styled.img`
	width: 60%;
	height: 70%;
`

export default class Project extends React.Component {

	constructor(props) {
		super(props)
		this.getData = this.getData.bind(this)
	}

	getData(index) {
		let { t } = this.props 
		return(
			<div class="col-md-6">
				<h2>{ t(`projects.${index}.name`) }</h2>
				<p>{ t(`projects.${index}.description`) }.</p>
			</div>
		)
	}

	getImage(index) {
		return(
			<div class="col-md-6 text-center">
				<Image src={ require("../../assets/images/projects/wallet_1.png") } />
			</div>
		)
	}
	

	getTable() {
		let table = []
		let size = 11
		for (let j = 0; j < size ; j++) {
			table.push(
				<Container style={{ backgroundColor: `${ j%2===0 ? '': '#f3f3f3'}` }} key={j}>
					<div className="container row">
						{ j%2 === 0 ? this.getData(j) : this.getImage(j) }
						{ j%2 !== 0 ? this.getData(j) : this.getImage(j) }
					</div>
				</Container>
			)
		}
		return table
	}

	render() {
		return (
			this.getTable()
		)
	}
}