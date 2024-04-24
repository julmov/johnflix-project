import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import LoginPage from "./pages/LoginPage/"
import SignUp from "./pages/SignUp/"
import JohnFlix from "./pages/JohnFlix/"
import NetflixStriming from "./pages/NetflixStriming/";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<JohnFlix />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/browse" element={<NetflixStriming />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
