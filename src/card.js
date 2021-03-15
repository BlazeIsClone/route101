import React, { Component } from "react";
import trackImg from "./img001.jpg";

class card extends Component {
    render() {
        const authorName = "Pink Floyd";
        const trackName = "Learning To Fly";
        return (
            <div class="card">
                <img src={trackImg} />
                <h1 class="track-name">{trackName}</h1>
                <p class="author">{authorName}</p>
            </div>
        );
    }
}

export default card;
