import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Data from "./Data/Data";

console.log(Data);

function App() {
  return (
    <>
      <Header />
      <div className="body">
        <Body />
      </div>
    </>
  );
}

export default App;
