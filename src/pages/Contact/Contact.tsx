import React from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import contactPageImg from "../../assets/images/contactpage.svg";
import PageHeader from "../../components/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader title={"Contact us"} />;
      <Grid container padding="5rem 15rem">
        <Grid item sm={6} pr={12}>
          <Typography
            sx={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#151875",
              marginBottom: "2rem",
            }}
          >
            Information About Us
          </Typography>
          <Typography sx={{ color: "#8A8FB9" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
            cursus metus aliquam eleifend. Platea dictumst quisque sagittis
            purus sit amet volutpat consequat. Nulla pellentesque dignissim enim
            sit.
          </Typography>
          <Grid container mt={5}>
            <Grid item>
              <Box
                sx={{
                  height: "1.563rem",
                  width: "1.563rem",
                  background: "#5726DF",
                  borderRadius: "50%",
                  marginRight: ".7rem",
                }}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "1.563rem",
                  width: "1.563rem",
                  background: "#FB2E86",
                  borderRadius: "50%",
                  marginRight: ".7rem",
                }}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "1.563rem",
                  width: "1.563rem",
                  background: "#37DAF3",
                  borderRadius: "50%",
                  marginRight: ".7rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Typography
            sx={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#151875",
              marginBottom: "2rem",
            }}
          >
            Contact Way
          </Typography>
          <Grid container marginBottom="1rem">
            <Grid item sx={{ color: "#8A8FB9" }} sm={6}>
              <Grid container>
                <Grid item>
                  <Box
                    sx={{
                      height: "2.813rem",
                      width: "2.813rem",
                      background: "#5726DF",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                </Grid>
                <Grid item>
                  <a href="tel:+48786983989">
                    <Typography>(+48)786983989</Typography>
                  </a>
                  <a href="mailto:comfy.decor@gmail.com">
                    <Typography>comfy.decor@gmail.com</Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ color: "#8A8FB9" }} sm={6}>
              <Grid container>
                <Grid item></Grid>
                <Box
                  sx={{
                    height: "2.813rem",
                    width: "2.813rem",
                    background: "#FB2E86",
                    borderRadius: "50%",
                    marginRight: "1rem",
                  }}
                />
                <Grid item>
                  <Typography>Support Form</Typography>
                  <Typography>For over 24hr</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container mt={6}>
            <Grid item sx={{ color: "#8A8FB9" }} sm={6}>
              <Grid container>
                <Grid item>
                  <Box
                    sx={{
                      height: "2.813rem",
                      width: "2.813rem",
                      background: "#FFB265",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography>ul. Unicka, Lublin</Typography>
                  <Typography>Poland, 20-291</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ color: "#8A8FB9" }} sm={6}>
              <Grid container>
                <Grid item>
                  <Box
                    sx={{
                      height: "2.813rem",
                      width: "2.813rem",
                      background: "#1BE982",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography>For standard shipping</Typography>
                  <Typography>on all orders.</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container padding="2rem 15rem 5rem">
        <Grid item sm={6} paddingRight="1rem">
          <Typography
            sx={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#151875",
              marginBottom: "2rem",
            }}
          >
            Get In Touch
          </Typography>
          <Typography sx={{ color: "#8A8FB9", marginBottom: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Type your message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "2rem" }}
          />

          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.5rem 2rem",
            }}
          >
            Send Mail
          </Button>
        </Grid>
        <Grid item sm={6}>
          <img
            src={contactPageImg}
            alt="contact-page-img"
            style={{ width: "32.5rem", padding: "4rem 0" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
