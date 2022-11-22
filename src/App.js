import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Prediction from "./Prediction/Prediction";
import Top from "./Top /Top";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Top />
      <Routes>
        <Route path="/" element={<Prediction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
