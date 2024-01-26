import React, { Component } from 'react';
import { Spotify } from 'react-spotify-embed';
import ReactPlayer from "react-player";

export default class Music extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="music">
        <div className="row">
          <div>
            <h1><span>Music</span></h1>
            <div id="music-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.music && resumeData.music.map((item) => {
                return (
                  <div className="columns music-item musicwidth" key={item.id} style={{ width: '45%' }}>

                    <div className="item-wrap ">
                      <a href={`#modal-${item.id}`}>
                        <Spotify wide link={item.imgurl}/>
                        <div className="overlay ">
                          <div className="music-item-meta center-block">
                            <h6>{item.name}</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1><span>Listen whole discography</span></h1>
            <div class="player-container">
            <ReactPlayer
        url="https://soundcloud.com/spirittoy/sets/spirit-toy-hir-n?si=0224b45f02db453b808e2c4c83491e9c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
      /></div>
       <h1><span>Videos videos</span></h1>
      <div class="player-container">
      <iframe width="800px" height="450px" src="https://www.youtube.com/embed/videoseries?si=jh1EqnRja0KYdLbh&list=PL1t6M0BZsk-SQUiaJHuA74pafr0Szq2NZ" title="Spirit Toy Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
          </div>
        </div>
      </section>
    );
  }
}
