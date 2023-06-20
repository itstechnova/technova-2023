import "./Landing.scss";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import landing from "../../resources/strings/landing";
// import Button from "../../components/Button/Button";
import LandingButton from "./LandingButton";

const Landing = () => {
    return (
        <SectionWrapper id="landing" paddingTop="0">
            <div className="landing-container">
                <div className="landing-text">
                    <h4 className="landing-logo-text">
                        <span className="landing-title">{landing.title1}</span>
                    </h4>
                    <h4 className="landing-logo-text-mobile" style={{alignItems: "flex-end", justifyContent: "center", gap: "5px"}} >
                        <img 
                            className="mlh-mobile"
                            style={{height: "18px", marginRight: "2px", marginBottom: "4px"}} 
                            alt="mlh logo"
                        />
                        • <span className="landing-title" style={{marginBottom: "1px"}}>{landing.title1}</span>
                        {landing.title2}
                    </h4>
                    <h4 className="landing-description-mobile">
                        {landing.description}
                    </h4>
                    <h4 className="landing-dates">{landing.dates}</h4>
                    <h4 className="landing-description">
                        {landing.description}
                    </h4>
                </div>
                <div className="landing-button-container">
                    <LandingButton link={landing.appLink} label={landing.applyCTA} />
                    <LandingButton link={landing.mentorAppLink} label={landing.mentorApplyCTA}/>
                </div>
                <div className="landing-button-container-mobile">
                    <LandingButton link={landing.appLink} label={landing.applyCTAMobile} />
                    <LandingButton link={landing.mentorAppLink} label={landing.mentorApplyCTAMobile}/>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Landing;
