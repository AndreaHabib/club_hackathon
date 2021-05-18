import "./App.css";
import LandingPage from "./components/LandingPage";
import "./components/layout/NavBar";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
