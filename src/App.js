import React, { Component } from "react";
import "./App.css";
import Headbanner from "./Headbanner";
import Navbar from "./Navbar";
import Body from "./Body";

class App extends Component {
    render() {
        return (
            <div>
                <Headbanner />
                <Navbar />
                <Body />
            </div>
        );
    }
}

export default App;
