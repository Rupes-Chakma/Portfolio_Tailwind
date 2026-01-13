import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router";
import Aboute from "./pages/Aboute/Aboute";
import Error from "./pages/Error/Error";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/Aboute" element={<Aboute />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
