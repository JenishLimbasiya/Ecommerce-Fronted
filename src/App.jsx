import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
}
