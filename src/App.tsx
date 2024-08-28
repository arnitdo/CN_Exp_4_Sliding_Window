import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoBackN } from "./pages/go-back-n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/go-back-n"} element={<GoBackN />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
