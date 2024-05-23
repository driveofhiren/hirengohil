import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Graphics extends Component {
	render() {
		const resumeData = this.props.resumeData

		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		}

		return (
			<section id="graphics">
				<div className="row">
					<div>
						<h1>
							<span>Graphics</span>
						</h1>
						<div
							id="graphics-wrapper"
							className="bgrid-quarters s-bgrid-thirds cf"
						>
							{resumeData.graphics && (
								<Slider {...settings}>
									{resumeData.graphics.map((item) => (
										<div
											className="columns graphics-item"
											key={item.id}
											style={{ padding: '10px' }}
										>
											<div className="item-wrap">
												<iframe
													src={item.embedUrl}
													width="100%"
													height="480"
													allow="autoplay"
													title={item.name}
													style={{ border: 'none' }}
												></iframe>
												<div className="overlay">
													<div className="graphics-item-meta center-block">
														<h6>{item.name}</h6>
													</div>
												</div>
											</div>
										</div>
									))}
								</Slider>
							)}
						</div>
					</div>
				</div>
			</section>
		)
	}
}
