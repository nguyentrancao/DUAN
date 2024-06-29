import { Box, Center, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const ProductCard = () => {
  const [products] = useState([
    {
      name: "HP Gaming VICTUS 16 r0128TX i5 13450HX",
      price: "50,000,000",
      image: "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
    },
    {
      name: "Samsung Galaxy Watch6 Classic LTE 47mm",
      price: "45,000,000",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
    },
    {
      name: "Apple Watch Ultra LTE 49mm",
      price: "55,000,000",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
    },
    {
      name: "iPhone 14",
      price: "60,000,000",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg",
    },
  ]);

  // Function to handle changing product details
  // const handleProductChange = () => {
  //     // Example: Change the first product's name and price
  //     const updatedProducts = [...products];
  //     updatedProducts[0].name = "Updated Product Name";
  //     updatedProducts[0].price = "Updated Price";
  //     setProducts(updatedProducts);
  // };

  return (
    
    <Box width="80%"  mt={10} ml={145} >
      <Grid
        ml={12}
        mt={50}
        
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        justifyContent="center"
        alignItems="center"
      >
        {/* Static image for demonstration */}
        <Image
          src="https://i.postimg.cc/YCRGGw0Z/Untitled.png"
          alt="Dan Abramov"
          h={351}
          w={290}
          borderRadius={20}
        />
        {products.map((product, index) => (
          <GridItem
            key={index}
            h="355px"
            w="210px"
            bg="white"
            borderRadius={8}
            boxShadow="lg"
            ml={20}
            border="1px solid black"
          
          >
            <Center>
              <Image
                src={product.image}
                alt={`Product ${index + 1}`}
                h="150px"
                w="150px"
                mt={10}
                borderRadius={8}
                marginBottom={20}
              
              />
            </Center>
            <Text fontSize="2xl" as="b" textAlign="center">
              {product.name}
            </Text>
            <Text fontSize="md" textAlign="center" mt={4}>
              Giá mới:{" "}
              <span style={{ fontSize: "20px", color: "red" }}>
                {product.price}
              </span>
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
