import React from "react";
import BannerHome from "../BannerHome/BannerHome.js";
import { Box, Center } from "@chakra-ui/react";
import ProductTop from "../Product/ProductTop";
import ProductList from "../Product/ProductList";
import ProductNb from "../Product/ProductNoibat.js";
import Smartwach from "../Product/Smartwach.js";
import Phukiennb from "../Product/Phukien.js";
import ProductCard from "../Product/Gtiphone.js";
import InfoCard from "../Product/Service.js";
import CustomComponent from "../Product/Blog.js";

const Home = () => {
  return (
    <>
      <Center>
        <Box w={"100%"}>
          <Center>
            <Box mt={10} w={"80%"}>
              <BannerHome />
            </Box>
          </Center>
          <Center>
            <Box mt={10} w={"80%"}>
              <ProductTop></ProductTop>
              <ProductList />
              <ProductNb></ProductNb>
              <Smartwach />
              <Phukiennb />
            </Box>
          </Center>
          <ProductCard />
          <InfoCard />
          <CustomComponent />
        </Box>
      </Center>
    </>
  );
};
export default Home;
