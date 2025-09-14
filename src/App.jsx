import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout";
import Services from "./pages/Services";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact_us" element={<ContactUs />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
