import '../assets/Styles/Home.css';
import HomeAbout1 from "../assets/Imgs/HomeAbout1.png";
import HomeAbout2 from "../assets/Imgs/HomeAbout2.png";
import HomeAbout3 from "../assets/Imgs/HomeAbout3.png";
import HomeAbout4 from "../assets/Imgs/HomeAbout4.png";

export default function About({refProps}) {
    return (
        <div id='About' className="About SectionParent" ref={refProps}>
            <div className="aboutImgContainer">
                <img src={HomeAbout1} alt="" />
                <img src={HomeAbout3} alt="" />
                <img src={HomeAbout2} alt="" />
                <img src={HomeAbout4} alt="" />
            </div>
            <div className="aboutContent">
                <div className="heading underline BodyHeading">About Ph Travels</div>
                <div className="paragraph">
                    Welcome to Ph Travels, your gateway to unforgettable hotel experiences across India. Discover, compare, and book with ease as we bring you a handpicked selection of hotels, unbeatable deals, and exceptional service. Let us be your travel companion on the road to adventure.
                </div>
                <div className="startText">Start your journey today!</div>
            </div>
        </div>
    );
}
