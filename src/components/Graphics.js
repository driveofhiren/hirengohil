import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useInView } from 'react-intersection-observer'

// LazyLoadIframe Component
const LazyLoadIframe = ({ src, title }) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // load only once
		threshold: 0.25, // load when 25% of the iframe is in view
	})

	return (
		<div ref={ref} style={{ minHeight: '480px' }}>
			{inView ? (
				<iframe
					src={src}
					width="100%"
					height="480"
					allow="autoplay"
					title={title}
					style={{ border: 'none' }}
				></iframe>
			) : (
				<div
					style={{
						height: '480px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<span>Loading...</span>
				</div>
			)}
		</div>
	)
}

export default class Graphics extends Component {
	render() {
		const { resumeData } = this.props

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
												<LazyLoadIframe
													src={item.embedUrl}
													title={item.name}
												/>
												<div className="overlay">
													<div className="graphics-item-meta center-block">
														<h5>{item.name}</h5>
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
