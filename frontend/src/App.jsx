import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelSearch from "./Pages/HotelSearch";
import HotelCardCarousel from "./Components/HotelCardCarousel";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
// import SignUp from "./Components/SignUp";
// import SignIn from "./Components/SignIn";

function App() {
    return (
        <BrowserRouter>
            {/* <Navbar />  */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<HotelSearch />} />
                <Route path="/swiper" element={<HotelCardCarousel />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
