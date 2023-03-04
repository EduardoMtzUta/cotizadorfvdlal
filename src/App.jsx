import { Home } from "./components/Home";
import {Schedule} from "./components/Schedule"
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cita" element={<Schedule/>}/>
      </Routes>
    </>
  );
}

export default App;
