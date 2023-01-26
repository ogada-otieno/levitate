import "./App.css";
import "./index.css";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import CreateProjects from "./components/CreateProjects";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/create" element={<CreateProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
