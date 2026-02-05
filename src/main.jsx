import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router";
import Aboute from "./pages/Aboute/Aboute";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Myskills from "./components/Skills/Myskills";
import Slider from "./components/Slider/Slider";
import Contact from "./components/Contacts/Contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Aboute" element={<Aboute />} />
          <Route path="/skills" element={<Myskills />} />
          <Route path="/Project" element={<Slider />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
