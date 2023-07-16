import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./Pages/Test";
import Navbar from "./Components/Navbar";
import HotelSearch from "./Pages/HotelSearch";
import HotelCardCarousel from "./Components/HotelCardCarousel";
import TestApp from "./Pages/TestApp";

function App() {
    return (
        <BrowserRouter>
            {/* <Navbar />  */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/hotels" element={<HotelSearch />} />
                <Route path="/swiper" element={<HotelCardCarousel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
