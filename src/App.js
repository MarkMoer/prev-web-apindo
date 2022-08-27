import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./components/Beranda";
import "./css/landingPage.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda/>}/>
      </Routes>
    </Router>
  );
}

export default App;
