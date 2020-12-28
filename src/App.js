import React, { Component } from "react";
import "./App.css";
import Headbanner from "./Headbanner";
import Navbar from "./Navbar";
class App extends Component {
    render() {
        return (
            <div>
                <Headbanner />
                <Navbar />
            </div>
        );
    }
}

export default App;
