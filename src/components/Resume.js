import React, { Component } from 'react';

export default class Resume extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <div className="row skill">
            <div className="col-md-3">
              <h1>
                <span>
                  Skills
                </span>
              </h1>
            </div>

            <div className="skills-container">
              {resumeData.skills.map((item) => (
                <div
                  key={item.skillname}
                  className="col-lg-3">
                  <div className="skill-item fright">
                      {item.skillname}
                    {/* <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${item.level}%`,
                          backgroundColor: this.getBackgroundColor(item.level),
                        }}
                      >
                        .
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
