import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll' 
import Title from '../_shared/title'

const skills = ({t}) => (
	<Element className="container text-center" name="skill">
		<Title menu="skill" t={t} icon="star"/>
	</Element>
)

export default skills