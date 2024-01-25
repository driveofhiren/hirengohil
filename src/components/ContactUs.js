import React, { Component } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaSoundcloud, FaSpotify, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="contact">
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget">
              <div className="d-flex align-items-center">
                <h4>
                  <a href={`mailto:${resumeData.email}`}>
                    <FaEnvelope size={40} />
                  </a>
                </h4>
                <h4>
                  <a href={`tel:${resumeData.phone}`}>
                    <FaPhone size={40} />
                  </a>
                </h4>
                <h4>
                  <a href={`https://www.instagram.com/${resumeData.instagramId}`} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} />
                  </a>
                </h4>
                <h4>
                  <a href={`https://soundcloud.com/${resumeData.soundcloudId}`} target="_blank" rel="noopener noreferrer">
                    <FaSoundcloud size={40} />
                  </a>
                </h4>
                <h4>
                  <a href={`https://open.spotify.com/artist/${resumeData.spotifyId}`} target="_blank" rel="noopener noreferrer">
                    <FaSpotify size={40} />
                  </a>
                </h4>
                <h4>
                  <a href={`https://www.youtube.com/${resumeData.youtubeId}`} target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={40} />
                  </a>
                </h4>
                <h4>
                  <a href={`https://www.linkedin.com/in/${resumeData.linkedinId}`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} />
                  </a>
                </h4>
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
