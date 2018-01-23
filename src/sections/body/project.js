import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10%;
`
const Image = styled.img`
	width: 60%;
	height: 70%;
`

var table = []
for (let j = 0; j < 5; j++) {
	table.push(
		<Container style={{ backgroundColor: `${ j%2===0 ? '': '#f3f3f3'}` }} key={j}>
			<div className="container row">
				<div class="col-md-6">
					<h2>Heading</h2>
					<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</p>
				</div>
				<div class="col-md-6">
					<Image src={ require("../../assets/images/projects/wallet_1.png") } />
				</div>
			</div>
		</Container>
	)
}

const Project = () => (
	table
)

export default Project