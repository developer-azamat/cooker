import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Script from "./components/Script";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./components/Recipe";
import Form from "./components/Form";
import { ThemeContext } from "./components/context/ChangeThemContext";
import Nav from "./components/Nav";
import Loader from "./loader/Loader";
import { projectFirestore } from "./firebase/config";

function App() {
  const [count, setCount] = useState(0);
  const { changeMode, mode } = useContext(ThemeContext);
  const LoaderMain = () => {
    setTimeout(() => {
      <Loader />;
    }, 2000);
  };

  // console.log(data);
  return (
    <BrowserRouter>
      <div className={mode ? 'bg-site': 'active bg-site'}>
        {LoaderMain()}
        <Navbar />
        <div
          className="app__body"
          // style={{ background: `${mode ? "lightgray" : "#682CA3"}` }}
        >
          <Nav />
          <Routes>
            <Route path="/" element={<Script />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
