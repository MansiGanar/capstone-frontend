import React from "react";
import { Box, Typography } from "@mui/material";
import livingRoomBg from "../../assets/images/living-room.jpg";
import bedroomBg from "../../assets/images/bedroom.jpg";
import kitchenBg from "../../assets/images/kitchen.jpg";
import bathroomBg from "../../assets/images/bathroom.jpg";
import { imageStyles } from "./styled";
import { Link } from "react-router-dom";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

interface LinkWrapperProps {
  children: JSX.Element | JSX.Element[];
  to: string;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <Box sx={{ padding: "10rem" }}>{children}</Box>;
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
      <Typography fontWeight={500} fontSize={24} textAlign="center">
        Welcome to the biggest online furniture store in Europe!
      </Typography>
      <Typography
        fontWeight={500}
        fontSize={20}
        textAlign="center"
        mt={4}
        mb={4}
      >
        Choose from the categories shown below:
      </Typography>
      <LinkWrapper to="/products/living-room">
        <Box
          textAlign="center"
          mb={5}
          sx={{
            ...imageStyles,
            backgroundImage: `url(${livingRoomBg})`,
          }}
        >
          <Wrapper>
            <Typography
              fontWeight={500}
              fontSize={26}
              sx={{ margin: "0 0 2rem" }}
            >
              LIVING ROOM
            </Typography>
            <Typography fontWeight={500} fontSize={18}>
              Looking for a subtle way to add beautiful blooms to your living
              room? Cushion covers in charcoal hues are a soft, sophisticated
              way to introduce the motif.
            </Typography>
          </Wrapper>
        </Box>
      </LinkWrapper>
      <LinkWrapper to="/products/bedroom">
        <Box
          textAlign="center"
          mb={5}
          sx={{
            ...imageStyles,
            backgroundImage: `url(${bedroomBg})`,
          }}
        >
          <Wrapper>
            <Typography
              fontWeight={500}
              fontSize={26}
              sx={{ margin: "0 0 2rem" }}
            >
              BEDROOM
            </Typography>
            <Typography fontWeight={500} fontSize={18}>
              Better sleep is vital for your health and having a comfortable bed
              in a relaxing bedroom is the key.
            </Typography>
          </Wrapper>
        </Box>
      </LinkWrapper>
      <LinkWrapper to="/products/kitchen">
        <Box
          textAlign="center"
          mb={5}
          sx={{
            ...imageStyles,
            backgroundImage: `url(${kitchenBg})`,
          }}
        >
          <Wrapper>
            <Typography
              fontWeight={500}
              fontSize={26}
              sx={{ margin: "0 0 2rem" }}
            >
              KITCHEN
            </Typography>
            <Typography fontWeight={500} fontSize={18}>
              Keep a coordinated table setting, or mix and match. Stick to a
              classic look or change up your table décor according to the season
              with new tableware.
            </Typography>
          </Wrapper>
        </Box>
      </LinkWrapper>
      <LinkWrapper to="/products/bathroom">
        <Box
          textAlign="center"
          mb={5}
          sx={{
            ...imageStyles,
            backgroundImage: `url(${bathroomBg})`,
          }}
        >
          <Wrapper>
            <Typography
              fontWeight={500}
              fontSize={26}
              sx={{ margin: "0 0 2rem" }}
            >
              BATHROOM
            </Typography>
            <Typography fontWeight={500} fontSize={18}>
              Turn your bathroom into your very own at-home oasis with
              multi-functional and great-looking bathroom accessories to suit
              your bathroom décor.
            </Typography>
          </Wrapper>
        </Box>
      </LinkWrapper>
    </>
  );
};

export default Home;
