import React from 'react'
import Button from 'react-bootstrap/Button'

const Header = ({ resumeData }) => (
	<>
		<header id="home">
			<nav id="nav-wrap">
				<a
					className="mobile-btn"
					href="#nav-wrap"
					title="Show navigation"
				>
					Show navigation
				</a>
				<a className="mobile-btn" href="#1" title="Hide navigation">
					Hide navigation
				</a>
				<ul id="nav" className="nav">
					<li className="current">
						<a className="smoothscroll " href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#skills">
							Skills
						</a>
					</li>
					<li>
						<a className="smoothscroll w" href="#projects">
							Projects
						</a>
					</li>
					<li>
						<a className="smoothscroll g" href="#graphics">
							Graphics
						</a>
					</li>
					<li>
						<a className="smoothscroll m" href="#productions">
							Productions
						</a>
					</li>
				</ul>
			</nav>

			<div className="row banner">
				<div className="banner-text">
					<h1 className="responsive-headline">
						I am {resumeData.name}.
					</h1>
					<h3>{resumeData.roleDescription}</h3>
					<div className="text-center mt-4">
						<Button
							style={{
								background: '#000080',
								color: '#ffffff',
								marginRight: '10px',
							}}
						>
							<a
								href={`mailto:${resumeData.email}`}
								style={{
									textDecoration: 'none',
									color: 'inherit',
								}}
							>
								Email
							</a>
						</Button>
						<Button
							style={{
								background: '#0000b3',
								color: '#0d0325',
								marginRight: '10px',
							}}
						>
							<a
								href={`tel:${resumeData.phone}`}
								style={{
									textDecoration: 'none',
									color: 'inherit',
								}}
							>
								Call
							</a>
						</Button>
						<Button
							style={{
								backgroundColor: '#0000e6',
								color: '#0d0325',
								marginRight: '10px',
							}}
							onClick={() =>
								(window.location.href = resumeData.cv)
							}
							className="btn btn-outline-info"
						>
							My Resume
						</Button>
					</div>
					<hr />
					<ul className="social">
						{resumeData.socialLinks &&
							resumeData.socialLinks.map((item) => (
								<li key={item.name}>
									<a href={item.url}>
										<i className={item.className}></i>
									</a>
								</li>
							))}
					</ul>
				</div>
			</div>
		</header>
	</>
)

export default Header
