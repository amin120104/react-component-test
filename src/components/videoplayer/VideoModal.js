import React, { Component } from "react";
import Video from "./video.mp4";
import InputRange from "./InputRange";

class VideoModal extends Component {
   render() {
      return (
         <div className="modal fade" id="myId2">
            <div className="modal-dialog">
               <div className="modal-content modal-style">
                  <div className="modal-header">
                     <i className="material-icons">favorite_border</i>
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
                           width="100%"
                           height="100%"
                           autoPlay
                        />
                        <div className="vidoe-cortrols">
                           <div className="video-progress-bar" />

                           <div className="control-left float-left">
                              <div className="single-control">
                                 <i className="material-icons">pause</i>
                              </div>

                              <div className="single-control">
                                 <i className="material-icons">volume_up</i>
                              </div>

                              <div className="single-control">
                                 <InputRange />
                              </div>

                              <div className="single-control">
                                 <div className="live-video">
                                    <span>Live</span>
                                 </div>
                              </div>
                           </div>

                           <div className="control-right float-right">
                              <div className="single-control">
                                 <i className="material-icons">picture_in_picture_alt</i>
                              </div>

                              <div className="single-control">
                                 <i className="material-icons">fullscreen</i>
                              </div>
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

{
   /* <i class="material-icons">play_arrow</i>
      <i class="material-icons">volume_off</i>
      <i class="material-icons">volume_down</i> */
}
