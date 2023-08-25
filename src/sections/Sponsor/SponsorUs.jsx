import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Button from "../../components/Button/Button";
import { Carousel, CarouselTypes } from "../../components/Carousel/Carousel";

import flowers from "../../resources/images/graphics/sponsor-us-flowers.svg";
import amazon from "../../resources/images/sponsors/amazon.png";
import wealthsimple from "../../resources/images/sponsors/wealthsimple.png";
import google from "../../resources/images/sponsors/googlecloud.png";
import opentext from "../../resources/images/sponsors/opentext.jpg";
import cloudflare from "../../resources/images/sponsors/cloudflare.png";

import OurSponsors from "./OurSponsors";
import "./SponsorUs.scss";
import LandingButton from "../Landing/LandingButton";

var showcase = [
  {
    // no quote, no link
    quote:
      "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
    link: "https://www.amazon.jobs/student-programs",
    image: wealthsimple,
    colour: "pink",
  },
  {
    // no quote, no link
    quote:
      "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
    link: "https://www.amazon.jobs/student-programs",
    image: google,
    colour: "darkPink",
  },
  {
    // no image
    quote:
      "Zynga is a global leader in interactive entertainment with a mission to connect the world through games, come work with us!",
    link: "https://www.zynga.com/jobs/job-openings/",
    image: google,
    colour: "darkPink",
  },
  {
    // not a sponsor?
    quote:
      "For people who like to invent, there's no better place to explore opportunities than at Amazon. We're currently hiring for Software Developers (Interns and Full Time - 2022) in Canada. Join our team and help us build the future!",
    link: "https://www.amazon.jobs/student-programs",
    image: amazon,
    colour: "turquoise",
  },
  {
    quote:
      "At OpenText, we recognize the low demographic of women in STEM. As part of our ongoing efforts to encourage women to participate in STEM and feel recognized for their invaluable insights, we invite you to join our Women in Tech program.",
    link: "https://careers.opentext.com/?locale=en_US",
    image: opentext,
    colour: "purple",
  },
  {
    quote:
      "The future of apps is AI - learn how you can build better assistive and generative AI apps on the Cloudflare global network.",
    link: "https://ai.cloudflare.com/",
    image: cloudflare,
    colour: "purple",
  },
];

export const SponsorUs = () => {
  const [slidesToShow, setSlidesToShow] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 700) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(1.5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 520,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <SectionWrapper id="sponsor">
      <div className="sponsor-us-container">
        <h1 className="sponsor-us-title">Sponsor Us</h1>
        <hr></hr>
        <div className="sponsor-us-content">
          <div className="sponsor-us-text">
            <div className="sponsor-us-description">
              <p>
                Support more than 300+ young women in the next step of their
                journey by sponsoring the next generation of leaders. <br />
                Interested in sponsoring? Email us at{" "}
                <a
                  href="mailto:sponsors@itstechnova.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  sponsors@itstechnova.org
                </a>
              </p>
            </div>
            <div className="sponsor-us-button-container">
              <LandingButton
                link="https://www.itstechnova.org/pdfs/sponsorship_package.pdf"
                label="Sponsorship Package"
                target="_blank"
                rel="noreferrer noopener"
              />
              <LandingButton
                link="mailto:sponsors@itstechnova.org"
                label="Join us as a sponsor"
                target="_blank"
                rel="noreferrer noopener"
              />
            </div>
          </div>
          <div className="sponsor-us-images">
            <img className="flowers" src={flowers} alt="plant and bee" />
          </div>
        </div>
        <div className="sponsor-us-carousel-wrapper">
          <div className="sponsor-us-carousel">
            <Slider ref={sliderRef} {...settings}>
              {showcase.map((content, index) => (
                <Carousel key={index} content={content} slideNext={next} />
              ))}
            </Slider>
          </div>
        </div>
        <OurSponsors />
      </div>
    </SectionWrapper>
  );
};

export default SponsorUs;
