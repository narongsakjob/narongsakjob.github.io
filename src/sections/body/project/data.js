import React from 'react'
import styled from 'styled-components'

const Desc = styled.div`
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #B5AD6A;
	color: #F5F5F5;
	@media only screen and (max-width: 768px) {
		margin-bottom: 20px;
	}
`
const Head =styled.div`
	margin-top: 10px;
`
const Link = styled.a`
	border-radius: 0px;
	padding: 10px;
	color: black;
	&:hover {
		transform: scale(1.2);
	}
`
const Icon = styled.i`
	&:hover {
		transform: scale(1.2);
	}
`


const get_github = (index, t) => {
	return <Link href={t(`projects.${index}.github`)} target="_blank" rel="noopener noreferrer"><Icon className="fa fa-github github" aria-hidden="true"></Icon></Link>
}
const get_wiki = (index, t) => {
	return <Link href={t(`projects.${index}.wiki`)} target="_blank" rel="noopener noreferrer"><Icon className="fa fa-file wiki" aria-hidden="true"></Icon></Link>			
}
const get_www = (index, t) => {
	return <Link href={t(`projects.${index}.server`)} target="_blank" rel="noopener noreferrer"><Icon className="fa fa-globe globe" aria-hidden="true"></Icon></Link>			
}
const get_private = () => {
	return <div><i className="fa fa-lock wiki" aria-hidden="true"></i> Private code</div>
}

const get_data = ( {index, t} ) => (
	<Desc className="col-md-5">
		<Head className="text-center">
			<h2>{ t(`projects.${index}.name`) }</h2>
			<p>{ t(`projects.${index}.description`) }.</p>
		</Head>
		<h5 className="text-center">
			<i className="fa fa-tags" aria-hidden="true"> { t(`projects.${index}.tags`) }</i>
		</h5>
		<div className="text-center">
			{ t(`projects.${index}.github`) === 'no' ? get_private() : get_github(index, t) }
			{ t(`projects.${index}.wiki`) === 'no' ? "" : get_wiki(index, t) }
			{ t(`projects.${index}.server`) === 'no' ? "" : get_www(index, t) }					
		</div>
	</Desc>
)

export default get_data