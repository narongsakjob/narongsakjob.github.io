import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
	margin: 0 auto 70px auto;
	padding-bottom: 30px;
	text-align: center;
	border-bottom: 2px solid rgba(0,0,0,0.25);	
	width: 75%;
	font-size: 40px;
	color: #B5AD6A;
`

const Title = ({menu, icon, t}) => (
	<Text><i className={`fa fa-${icon}`} aria-hidden="true"></i> { t(`title.${menu}`) }</Text>
)

export default Title