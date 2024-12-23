import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/404";
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
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  
    </>
  );
};

export default App;