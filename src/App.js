import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import CreateProjects from "./components/CreateProjects";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/create" element={<CreateProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
