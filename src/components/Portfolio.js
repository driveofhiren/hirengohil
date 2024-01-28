import React, { Component } from 'react';

export default class Porfolio extends Component {
  getRandomColor() {
    const getDarkComponent = () => Math.floor(Math.random() * 150);
    const color = `rgb(${getDarkComponent()}, ${getDarkComponent()}, ${getDarkComponent()})`;
    const brightness = this.calculateBrightness(color);
    if (brightness < 10) {
      return this.getRandomColor();
    }  
    return color;
  }
  calculateBrightness(color) {
    const rgb = color.match(/\d+/g).map(Number);
    return 0.209 * rgb[0] + 0.507 * rgb[1] + 0.124 * rgb[2];
  }
  

  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio" style={{backgroundColor: 'Black'}}>
        <div className="row">
          <div className="rcon">
            <h1><span>Projects</span> </h1>
            <div id="portfolio-wrapper" className="bgrid-quarters">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => (
                  <div className="columns portfolio-item " key={index}>
                    <div className="item-wrap" style={{ backgroundColor: this.getRandomColor()  , borderRadius: '15px'} }>
                      <a href={item.imgurl}><div style={{ width: '220px', height: '100%', background: 'url(' + item.imgurl + ')', backgroundSize: 'cover' }}></div>
                        <div>
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
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
