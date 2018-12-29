import React, { Component } from "react";
import Video from "./video.mp4";

class VideoModal extends Component {
  render() {
    return (
      <div className="modal fade" id="myId2">
        <div className="modal-dialog">
          <div className="modal-content modal-style">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="video-player-content">
                <video
                  src={Video}
                  className="video-player"
                  width="465px"
                  height="350px"
                  autoPlay
                />
                <div className="vidoe-cortrols">
                  <div className="control-left float-left">
                    <i className="material-icons">pause</i>
                    {/* <i class="material-icons">volume_off</i>
                                        <i class="material-icons">volume_down</i> */}
                    <i className="material-icons">volume_up</i>
                    <input
                      className="mdl-slider mdl-js-slider"
                      type="range"
                      min="0"
                      max="100"
                      tabIndex="0"
                    />
                    {/* <input type="range" /> */}
                    {/* <span><span className="live-icon"></span>Live</span> */}
                  </div>
                  <div className="control-right float-right">
                    <i className="material-icons">settings</i>
                    <i className="material-icons">fullscreen</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoModal;
