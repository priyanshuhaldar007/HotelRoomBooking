import Footer from '../Components/Footer'
import Header2 from '../Components/Header2'
import HotelList from '../Components/HotelList'
import Navbar from '../Components/Navbar'
import { useState } from "react";

export default function HotelSearch() {
    const [cityName, setCityName] = useState("");
    function handleCityInput(name){
        setCityName(name)
    }
  return (
    <div>
        <Navbar/>
        <Header2 cityName={cityName} handleCityInput={handleCityInput}/>
        <HotelList cityName={cityName}/>
        <Footer/>
    </div>
  )
}
