import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: fixed;
	bottom: 0%;
`

const Footer = props => (
	<Container>
		{props.t('title')} footer
	</Container>
	
)
export default Footer
