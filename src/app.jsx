import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
