import React, { useState } from "react";
import Header from "./Header"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick}/>
    </div>
  );
}

export default App;
