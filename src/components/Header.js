import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = ({ resumeData }) => (
  <>
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#1" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#music">
              Music
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I am {resumeData.name}.</h1>
          <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
            {resumeData.roleDescription}
          </h3>
          <div className="text-center mt-4">
            <Button variant="outline-success">
              <a href={`mailto:${resumeData.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                Email
              </a>
            </Button>
            <Button variant="outline-success">
              <a href={`tel:${resumeData.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                Call
              </a>
            </Button>
            <button onClick={() => (window.location.href = resumeData.cv)} className="btn btn-outline-info">
              Download CV
            </button>
          </div>
          <hr />
          <ul className="social">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <i className={item.className}></i>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  </>
);

export default Header;
