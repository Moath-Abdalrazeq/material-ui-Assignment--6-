import React from "react";
import AccordionArrow from "./components/AccordionArrow";
import AccordionSwitch from "./components/AccordionSwitch";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div style={{ width: "900px" }}>
        <AccordionArrow />
        <AccordionSwitch />
      </div>
    </div>
  );
}

export default App;
