import {
  Box,
  Center,
  Grid,
  GridItem,
  Text,
  Flex,
  Button,
  Popover,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {PopoverBody
} from '@chakra-ui/react'

const ProductNoibat = () => {
  const productData = [
    {
      name: "Samsung Galaxy S23",
      src: "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg",
    },
    {
      name: "Samsung Galaxy A24",
      src: "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
    },
    {
      name: "iPhone 15 Pro",
      src: "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
    },
    {
      name: "   iPhone 14",
      src: "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg",
    },
    {
      name: "iPhone 12",
      src: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg",
    },
    {
      name: "iPhone 13",
      src: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg",
    },
    {
      name: "Oppo Reno10",
      src: "https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-blue-thumbnew-600x600.jpg",
    },
    {
      name: "Oppo Reno8T",
      src: "https://cdn.tgdd.vn/Products/Images/42/299248/oppo-reno8t-4g-den1-thumb-600x600.jpg",
    },
    {
      name: "Oppo Reno7 Z 5G",
      src: "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-1-600x600.jpg",
    },
    {
      name: "Samsung Galaxy S23 FE",
      src: "https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-xanh-thumb-600x600.jpg",
    },
  ];

  return (
    <Box width="100%" mx="auto" mt={40}>
      <Text fontSize={40} as="b" textAlign="center" mt={30}>
        Sản phẩm nổi bật
      </Text>
      <Flex justifyContent="space-between" px={100} mt={20}>
        <Text fontSize={20}>Điện thoại</Text>
        <Text fontSize={20}>Máy tính</Text>
        <Text fontSize={20}>Đồng hồ</Text>
      </Flex>
      <Flex justifyContent="center" mt={3}>
        <Box width="100%">
          <hr
            style={{ borderColor: "black", borderWidth: "1px", margin: "auto" }}
          />
        </Box>
      </Flex>
      <Grid
        ml={1}
        mt={40}
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={10}
        justifyContent="center"
        alignItems="center"
        
      >
        {productData.map((product, index) => (
          <GridItem
            key={index}
            h="320px"
            w="230px"
            bg="white"
            borderRadius={8}
            boxShadow="lg"
            p={6}
            border="1px solid black"
          >
            <Center>
              <Image
                src={product.src}
                alt={`Product ${index + 1}`}
                h="150px"
                w="150px"
                mt={10}
                borderRadius={8}
                marginBottom={20}
                align={"center"}
                
              />
            </Center>
            <Box
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={20}
            >
              <Text fontSize="2xl" as="b">
                {product.name}
              </Text>
              <Text fontSize="md" mt={2}>
                Giá mới:{" "}
                <span
                  style={{
                    fontSize: "20px",
                    color: "red",
                    marginRight: "0px",
                  }}
                >
                  50,000,000
                </span>
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Center mt={30}>
        <Popover>
        <PopoverBody>
        <Button
          fontSize={20}
          borderRadius={8}
          bg="#fff"
          h={50}
          border="1px solid black"
           _hover={{ fontSize: "21px", color: "red", transition: "0.2s" }}
        >
          Xem Thêm
        </Button>
        </PopoverBody>
        </Popover>
      </Center>
    </Box>
  );
};

export default ProductNoibat;
