import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: lightgrey;
	padding: 10%;
`

const Footer = props => (
	<Container className="container-fluid">
		{props.t('title')} footer
	</Container>
	
)
export default Footer
