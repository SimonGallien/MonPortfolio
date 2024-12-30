import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProjetDetail from "./pages/ProjetDetail";
import ScrollToTop from "./_components/ScrollToTop";


const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projets/:id" element={<ProjetDetail />} />
        </Routes>
      </Router>
  
    </>
  );
};

export default App;