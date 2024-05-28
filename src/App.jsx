import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Movies from "./pages/Movies";
import Genra from "./pages/Genra";
import Info from "./pages/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/genra" element={<Genra />} />
          <Route path="/info" element={<Info />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
