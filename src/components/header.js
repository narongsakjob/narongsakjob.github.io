import React from 'react'
import styled from 'styled-components'

import Burger from '../sections/header/burger'
import Middle from '../sections/header/middle'
import Change from '../sections/header/change';

const Container = styled.div`
	height: 100px;
	background-color: #FFF;
	border-bottom: 2px solid rgba(0,0,0,.07);
`

const Header = props => (
	<div>
		<Container className="row fixed-top hidden-md-down">
			<Burger />
			<Middle t={props.t}/>
			<Change i18n={props.i18n} />
		</Container>
		<Container className="hidden-lg-up">
			<Burger />
			<Change i18n={props.i18n}/>
		</Container>
	</div>

)
export default Header
