import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Landing } from "./components/landing";

function App() {
  return (
    <BrowserRouter>
      <Landing>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Landing>
    </BrowserRouter>
  );
}

export default App;
