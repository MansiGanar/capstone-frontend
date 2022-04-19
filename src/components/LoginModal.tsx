import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

const LoginModal = ({ open, handleClose }: LoginModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose} sx={{ padding: "2rem" }}>
      <DialogTitle sx={{ padding: "2rem", textAlign: "center" }}>
        Login
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{ padding: "2rem", textAlign: "center", width: "25rem" }}
      >
        <DialogContentText sx={{ marginBottom: "1rem" }}>
          Please enter your credentials to login
        </DialogContentText>
        <form>
          <Box sx={{ margin: "1rem" }}>
            <TextField label="Email" variant="outlined" fullWidth required />
          </Box>
          <Box sx={{ margin: "1rem" }}>
            <TextField label="Password" variant="outlined" fullWidth required />
          </Box>
          <Box sx={{ margin: "2.5rem 2rem 0" }}>
            <Button
              variant="contained"
              sx={{ width: "7rem" }}
              startIcon={<LoginIcon />}
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
