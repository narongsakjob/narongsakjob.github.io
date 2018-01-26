import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
`

const Container = styled.div`
	margin-top: 20px;
	padding: 20px 0 20px 0;
`
const Address = styled.div`
	color: #F5F5F5;
	border-radius: 10px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
	background-color: #B5AD6A;
	align-self: center;
	padding: 20px 0 20px 0;
`
const Label = styled.button`
	color: #F5F5F5;
	border: 0;
	padding: 5px 20px 5px 20px;
	border-radius: 20px;
	margin-bottom: 10px;
	background-color: #B5AD6A;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
	&:focus {
		outline: none;
	}
`

const contact = ({t}) => (
	<Container className="row">
		<div className="col-md-6">
			<div className="row">
				<a className="col-md-6 text-right" href="https://www.facebook.com/NarongsakJob" target="_blank"><Label><i className="fa fa-facebook-official" aria-hidden="true"></i> Facebook</Label></a>
				<a className="col-md-6 text-center" href="https://github.com/narongsakjob" target="_blank"><Label><i className="fa fa-github" aria-hidden="true"></i> Github</Label></a>
			</div>
			<div className="row">			
				<a className="col-md-6 text-right" href="http://line.me/ti/p/~job_ynwa" target="_blank"><Label><i className="fa fa-comment-o" aria-hidden="true"></i> Line</Label></a>
				<a className="col-md-6" href="mailto:narongsak.chobsri@gmail.com" target="_blank"><Label><i className="fa fa-envelope" aria-hidden="true"></i> Email</Label></a>
			</div>
			<div className="row"><div className="col-md-4"/><Label className="col-md-6"><i className="fa fa-phone" aria-hidden="true"></i> +66 911018404</Label></div>
		</div>
		<Address className="col-md-4">
			<h3><i class="fa fa-map-marker" aria-hidden="true"></i>  Address</h3>
			{t('about.address')}
		</Address>
	</Container>
)

export default contact