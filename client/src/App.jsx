import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"; 
import { Login } from "./pages/Login"; 
import { Allcomplains } from "./pages/Allcomplains";
import { Contact } from "./pages/Contact";  // Import Contact component
import { ComplainPage } from "./pages/ComplainPage";  // Import Admission component
import { Gallery } from "./pages/Gallery";  // Import Gallery component
import { Navbar } from "./Components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ComplainPage" element={<ComplainPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Allcomplains" element={<Allcomplains/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
