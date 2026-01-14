import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router";
import Aboute from "./pages/Aboute/Aboute";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />               
                    <Route path="/Aboute" element={<Aboute />} />
                </Route>
                    <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
