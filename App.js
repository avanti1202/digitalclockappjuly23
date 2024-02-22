import './App.css';
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Alarm from "./component/Alarm";
import CountdownTimer from "./component/CountdownTimer";
import Stopwatch from "./component/Stopwatch";
import World from "./component2/World";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/countdowntimer" element={<CountdownTimer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/worldclock" element={<World />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
