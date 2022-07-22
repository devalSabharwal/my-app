import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
      showAlert("Dark Mode Enabled", "warning");
      document.title = "TextUtils- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          title="text Utils"
          aboutText="About Title"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          {" "}
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
