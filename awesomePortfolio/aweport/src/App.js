import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Works from "./pages/Works";
import LandTail from "./pages/LandTail";

function App() {
  return (
    <div className="App">
      {/* <LandTail /> */}
      <Landing />
      {/* <Portfolio />
      <Works /> */}
    </div>
  );
}

export default App;
