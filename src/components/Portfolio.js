import React, { Component } from 'react'

export default class Portfolio extends Component {
	render() {
		let resumeData = this.props.resumeData

		return (
			<section id="projects">
				<h1>
					<span>Projects</span>
				</h1>
				<div className="portfolio-item">
					{resumeData.portfolio &&
						resumeData.portfolio.map((item, index) => (
							<div className="" key={index}>
								<div
									className="item-wrap"
									style={{
										backgroundColor: '#3E1F47',
										borderRadius: '3px',
									}}
								>
									<a
										href={item.imgurl}
										target="_blank"
										rel="noopener noreferrer"
									>
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
			</section>
		)
	}
}
