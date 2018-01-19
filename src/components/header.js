import React from 'react'
import styled from 'styled-components'

import Burger from '../sections/header/burger'
import Middle from '../sections/header/middle'
import Change from '../sections/header/change';

const Container = styled.div`
	height: 100px;
`

const Header = props => (

	<Container className="row navbar-light bg-faded fixed-top">
		<Burger />
		<Middle />
		<Change />
	</Container>
)
export default Header
