import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Static from "./pages/static";
import Interactive from "./pages/interactive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />}></Route>
          <Route path="static" element={<Static />}></Route>
          <Route path="interactive" element={<Interactive />}></Route>
          {/* 
          TODO: implement static, interactive and ro page routing

          <Route path="ro" element={<RokoOperos/>}</Route> 
          */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
