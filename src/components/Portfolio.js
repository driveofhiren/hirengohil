import React, { Component } from 'react'

export default class Porfolio extends Component {
	render() {
		let resumeData = this.props.resumeData

		return (
			<section id="projects">
				<div className="row">
					<div className="rcon">
						<h1>
							<span>Projects</span>{' '}
						</h1>
						<div id="portfolio-wrapper" className="bgrid-quarters">
							{resumeData.portfolio &&
								resumeData.portfolio.map((item, index) => (
									<div
										className="columns portfolio-item "
										key={index}
									>
										<div
											className="item-wrap"
											style={{
												backgroundColor: '#000080',
												//add border white
												border: '1px solid #290066',

												borderRadius: '8px',
											}}
										>
											<a href={item.imgurl}>
												<div>
													<div className="portfolio-item-meta">
														<h5
															style={{
																color: '#EBEBF2',
															}}
														>
															{item.name}
														</h5>

														<p style={{}}>
															{item.description}
														</p>
													</div>
												</div>
											</a>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
		)
	}
}
