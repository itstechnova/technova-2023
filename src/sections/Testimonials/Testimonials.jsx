import React from "react";
import { useState, useEffect } from 'react';
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

import testimonials from "../../resources/strings/testimonials";
import "./Testimonials.scss";
import prepareTile from "../../resources/images/graphics/prepare-tile.svg";
import hackTile from "../../resources/images/graphics/hack-tile.svg";
import connectTile from "../../resources/images/graphics/connect-tile.svg";


const Testimonials = () => {
    const [state, setState] = useState({
        screenWidth: window.innerWidth,
    })

    const updateWindowDimensions = () => {
        setState({ ...state, screenWidth: window.innerWidth });
    }

    useEffect(() => {
        function handleResize() {
            updateWindowDimensions();
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    return (<SectionWrapper id="story">
        <div className="testimonials-container">
            <div className="testimonial-content">
                <div className="testimonials-text">
                    <h1>{testimonials.title}</h1>
                    <p>{testimonials.description}</p>
                </div>
            </div>
            <div className="testimonials-events">
                <div style={{ gridArea: "prep-title" }}>
                    <h3>{testimonials.quote1Name}</h3> 
                </div>
                <img className="prep-image" style={{ gridArea: "prep-image" }} src={prepareTile} alt="prepare-tile" />
                <div style={{ gridArea: "prep-caption"}} className="about-caption">
                    <p>{testimonials.quote1Text}</p>
                </div>
                <div style={{ gridArea: "hack-title" }}>
                    <h3>{testimonials.quote2Name}</h3>
                </div>
                <img className="hack-image" style={{ gridArea: "hack-image" }} src={hackTile} alt="hack-tile" />
                <div style={{gridArea: "hack-caption"}} className="about-caption">
                    <p>{testimonials.quote2Text}</p>
                </div>
                <div style={{gridArea: "connect-title"}}>
                    <h3>{testimonials.quote3Name}</h3>      
                </div>
                <img className="connect-image" style={{gridArea: "connect-image"}} src={connectTile} alt="connect-tile" />
                <div style={{gridArea: "connect-caption"}} className="about-caption">
                    <p>{testimonials.quote3Text}</p>
                </div>
            </div >
        </div>
    </SectionWrapper>)
}

export default Testimonials;