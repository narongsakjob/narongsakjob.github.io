import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	margin-top: 20px;
	padding: 20px 0 20px 0;
`
const Address = styled.div`
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #ede3e1;
`

const contact = ({t}) => (
	<Container className="row">
		<div className="col-md-6">
			<div className="row">
				<a className="col-md-6 text-right" href="https://www.facebook.com/NarongsakJob"><i className="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a>
				<a className="col-md-6 text-center" href="https://github.com/narongsakjob"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
			</div>
			<div className="row">			
				<a className="col-md-6 text-right" href="http://line.me/ti/p/~job_ynwa"><i className="fa fa-comment-o" aria-hidden="true"></i> Line</a>
				<a className="col-md-6" href="mailto:narongsak.chobsri@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i> Email</a>
			</div>
			<div><i className="fa fa-phone" aria-hidden="true"></i>+66 911018404</div>
		</div>
		<Address className="col-md-4">
			<div>Address</div>
			{t('about.address')}
		</Address>
	</Container>
)

export default contact