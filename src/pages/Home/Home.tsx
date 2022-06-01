import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import livingRoomBg from "../../assets/images/living-room.jpg";
import bedroomBg from "../../assets/images/bedroom.jpg";
import kitchenBg from "../../assets/images/kitchen.jpg";
import bathroomBg from "../../assets/images/bathroom.jpg";
import homeOfficeBg from "../../assets/images/home-office.jpg";
import outdoorBg from "../../assets/images/outdoor.jpg";
import { imageStyles } from "./styled";
import { Link } from "react-router-dom";
import CarouselHero from "../../components/carousel/CarouselHero";
import { theme } from "../../utils/theme";
import { primaryText } from "../../utils/colors";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

interface LinkWrapperProps {
  children: JSX.Element | JSX.Element[];
  to: string;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <Box sx={{ padding: "1rem 0 2rem" }}>{children}</Box>;
};

const LinkWrapper = ({ children, to }: LinkWrapperProps) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </Link>
  );
};

const Home = () => {
  return (
    <>
      <CarouselHero />
      <Typography
        fontWeight={500}
        fontSize={20}
        textAlign="center"
        mt={4}
        mb={4}
        sx={{ color: primaryText }}
      >
        Choose from the categories shown below:
      </Typography>
      <Grid container spacing="3rem">
        <Grid item md={4}>
          <LinkWrapper to="/products/living-room">
            <Box
              textAlign="center"
              mb={5}
              sx={{
                ...imageStyles,
                backgroundImage: `url(${livingRoomBg})`,
              }}
            ></Box>
            <Wrapper>
              <Typography
                fontWeight={500}
                fontSize={26}
                sx={{ margin: "0 0 2rem", color: primaryText }}
              >
                LIVING ROOM
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                sx={{ opacity: 0.7, color: primaryText }}
              >
                Looking for a subtle way to add beautiful blooms to your living
                room? Cushion covers in charcoal hues are a soft, sophisticated
                way to introduce the motif.
              </Typography>
            </Wrapper>
          </LinkWrapper>
        </Grid>
        <Grid item md={4}>
          <LinkWrapper to="/products/bedroom">
            <Box
              textAlign="center"
              mb={5}
              sx={{
                ...imageStyles,
                backgroundImage: `url(${bedroomBg})`,
              }}
            ></Box>
            <Wrapper>
              <Typography
                fontWeight={500}
                fontSize={26}
                sx={{ margin: "0 0 2rem", color: primaryText }}
              >
                BEDROOM
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                sx={{ opacity: 0.7, color: primaryText }}
              >
                Better sleep is vital for your health and having a comfortable
                bed in a relaxing bedroom is the key.
              </Typography>
            </Wrapper>
          </LinkWrapper>
        </Grid>
        <Grid item md={4}>
          <LinkWrapper to="/products/kitchen">
            <Box
              textAlign="center"
              mb={5}
              sx={{
                ...imageStyles,
                backgroundImage: `url(${kitchenBg})`,
              }}
            ></Box>
            <Wrapper>
              <Typography
                fontWeight={500}
                fontSize={26}
                sx={{ margin: "0 0 2rem", color: primaryText }}
              >
                KITCHEN
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                sx={{ opacity: 0.7, color: primaryText }}
              >
                Keep a coordinated table setting, or mix and match. Stick to a
                classic look or change up your table décor according to the
                season with new tableware.
              </Typography>
            </Wrapper>
          </LinkWrapper>
        </Grid>
        <Grid item md={4}>
          <LinkWrapper to="/products/bathroom">
            <Box
              textAlign="center"
              mb={5}
              sx={{
                ...imageStyles,
                backgroundImage: `url(${bathroomBg})`,
              }}
            ></Box>
            <Wrapper>
              <Typography
                fontWeight={500}
                fontSize={26}
                sx={{ margin: "0 0 2rem", color: primaryText }}
              >
                BATHROOM
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                sx={{ opacity: 0.7, color: primaryText }}
              >
                Turn your bathroom into your very own at-home oasis with
                multi-functional and great-looking bathroom accessories to suit
                your bathroom décor.
              </Typography>
            </Wrapper>
          </LinkWrapper>
        </Grid>
        <Grid item md={4}>
          <LinkWrapper to="/products/home-office">
            <Box
              textAlign="center"
              mb={5}
              sx={{
                ...imageStyles,
                backgroundImage: `url(${homeOfficeBg})`,
              }}
            ></Box>
            <Wrapper>
              <Typography
                fontWeight={500}
                fontSize={26}
                sx={{ margin: "0 0 2rem", color: primaryText }}
              >
                HOME OFFICE
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                sx={{ opacity: 0.7, color: primaryText }}
              >
                With our selection of home office desk accessories to help you
                stay focused and organized you will be prepared for whatever
                your work day has in store.
              </Typography>
            </Wrapper>
          </LinkWrapper>
        </Grid>
        <Grid item md={4}>
          <LinkWrapper to="/products/outdoor">
            <Box
              textAlign="center"
              mb={5}
              sx={{
                ...imageStyles,
                backgroundImage: `url(${outdoorBg})`,
              }}
            ></Box>
            <Wrapper>
              <Typography
                fontWeight={500}
                fontSize={26}
                sx={{ margin: "0 0 2rem", color: primaryText }}
              >
                OUTDOOR
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                sx={{ opacity: 0.7, color: primaryText }}
              >
                No matter how much space you have, you can have your dream
                outdoor area with the right type of furniture and accessories.
              </Typography>
            </Wrapper>
          </LinkWrapper>
        </Grid>
      </Grid>
      <Box
        textAlign={"center"}
        sx={{
          margin: "5rem 0",
          backgroundColor: theme.palette.secondary.main,
          padding: "5rem 2rem",
          borderRadius: "1rem",
        }}
      >
        <Typography fontWeight={500} fontSize={36} sx={{ color: primaryText }}>
          Sign up now & get 10% off
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={18}
          sx={{ margin: "1rem 0 2rem", color: primaryText }}
        >
          Be the first to know about our new arrivals and exclusive offers.
        </Typography>
        <Grid
          container
          alignItems={"center"}
          spacing={"1rem"}
          justifyContent="center"
        >
          <Grid item>
            <TextField
              placeholder="Your email address"
              sx={{ height: "3.5rem", width: "30rem" }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ height: "3.5rem" }}>
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          gap="1rem"
          sx={{ margin: "2.5rem 0 1rem" }}
        >
          <Grid item>
            <FacebookIcon fontSize={"large"} color="primary" />
          </Grid>
          <Grid item>
            <TwitterIcon fontSize={"large"} color="primary" />
          </Grid>
          <Grid item>
            <InstagramIcon fontSize={"large"} color="primary" />
          </Grid>
          <Grid item>
            <YouTubeIcon fontSize={"large"} color="primary" />
          </Grid>
        </Grid>
        <Typography fontWeight={400} fontSize={18} sx={{ color: primaryText }}>
          Don’t worry. We don’t spam
        </Typography>
      </Box>
    </>
  );
};

export default Home;
