import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutAze from "./Pages/AboutAze";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ToursPage from "./Pages/ToursPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/azerbaijan" element={AboutAze} />
          <Route path="/tours" element={ToursPage} />
          <Route path="/about-us" element={AboutUs} />
          <Route path="/contacts" element={ContactUs} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
