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
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CloseIcon from "@mui/icons-material/Close";

interface SignupModalProps {
  open: boolean;
  handleClose: () => void;
}

const SignupModal = ({ open, handleClose }: SignupModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose} sx={{ padding: "2rem" }}>
      <DialogTitle sx={{ padding: "2rem", textAlign: "center" }}>
        Signup
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
          Please enter your details to signup for an account
        </DialogContentText>
        <form>
          <Box sx={{ margin: "1rem" }}>
            <TextField
              label="First name"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Box sx={{ margin: "1rem" }}>
            <TextField
              label="Last name"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
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
              startIcon={<GroupAddIcon />}
              type="submit"
            >
              Signup
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
