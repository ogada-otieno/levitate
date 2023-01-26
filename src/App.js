import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>

      </div>
     
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
