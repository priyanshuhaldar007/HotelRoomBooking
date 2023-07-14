import '../assets/Styles/Home.css'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum auctor semper metus in lacinia.
                        </p>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: info@example.com</p>
                        <p>Address: 123 Main Street, City, State</p>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul className="social-media">
                            <li>
                                <a href="#">
                                    <BsFacebook/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <BsTwitter/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <BsInstagram/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <BsLinkedin/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
