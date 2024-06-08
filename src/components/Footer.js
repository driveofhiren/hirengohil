import React from 'react'

const Footer = ({ resumeData }) => (
	<footer style={{ backgroundColor: '#1B3A4B', padding: '20px 0px 5px 0px' }}>
		<div style={{ textAlign: 'center', color: '#ffffff' }}>
			<p>&copy; 2024 {resumeData.name}. All rights reserved.</p>
			<div>
				<ul
					className="social"
					style={{ listStyle: 'none', padding: 0 }}
				>
					{resumeData.socialLinks &&
						resumeData.socialLinks.map((item) => (
							<li
								key={item.name}
								style={{ display: 'inline', margin: '0 10px' }}
							>
								<a href={item.url}>
									<i
										className={item.className}
										style={{
											fontSize: '24px',
											color: '#ffffff',
										}}
									/>
								</a>
							</li>
						))}
				</ul>
			</div>
		</div>
	</footer>
)

export default Footer
