import "./App.css";

import HomePage from "./pages/HomePage";
import CreditPage from "./pages/CreditPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/credit-page" element={<CreditPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
