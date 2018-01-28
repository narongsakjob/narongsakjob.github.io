import React from 'react'
import styled from 'styled-components'

import About from '../sections/body/about/about'
import Project from '../sections/body/project/project'
import Skill from '../sections/body/skill/skill'

const Container = styled.div`
	background-color:	#ffffff;
`

export default class Body extends React.Component {
	render() {
		const { t } = this.props
		return (
			<Container>
        <About t={t} />
				<Project t={t} />
				<Skill />
			</Container>
		)
	}
}

