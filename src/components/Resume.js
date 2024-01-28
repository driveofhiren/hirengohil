import React, { Component } from 'react';

export default class Resume extends Component {
  getBackgroundColor = (level) => {
    let red, green, blue;
    if (level >= 75) {  
      red = 102;
      green = 51
      blue = 253-(level*1.1);
    } else if (level >= 50) {
      red = 67;
      green = Math.round(192 + (level - 50) * 1.2);
      blue = 246;
    } else if (level >= 30) {
      red = 172;
      green = Math.round(215 - (level - 25) * 2);
      blue = 130;
    } else {
      red = 204;
      green = Math.round(50 * (level / 25));
      blue = 50;
    }

    return `rgb(${red}, ${green}, ${blue})`;
  };

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
