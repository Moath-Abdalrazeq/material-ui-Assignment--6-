import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionSwitch() {
  const [isSwitch, setIsSwitch] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Accordion
        expanded={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Switch checked={isSwitch} onChange={() => setIsSwitch(!isSwitch)} />
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          backgroundColor: "#aee2e3",
          height: isSwitch ? "400px" : "100px",
          transition: "height 1s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Hello World</Typography>
      </div>
    </>
  );
}

export default AccordionSwitch;
