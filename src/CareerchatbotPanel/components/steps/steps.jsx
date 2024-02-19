import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Create an ad1",
  "Create an ad2",
  "Create an ad3",
];

export default function HorizontalLinearAlternativeLabelStepper({ index }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper sx={{}} activeStep={index} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
