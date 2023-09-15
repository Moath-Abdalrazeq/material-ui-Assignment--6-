import React from "react";
import AccordionArrow from "./components/AccordionArrow";
import AccordionSwitch from "./components/AccordionSwitch";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <AccordionArrow />
        <AccordionSwitch />
      </div>
    </div>
  );
}

export default App;
