import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "4px solid #1ab69d",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const errorStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "4px solid red",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  py: 7,
};

export default function MeritModal({
  open,
  handleClose,
  totalMerit,
  university,
  errorMessage,
}) {
  let merit = 0;

  if (totalMerit) {
    merit = totalMerit.toFixed(2);
  }

  if (errorMessage)
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={errorStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                position: "absolute",
                top: 10,
                left: 25,
                color: "red",
              }}
            >
              Error
            </Typography>
            <IconButton
              aria-label="close"
              style={{ position: "absolute", top: 10, right: 25 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {errorMessage}
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            style={{ position: "absolute", top: 10, right: 10 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your merit for {university} is{" "}
            <Typography
              sx={{ fontStyle: "italic" }}
              variant="h5"
              component="h2"
            >
              {merit}%
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
