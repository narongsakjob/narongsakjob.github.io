import React from 'react'
import styled from 'styled-components'

import About from '../sections/body/about'
import Project from '../sections/body/project'

const Container = styled.div`
	top: 120px;
`

export default class Body extends React.Component {
	render() {
		console.log(this.props)
		const { t } = this.props
		return (
			<Container>
        <About />
				<Project />
			</Container>
		)
	}
}

