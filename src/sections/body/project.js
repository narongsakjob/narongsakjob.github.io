import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10%;
`
const Image = styled.img`
	width: 60%;
	height: 70%;
`

export default class Project extends React.Component {

	constructor(props) {
		super(props)
		this.Table = this.Table.bind(this)
	}

	Table() {
		let { t } = this.props 
		let table = []
		for (let j = 0; j < 5; j++) {
			table.push(
				<Container style={{ backgroundColor: `${ j%2===0 ? '': '#f3f3f3'}` }} key={j}>
						{/* { (() => {
							if(j%2===0) {
								return (
								<div className="container row">
									<div class="col-md-6">
										<h2>Heading</h2>
										<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</p>
									</div>
									<div class="col-md-6">
										<Image src={ require("../../assets/images/projects/wallet_1.png") } />
									</div>
								</div>
								)
							} else {
								return (
									<div className="container row">
										<div class="col-md-6">
											<Image src={ require("../../assets/images/projects/wallet_1.png") } />
										</div>
										<div class="col-md-6">
											<h2>Heading</h2>
											<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</p>
										</div>
									</div>
								)
							}
						})()}						 */}
					{ t('') }
				</Container>
			)
		}
		return table
	}

	render() {
		return (
			this.Table()
		)
	}
}