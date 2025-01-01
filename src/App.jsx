import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/404";
import ProjetDetail from "./pages/ProjetDetail";
import ScrollToTop from "./_components/ScrollToTop";
import { Navigate } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


const App = () => {
  return (
      <Router>
        <ScrollToTop />
        <Header />
        <main className="flex flex-col max-w-screen-xl w-full h-full flex-1 m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projets/:id" element={<ProjetDetail />} />
            <Route path="/propos" element={<Apropos />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
};

export default App;