import React from "react";
import { Box, Button, Typography } from "@mui/material";
import livingRoomBg from "../../assets/images/living-room.jpg";
import bedroomBg from "../../assets/images/bedroom.jpg";
import kitchenBg from "../../assets/images/kitchen.jpg";
import bathroomBg from "../../assets/images/bathroom.jpg";

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

      <Box
        textAlign="center"
        mb={5}
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${livingRoomBg})`,
          height: "500px",
          borderRadius: "1rem",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginBottom: "2rem", fontSize: "1.2rem" }}
        >
          Living Room
        </Button>
        <Typography fontWeight={500} fontSize={18}>
          Looking for a subtle way to add beautiful blooms to your living room?
          Cushion covers in charcoal hues are a soft, sophisticated way to
          introduce the motif.
        </Typography>
      </Box>

      <Box
        textAlign="center"
        mb={5}
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bedroomBg})`,
          height: "500px",
          borderRadius: "1rem",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginBottom: "2rem", fontSize: "1.2rem" }}
        >
          Bedroom
        </Button>
        <Typography fontWeight={500} fontSize={18}>
          Better sleep is vital for your health and having a comfortable bed in
          a relaxing bedroom is the key.
        </Typography>
      </Box>
      <Box
        textAlign="center"
        mb={5}
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${kitchenBg})`,
          height: "500px",
          borderRadius: "1rem",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginBottom: "2rem", fontSize: "1.2rem" }}
        >
          Kitchen
        </Button>
        <Typography fontWeight={500} fontSize={18}>
          Keep a coordinated table setting, or mix and match. Stick to a classic
          look or change up your table décor according to the season with new
          tableware.
        </Typography>
      </Box>
      <Box
        textAlign="center"
        mb={5}
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bathroomBg})`,
          height: "500px",
          borderRadius: "1rem",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginBottom: "2rem", fontSize: "1.2rem" }}
        >
          Bathroom
        </Button>
        <Typography fontWeight={500} fontSize={18}>
          Turn your bathroom into your very own at-home oasis with
          multi-functional and great-looking bathroom accessories to suit your
          bathroom décor.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
