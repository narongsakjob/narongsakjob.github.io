import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	top: 100px;
`

export default class Body extends React.Component {
	render() {
		console.log(this.props)
		const { t } = this.props
		return (
			<Container className="container">
        <div>{t('title')} Body</div>
				<div href="#" className="btn btn-danger">asd</div>
				<i className="fa fa-heartbeat" aria-hidden="true"></i>
			</Container>
		)
	}
}

