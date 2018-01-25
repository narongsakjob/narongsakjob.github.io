import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import img_projects from '../../assets/data'

const Container = styled.div`
	padding: 8%;
`

const Desc = styled.div`
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #ede3e1;
	@media only screen and (max-width: 768px) {
		margin-bottom: 4px;
	}
`
const Head =styled.div`
	margin-top: 10px;
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

		let get_github = (index) => {
			return <a href={t(`projects.${index}.github`)} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
		}
		let get_wiki = (index) => {
			return <a href={t(`projects.${index}.wiki`)} target="_blank"><i className="fa fa-wikipedia-w" aria-hidden="true"></i></a>			
		}
		let get_www = (index) => {
			return <a href={t(`projects.${index}.server`)} target="_blank"><i className="fa fa-globe" aria-hidden="true"></i></a>			
		}
 
		return(
			<Desc className="col-md-5">
				<Head>
					<h2 className="text-center">{ t(`projects.${index}.name`) }</h2>
					<p>{ t(`projects.${index}.description`) }.</p>
				</Head>
				<div className="text-center">
					{ t(`projects.${index}.github`) === 'no' ? "" : get_github(index) }
					{ t(`projects.${index}.wiki`) === 'no' ? "" : get_wiki(index) }
					{ t(`projects.${index}.server`) === 'no' ? "" : get_www(index) }					
				</div>
			</Desc>
		)
	}

	getImage(index) {
	
		const settings = {
      dots: true,
      speed: 400,
      slidesToShow: 1,
			slidesToScroll: 1
		};
		return(
			<div className="col-md-6 text-center">
				<Slider {...settings} className="text-center">
					{ img_projects[index].map((image, i) => 
						<Image src= { require(`../../assets/images/projects/${image}.png`) } />
					)}
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
					<div className="row hidden-md-down">
						{ j%2 === 0 ? this.getData(j) : this.getImage(j) }
						<div className="col-md-1" style={ {zIndex: '-1'} } ></div>
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