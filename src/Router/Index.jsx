import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import FacturaPage from "../pages/FacturaPage.jsx";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/factura" element={<FacturaPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}
