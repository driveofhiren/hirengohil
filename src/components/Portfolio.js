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
							<div key={index}>
								<a
									href={item.imgurl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div
										className="item-wrap"
										style={{
											backgroundColor: '#3E1F47',
											borderRadius: '3px',
										}}
									>
										<div className="portfolio-item-meta">
											<h4
												style={{
													color: 'white',
													fontWeight: 'bold',
												}}
											>
												{item.name}
											</h4>
											<div
												//make font color white
												style={{
													color: 'white',
												}}
											>
												{item.description}
											</div>
										</div>
									</div>
								</a>
							</div>
						))}
				</div>
			</section>
		)
	}
}
