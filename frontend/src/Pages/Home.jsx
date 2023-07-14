import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import Services from "../Components/Services";
import HomeInput from "../Components/HomeInput";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import { useRef } from "react";
// import Testimonials from '../Components/Testimonials';

export default function Home() {
    const homeRef = useRef();
    const aboutRef = useRef();
    const servicesRef = useRef();
    const contactRef = useRef();
    const scrollCallback = (name) => {
        if (name === "Home") {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (name === "About") {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (name === "Services") {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (name === "Contact") {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <Navbar scrollCallback={scrollCallback}/>
            <Header refProps={homeRef}/>
            <About refProps={aboutRef}/>
            <Services refProps={servicesRef}/>
            {/* <Testimonials/> */}
            <HomeInput />
            <ContactUs refProps={contactRef}/>
            <Footer />
        </>
    );
}
