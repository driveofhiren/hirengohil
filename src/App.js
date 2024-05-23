import React, { Component } from 'react'
import Header from './components/Header'
import Resume from './components/Resume'
import Music from './components/Music'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import resumeData from './resumeData'
import Graphics from './components/Graphics'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header resumeData={resumeData} />
				<Resume resumeData={resumeData} />
				<Portfolio resumeData={resumeData} />
				<Graphics resumeData={resumeData} />
				<Music resumeData={resumeData} />
				<Footer resumeData={resumeData} />
			</div>
		)
	}
}

export default App
