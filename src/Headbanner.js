import React, { Component } from "react";

class Headbanner extends Component {
    render() {
        const img =
            "https://cdn.vox-cdn.com/uploads/chorus_asset/file/7651271/Masthead_AM_11.0.png";
        return (
            <div className="Head-banner">
                <img src={img}></img>
                <h1>Route 101</h1>
            </div>
        );
    }
}

export default Headbanner;
