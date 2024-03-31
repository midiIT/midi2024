import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Static from "./pages/static";

function App() {
  return (
    <>
      <BrowserRouter basename="/2024test">
        <Routes>
          <Route index element={<Index />}></Route>
          <Route path="static" element={<Static />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
