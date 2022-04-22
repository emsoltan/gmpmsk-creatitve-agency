import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="hero">
          <h1>GMPMSK Creative Agency</h1>
        </div>
      </main>
    </div>
  );
};

export default App;
