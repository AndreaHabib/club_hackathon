import "./App.css";
import "./components/layout/NavBar";
import NavBar from "./components/layout/NavBar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <About id="about" />
      </header>
    </div>
  );
}

export default App;
