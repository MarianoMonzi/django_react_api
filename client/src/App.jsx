import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FarmsPage } from "./pages/FarmsPage";
import { FarmFormPage } from "./pages/FarmFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/farms" />} />
          <Route path="/farms" element={<FarmsPage />} />
          <Route path="/farms-create" element={<FarmFormPage />} />
          <Route path="/farms/:id" element={<FarmFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
