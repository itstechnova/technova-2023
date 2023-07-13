import "./Landing.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import landing from "../../resources/strings/landing";
import landingBanner from "../../resources/images/logo/technova_banner.png";
import LandingButton from "./LandingButton";
import tnLogo from "../../resources/images/logo/logo.png";
// import asterisk1 from "../../resources/images/graphics/asterisk-1.svg";
// import asterisk2 from "../../resources/images/graphics/asterisk-2.svg";
import asterisk3 from "../../resources/images/graphics/asterisk-3.svg";
// import asterisk4 from "../../resources/images/graphics/asterisk-4.svg";
// import asterisk5 from "../../resources/images/graphics/asterisk-5.svg";
// import softStar1 from "../../resources/images/graphics/soft-star-1.svg";
// import softStar2 from "../../resources/images/graphics/soft-star-2.svg";
import msGoose from "../../resources/images/graphics/ms-goose.svg";
import msGooseFlowers from "../../resources/images/graphics/ms-goose-flowers.png";

const Landing = () => {
  return (
    <SectionWrapper id="landing" paddingTop="0">
      <div className="landing-container">
        <div className="landing-main-container">
          {/* <img id="ms-goose" src={msGoose} alt="ms goose" /> */}
          <img id="ms-goose" src={msGooseFlowers} alt="ms goose" />
          <div className="landing-text">
            <h4 className="landing-logo-text">
              <img src={tnLogo} className="landing-logo" alt="Tech Nova Logo" />
              <img src={landingBanner} className="landing-banner" alt="TechNova" />
              {/* <span className="landing-title">{landing.title1}</span> */}
            </h4>
            <h4 className="landing-description">{landing.description}</h4>
            <h4 className="landing-dates">{landing.dates}</h4>
          </div>
          <div className="landing-button-container">
            <LandingButton link={landing.appLink} label={landing.applyCTA} />
            <LandingButton
              link={landing.mentorAppLink}
              label={landing.mentorApplyCTA}
            />
          </div>
        </div>
        <div className="landing-graphic-container">
          <img
            id="ms-goose-flowers"
            src={msGooseFlowers}
            alt="ms goose and flowers"
          />
          {/* <img id="ms-goose" src={msGoose} alt="ms goose" />
                    <img id="asterisk-1" src={asterisk1} alt="asterisk 1" />
                    <img src={asterisk2} alt="asterisk 2" />
                    <img src={asterisk3} alt="asterisk 3" />
                    <img src={asterisk4} alt="asterisk 4" />
                    <img src={asterisk5} alt="asterisk 5" />
                    <img src={softStar1} alt="asterisk 1" />
                    <img src={softStar2} alt="asterisk 2" /> */}
        </div>
        <img
          id="teal-asterisk"
          src={asterisk3}
          alt="transparent teal asterisk"
        />
      </div>
    </SectionWrapper>
  );
};

export default Landing;
