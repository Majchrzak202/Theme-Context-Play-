import React, { useState, createContext } from "react";
import "./App.css";
import Form from "./components/Form";
import ReactSwitch from "react-switch";

export const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("Dark");

  const toggleContext = () => {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleContext }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label> {theme === 'Light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleContext} checked={theme === 'Dark'}/>
        </div>
      </div>
      ;
    </themeContext.Provider>
  );
}

export default App;
