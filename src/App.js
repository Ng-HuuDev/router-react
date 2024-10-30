import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import UseEffect from "./Page/UseEffect/UseEffect";
import Header from "./Component/Header";
import DetailPage from "./Page/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="detail/:movieId" element={<DetailPage />} />
          <Route path="/use-effect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
