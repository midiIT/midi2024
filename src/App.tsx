import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Static from "./pages/static";
import Interactive from "./pages/interactive";

function App() {
  return (
    <>
      <BrowserRouter basename="/2024">
        <Routes>
          <Route index element={<Index />}></Route>
          <Route path="static" element={<Static />}></Route>
            <Route path="interactive" element={<Interactive />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
