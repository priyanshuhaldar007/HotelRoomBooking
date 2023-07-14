import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test } from "./Pages/Test";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
