import React, { Component } from "react";
import Card from "./card.js";

class body extends Component {
    render() {
        const sliderScroll = () => {
            const slider = document.querySelector(".main-containter");
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener("mousedown", (e) => {
                isDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener("mouseleave", () => {
                isDown = false;
            });
            slider.addEventListener("mouseup", () => {
                isDown = false;
            });
            slider.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1; //scroll-fast
                slider.scrollLeft = scrollLeft - walk;
                console.log(walk);
            });
        };
        return (
            <div className="main-containter" onLoad={sliderScroll}>
                <div className="container-head">
                <h1 className="title-text">Featured</h1>
                <p className="body-text">Your mixtape for the weekend</p>
                </div>
                <div className="container-body">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                </div>
            </div>
        );
    }
}

export default body;
