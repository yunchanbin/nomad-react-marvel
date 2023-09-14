import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/character/:id"} element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}
