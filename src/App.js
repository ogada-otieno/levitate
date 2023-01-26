import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
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
