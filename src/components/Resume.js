import React, { Component } from 'react';

export default class Resume extends Component {
  getBackgroundColor = (level) => {
    const red = Math.round((100 - level) * 2.55);
    const green = Math.round(level * 2.55);
    return `rgb(${red}, ${green}, 0)`;
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <div className="row skill">
            <div className="col-md-3">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="skills-container">
                {resumeData.skills.map((item) => (
                  <div
                    key={item.skillname}
                    className="col-lg-3" // Always 3 columns
                  >
                    <div className="skill-item fright">
                      <em>{item.skillname}</em>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${item.level}%`,
                            backgroundColor: this.getBackgroundColor(item.level),
                          }}
                        >
                          .
                        </div>
                      </div>
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
