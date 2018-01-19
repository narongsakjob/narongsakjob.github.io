import React from 'react'
import styled from 'styled-components'

import Burger from '../sections/header/burger'
import Middle from '../sections/header/middle'
import Change from '../sections/header/change';

const Container = styled.div`
	height: 100px;
	background-color: #FFF;
	border-bottom: 1px solid rgba(0,0,0,.07);
`

const Header = props => (
	<div>
		<Container className="row fixed-top hidden-md-down">
			<Burger />
			<Middle />
			<Change />
		</Container>
		<Container className="row hidden-lg-up">
			<Burger />
			<Change />
		</Container>
	</div>

)
export default Header
