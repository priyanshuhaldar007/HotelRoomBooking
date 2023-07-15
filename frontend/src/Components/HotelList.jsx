import "../assets/Styles/HotelsSearch.css";
import airplaneTower from "../assets/Imgs/airportTower.gif";
import PropTypes from "prop-types";
import { BsFilter } from "react-icons/bs";
import { MdFilterListOff } from "react-icons/md";
import HotelCard from "./HotelCard";

export default function HotelList({ cityName }) {
    return (
        <div className="HotelListParent">
            {cityName && <img src={airplaneTower} alt="" />}
            {!cityName && (
                <div className="ListContainer">
                    <div className="controllers">
                        <div className="fiterBtn">
                            <span>
                                <BsFilter />
                            </span>
                            <span>Filter</span>
                        </div>
                        <div className="ClearBtn">
                            <span>
                                <MdFilterListOff />
                            </span>
                            <span>Clear</span>
                        </div>
                    </div>
                    <HotelCard/>
                </div>
            )}
        </div>
    );
}
HotelList.propTypes = {
    cityName: PropTypes.string,
};
