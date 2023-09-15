import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionArrow() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={toggleAccordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="p">
          The accordion component allows the user to show and hide sections of
          related content on a page.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionArrow;
