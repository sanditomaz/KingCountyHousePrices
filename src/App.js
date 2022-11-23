import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./Styles/GlobalStyle";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Prediction from "./Prediction/Prediction";
import Top from "./Top /Top";

function App() {
  const [goMain, setMain] = useState(true);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Top setMain={setMain} />
      <Routes>
        <Route
          path="/"
          element={<Prediction goMain={goMain} setMain={setMain} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
