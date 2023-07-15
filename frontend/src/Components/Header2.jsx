import "../assets/Styles/HotelsSearch.css";
import Header1 from "../assets/Imgs/Header1.png";
import PropTypes from 'prop-types'

export default function Header2({ handleCityInput, cityName }) {
    return (
        <div id="Home" className="Header2">
            <div className="imgContainer">
                <img src={Header1} alt="" />
            </div>
            <div className="header2Content fc-white">
                <div className="searchCityParent">
                    <input
                        type="text"
                        placeholder="Where are you heading this weekend?"
                        value={cityName}
                        onChange={(e) => handleCityInput(e.target.value)}
                    />
                    <button>Check Hotels</button>
                </div>
            </div>
        </div>
    );
}

Header2.propTypes = {
    handleCityInput:PropTypes.func,
    cityName:PropTypes.string,
}