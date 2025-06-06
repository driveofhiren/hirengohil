import React, { Component } from 'react'

import { Spotify } from 'react-spotify-embed'

export default class Music extends Component {
	render() {
		let resumeData = this.props.resumeData
		return (
			<section id="productions">
				<div>
					<h1>
						<span>Music</span>
					</h1>
					<div className="portfolio-item">
						{resumeData.music &&
							resumeData.music.map((item) => {
								return (
									<div className="" key={item.id}>
										<Spotify wide link={item.imgurl} />
										{/* <div className="overlay ">
                                                        <div className="music-item-meta center-block">
                                                            <h6>{item.name}</h6>
                                                        </div>
                                                    </div> */}
									</div>
								)
							})}
					</div>

					<h1>
						<span>Videos</span>
					</h1>
					<div className="player-container">
						<iframe
							width="70%"
							height="504px"
							src="https://www.youtube.com/embed/videoseries?si=jh1EqnRja0KYdLbh&list=PL1t6M0BZsk-SQUiaJHuA74pafr0Szq2NZ"
							title="Spirit Toy Music"
							frameBorder=""
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							style={{
								borderRadius: '5px',
							}}
						></iframe>
					</div>
					{/* <h1>
						<span>Discography</span>
					</h1>
					<div className="player-container">
						<iframe
							width="70%"
							height="450px"
							scrolling="no"
							frameBorder="no"
							allow="autoplay"
							src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1653131743&color=%23040460&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
						></iframe>
						<div>
							<a
								href="https://soundcloud.com/spirittoy"
								target="_blank"
							></a>
							<a
								href="https://soundcloud.com/spirittoy/sets/spirit-toy-hir-n"
								target="_blank"
							></a>
						</div>
					</div> */}
				</div>
			</section>
		)
	}
}
