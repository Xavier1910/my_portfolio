import React from "react";
import "./Background.css";

const Background = () => {
    return (
        <div>
        <div class="full-progress">
            <div class="content">
            <div class="text">
                <span> <img src="images/me.png " alt="HeroImage" /></span>
            </div>
            <div class="progresses">
                <div class="main-prog">
                    <div class="sphere"></div>
                    <div class="sphere"></div>
                    <div class="sphere"></div>
                    <div class="sphere"></div>
                    <div class="sphere"></div>
                </div>
                <div class="second-circle"></div>
                <div class="third-circle"></div>
                <div class="base-circle">
                    <div class="sphere2"></div>
                    <div class="sphere2"></div>
                    <div class="sphere2"></div>
                    <div class="sphere2"></div>
                    <div class="sphere2"></div>
                    <div class="sphere2"></div>
                    <div class="sphere2"></div>
                    <div class="sphere2"></div>
                </div>
                <div class="last-progress"></div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Background;
