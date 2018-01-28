import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import img_projects from './image_path'

const Image = styled.img`
	max-height: 300px;
	width: 400px;
`

const settings = {
	dots: true,
	speed: 400,
	lazyLoad: true,
	focusOnSelect: true,
	autoplay: true
}

const get_images = ({index}) => (
	<div className="col-md-6 text-center">
		<Slider {...settings} className="text-center" key={index}>
			{ img_projects[index].map((image, i) => 
				<Image src= { image } key={i}/>
			)}
		</Slider>
	</div>
)

export default get_images