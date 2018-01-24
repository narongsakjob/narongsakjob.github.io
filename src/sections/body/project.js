import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const Container = styled.div`
	padding: 10%;
`
const Image = styled.img`
	max-height: 300px;
	width: 400px;
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
				<h2 class="text-center">{ t(`projects.${index}.name`) }</h2>
				<p>{ t(`projects.${index}.description`) }.</p>
			</div>
		)
	}

	getImage(index) {
	
		const settings = {
      dots: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
		return(
			<div class="col-md-6 text-center">
				<Slider {...settings} class="text-center">
        	<Image src={ require("../../assets/images/projects/wallet_1.png") } />
        	<Image src={ require("../../assets/images/projects/wallet_2.png") } />
        </Slider>
			</div>
		)
	}
	

	getTable() {
		let table = []
		let size = 11
		for (let j = 0; j < size ; j++) {
			table.push(
				<Container style={{ backgroundColor: `${ j%2===0 ? '': '#f3f3f3'}` }} key={j}>
					<div className="container row hidden-md-down">
						{ j%2 === 0 ? this.getData(j) : this.getImage(j) }
						{ j%2 !== 0 ? this.getData(j) : this.getImage(j) }
					</div>
					<div className="container row hidden-lg-up">
						{ this.getData(j) }
						{ this.getImage(j) }
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