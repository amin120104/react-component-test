import React, { Component } from 'react';
import VideoModal from './VideoModal';


class VideoPlayer extends Component {
    render() { 
        return ( 
            <div className="video-modal-wrapper">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myId2">
                     Launch demo modal
                </button>
                <VideoModal />
            </div>
         );
    }
}
 
export default VideoPlayer;