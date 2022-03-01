import React, { useState } from "react";
import Login from "./pages/Login/Login";

import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
