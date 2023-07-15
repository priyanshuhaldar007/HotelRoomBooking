import "../assets/Styles/Home.css";
import ContactUsPng from "../assets/Imgs/ContactUs.png";
import PropTypes from 'prop-types'

export default function ContactUs({ refProps }) {
    return (
        <div className="Contact SectionParent" ref={refProps}>
            <img src={ContactUsPng} alt="" />
            <div className="formParent">
                <div className="formHeading">Leave us your information</div>
                <div className="formDesc">and we will get back to you</div>
                <form>
                    <div className="formSection">
                        <input type="text" placeholder="Full Name" required />
                        <input type="text" placeholder="Email" required />
                    </div>
                    <div className="formSection">
                        <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="formSection">
                        <textarea
                            placeholder="Message"
                            required
                            rows={5}
                        ></textarea>
                    </div>
                    <div className="formSection">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

ContactUs.propTypes = {
    refProps:PropTypes.object,
}