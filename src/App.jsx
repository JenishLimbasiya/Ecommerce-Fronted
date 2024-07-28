import Index from "./pages/Index";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
