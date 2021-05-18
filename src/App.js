import "./App.css";
import "./components/layout/NavBar";
import NavBar from "./components/layout/NavBar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Footer from "./components/layout/Footer";
import Membership from "./components/Membership";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <About />
        <Membership />
        {/* <Team /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
