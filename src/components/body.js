import React from 'react'

export default class Body extends React.Component {
	render() {
		console.log(this.props)
		const { t } = this.props
		return (
			<div>
        <div>{t('title')} Body</div>
				<div href="#" className="btn btn-danger">asd</div>
				<i className="fa fa-heartbeat" aria-hidden="true"></i>
			</div>
		);
	}
}

