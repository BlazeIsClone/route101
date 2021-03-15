import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div className="Navbar">
                    <Link
                        to="/tech"
                        exact
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Tech
                    </Link>
                    <Link
                        to="/reviews"
                        exact
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Reviews
                    </Link>
                    <Link
                        to="/science"
                        exact
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Science
                    </Link>
                    <Link
                        to="/entertainment"
                        exact
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Entertainment
                    </Link>
                    <Link
                        to="/podcasts"
                        exact
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Podcasts
                    </Link>
                </div>
            </Router>
        );
    }
}
export default Navbar;
