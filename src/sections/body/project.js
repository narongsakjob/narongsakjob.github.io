import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10%;
`

var table = []
for (let j = 0; j < 5; j++) {
	table.push(
		<Container style={{ backgroundColor: `${ j%2==0 ? '': '#f3f3f3'}` }} key={j}>
			<div className="container">asdas</div>
		</Container>
	)
}

const Project = () => (
	table
)

export default Project