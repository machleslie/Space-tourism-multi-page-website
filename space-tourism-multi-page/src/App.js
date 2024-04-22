import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Destination from "./pages/Destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
function App() {
  return (
    <Router>      
      <div className="app">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
