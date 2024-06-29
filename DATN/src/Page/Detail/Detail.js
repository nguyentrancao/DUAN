import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { px } from "framer-motion";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("Xanh dương");

  const product = {
    name: "iPhone 14 Plus",
    price: 21990000,
    discount: "Hỗ trợ trả góp lãi xuất lên đến 0%/tháng | Xem thêm",
    colors: ["Xanh dương", "Đen", "Trắng", "Tím", "Vàng đồng"],
    gram: ["126GB", "256GB"],
    images: [
      "https://imagetolink.com/ib/CCcexiYISn.jpg",
      "https://imagetolink.com/ib/CCcexiYISn.jpg",
      "https://imagetolink.com/ib/CCcexiYISn.jpg",
      "https://imagetolink.com/ib/CCcexiYISn.jpg",
    ],
    specs: "Miễn phí vận chuyển!",
    relatedProducts: [
      {
        name: "iPhone 15 Pro",
        newPrice: "28.390.000 ₫",
        oldPrice: "34.068.000 ₫",
        imgSrc: "https://imagetolink.com/ib/3itW8D1II6.png",
      },
      {
        name: "iPhone 15 Plus",
        newPrice: "25.790.000 ₫",
        oldPrice: "30.000.000 ₫",
        imgSrc: "https://imagetolink.com/ib/3itW8D1II6.png",
      },
      {
        name: "iPhone 15",
        newPrice: "22.690.000 ₫",
        oldPrice: "27.000.000 ₫",
        imgSrc: "https://imagetolink.com/ib/3itW8D1II6.png",
      },
      {
        name: "iPhone 14 Pro Max",
        newPrice: "33.490.000 ₫",
        oldPrice: "40.000.000 ₫",
        imgSrc: "https://imagetolink.com/ib/3itW8D1II6.png",
      },
      {
        name: "iPhone 14 Pro",
        newPrice: "25.190.000 ₫",
        oldPrice: "29.000.000 ₫",
        imgSrc: "https://imagetolink.com/ib/3itW8D1II6.png",
      },
    ],
  };

  return (
    <Box maxW="80%" mx="auto" p={5} h={2250} mt={50}>
      <Flex
        direction={{ base: "column", md: "row" }}
        boxShadow="md"
        borderRadius="md"
        overflow="hidden"
        h={1000}
      >
        {/* Left section with main image and thumbnails */}
        <Box flex="1" p={5}>
          <Image
            src={product.images[0]}
            alt={product.name}
            borderRadius="8"
            mt={100}
            w={"100%"}
            h={396}
          />
          <HStack spacing={1} mt={4}>
            {product.images.slice(1).map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`${product.name} thumbnail ${index + 1}`}
                w={138}
                h={98}
                borderRadius="md"
                ml={50}
                mr={-20}
                borderWidth="1px"
                borderStyle="solid"
                borderColor="black"
              />
            ))}
          </HStack>
          <Box w="100%" h="169.10px" position="relative" borderRadius={"8"}>
            <Flex
              w="548.05px"
              h="22.12px"
              pr="363.75px"
              pb="1.12px"
              left="31.99px"
              top="0"
              position="absolute"
              justifyContent="start"
              alignItems="center"
              display="inline-flex"
              mt={30}
              borderRadius={"8"}
            >
              <Box w="184.30px">
                <Text
                  color="slate.600"
                  fontSize="13.02px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                >
                  Thông số kĩ thuật
                </Text>
                <Text
                  color="slate.600"
                  fontSize="13.02px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                >
                  Tên: iPhone 14 Plus{" "}
                </Text>
                <Text
                  color="blue.600"
                  fontSize="13.02px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                  ml="1"
                >
                  Read T&C
                </Text>
              </Box>
            </Flex>
            <Flex
              h="43.12px"
              pr="4.96px"
              pb="1.12px"
              left="31.99px"
              top="21px"
              position="absolute"
              justifyContent="start"
              alignItems="center"
              display="inline-flex"
              mt={150}
            >
              <Box w="543.09px" h="42px">
                <Text
                  color="slate.600"
                  fontSize="12.91px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                  mt={30}
                >
                  Ứng dụng phổ biến: Clip TVFPT PlayGalaxy Play
                  (Fim+)MyTVNetflixNhaccuatuiPOPS
                  <br />
                  KidsSpotify Trình duyệt webTV 360 VieON VTVcab ON YouTube
                  YouTube Kids
                </Text>
                <Text
                  color="blue.600"
                  fontSize="12.91px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                  ml="1"
                >
                  Read T&C
                </Text>
              </Box>
            </Flex>
            <Flex
              h="106.11px"
              pr="3.69px"
              pb="1.11px"
              left="31.99px"
              top="62.99px"
              position="absolute"
              justifyContent="center"
              alignItems="center"
              display="inline-flex"
            >
              <Box w="100%" h="105px">
                <Text
                  color="slate.600"
                  fontSize="13.12px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                  mt={10}
                >
                  Công nghệ hình ảnh: Active HDR Chế độ game HGiG Chế độ hình
                  ảnh phù hợp nội dung
                  <br />
                  Dải màu rộng Nano Color Giảm độ trễ chơi game Auto Low Latency
                  Mode (ALLM) HDR
                  <br />
                  Dynamic Tone Mapping HDR10 Pro HLGNâng cấp hình ảnh AI Picture
                  Pro 4K Nâng cấp độ
                  <br />
                  phân giải 4K AI Upscaling Tương thích bộ mã hóa Video decoder
                  (VP9, AV1) Tương thích
                  <br />
                  HEVC
                </Text>

                <Text
                  color="slate.600"
                  fontSize="13.12px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                  mt={100}
                >
                  <Text
                    color="slate.600"
                    fontSize="13.02px"
                    fontWeight="normal"
                    fontFamily="Inter"
                    lineHeight="21px"
                  >
                    Thông tin sản phẩm (1)
                  </Text>
                  iPhone 14 Plus có thiết kế Airslim không viền 3 cạnh sang
                  trọng và tinh tế. Mang lại tổng thể cho không gian trưng bày
                  thêm điểm nhấn vô cùng ấn tượng.
                  <br />
                  Màn hình iPhone 14 Plus cùng chân đế vững chắc phù hợp trưng
                  bày các không gian như: Phòng khách, phòng ngủ, phòng họp,...
                  View all Standard Credit Cards EMI options
                  <br />
                </Text>
                <Text
                  color="blue.600"
                  fontSize="13.12px"
                  fontWeight="normal"
                  fontFamily="Inter"
                  lineHeight="21px"
                  ml="1"
                >
                  Read T&C
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* giá và */}
        <Box
          flex="1"
          p={5}
          mt={100}
          borderRadius="md"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="black"
          boxSizing="border-box"
          overflowWrap="break-word"
          h={650}
        >
          <Heading as="h2" size="lg" mb={4} ml={10} mt={20}>
            {product.name}
          </Heading>
          <Text fontSize="36px" color="red" mb={2} mt={10} ml={10}>
            {product.price.toLocaleString()} ₫
          </Text>
          <Text ml={10}>Giá gốc: 26.388.000 ₫</Text>
          <Text ml={200} mt={-18}>
            (Bao gồm tất cả các loại thuế)
          </Text>
          <Text mt={10} ml={10}>
            Giảm tới: 20%
          </Text>
          <HStack spacing={3} mb={4}>
            {product.colors.map((color) => (
              <Button
                key={color}
                size="sm"
                variant={selectedColor === color ? "solid" : "outline"}
                onClick={() => setSelectedColor(color)}
                ml={10}
                margin-bottom="10px"
                w={95}
                h={50}
                outline="transparent solid 2px"
                bg={"white"}
                borderRadius="10px"
                mt={10}
              >
                {color}
              </Button>
            ))}
          </HStack>

          <HStack spacing={3} mb={4}>
            {product.gram.map((gram) => (
              <Button
                key={gram}
                size="sm"
                variant={selectedColor === gram ? "solid" : "outline"}
                onClick={() => setSelectedColor(gram)}
                ml={10}
                margin-bottom="10px"
                w={95}
                h={50}
                outline="transparent solid 2px"
                bg={"white"}
                borderRadius="10px"
                mt={10}
              >
                {gram}
              </Button>
            ))}
          </HStack>
          <Text ml={10}>
            Hỗ trợ trả góp lãi xuất lên đến 0%/tháng | Xem thêm
          </Text>
          <Text mb={4} ml={10} mt={10}>
            {product.specs}
          </Text>
          {/* love và cart */}
          <Box
            background="#FF4500"
            w="293.61px"
            h={50}
            pt={12}
            rounded={10}
            fontSize={24}
            mt={10}
            ml={10}
          >
            <Text
              fontSize="21px"
              color="white"
              fontWeight="semibold"
              textAlign="center"
              lineHeight="snug"
              w="293px"
              h="21.60px"
            >
              Yêu thích
            </Text>
          </Box>

          <Box
            background="#FF4500"
            w="293.61px"
            h={50}
            pt={12}
            rounded={10}
            fontSize={24}
            ml={330}
            mt={-50}
          >
            <Text
              fontSize="21px"
              color="white"
              fontWeight="semibold"
              textAlign="center"
              lineHeight="snug"
              w="293px"
              h="21.60px"
            >
              Thêm vào giỏ hàng
            </Text>
          </Box>
          {/* love và cart */}

          <Box
            w="599.22px"
            h="195.51px"
            position="relative"
            rounded="5px"
            border="1px solid #FCA5A5"
            ml={30}
            mt={20}
          >
            <Text
              position="absolute"
              left="13.18px"
              top="38.29px"
              color="gray.900"
              fontSize="base"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              .
            </Text>
            <Text
              position="absolute"
              left="45.29px"
              top="38.29px"
              color="gray.900"
              fontSize="base"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              Giảm giá khi mua trong giờ phát sóng live tream
            </Text>
            <Text
              position="absolute"
              left="13.18px"
              top="62.28px"
              color="gray.900"
              fontSize="base"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              .
            </Text>
            <Text
              position="absolute"
              left="45.29px"
              top="62.28px"
              color="gray.900"
              fontSize="15px"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              Dùng thử 30 ngày, đổi máy không cần lý do
            </Text>
            <Text
              position="absolute"
              left="13.18px"
              top="86.26px"
              color="gray.900"
              fontSize="base"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              .
            </Text>
            <Text
              position="absolute"
              left="45.29px"
              top="86.26px"
              color="gray.900"
              fontSize="15.12px"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              Bảo hành thân máy 12 tháng
            </Text>
            <Text
              position="absolute"
              left="13.18px"
              top="110.25px"
              color="gray.900"
              fontSize="base"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              .
            </Text>
            <Text
              position="absolute"
              left="45.29px"
              top="110.25px"
              color="gray.900"
              fontSize="14.88px"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              Giảm 200k - 300k cho Học Sinh/ Sinh Viên/ Giáo Viên
            </Text>
            <Text
              position="absolute"
              left="13.18px"
              top="134.24px"
              color="gray.900"
              fontSize="base"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              .
            </Text>
            <Text
              position="absolute"
              left="45.29px"
              top="134.24px"
              color="gray.900"
              fontSize="15.12px"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              Giao hàng toàn quốc (miễn phí nội thành HCM)
            </Text>
            <Text
              position="absolute"
              left="13.18px"
              top="158.21px"
              color="gray.900"
              fontSize="base"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              .
            </Text>
            <Text
              position="absolute"
              left="45.29px"
              top="158.21px"
              color="gray.900"
              fontSize="14.88px"
              fontWeight="normal"
              fontFamily="Inter"
              lineHeight="normal"
            >
              Mã giảm 100.000đ áp dụng đơn hàng từ 500.000đ
            </Text>
            <Text
              position="absolute"
              left="41.25px"
              top="1.25px"
              color="gray.900"
              fontSize="xl"
              fontWeight="bold"
              fontFamily="Inter"
              lineHeight="24.96px"
            >
              Các khuyến mãi khác
            </Text>
          </Box>

          <Box
            mt={50}
            width="655.20px"
            height="218.40px"
            pl="0.63px"
            pr="0.62px"
            py="0.63px"
            bg="whiteAlpha.0"
            shadow="inner"
            border="1px solid"
            borderColor="stone.300"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            display="inline-flex"
          >
            <Flex
              width="full"
              height="40.59px"
              pt="8.48px"
              pb="8.11px"
              bg="zinc.100"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                width="655px"
                height="45px"
                textAlign="center"
                color="gray.900"
                fontSize="16px"
                fontWeight="bold"
                fontFamily="Roboto"
                lineHeight="normal"
                background={"grey"}
                pt={10}
                textColor={"white"}
              >
                Thông tin cấu hình
              </Text>
            </Flex>
            <Flex
              width="full"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              gap="0.01px"
              grow="1"
              shrink="0"
              basis="0"
            >
              <Flex
                width="full"
                grow="1"
                shrink="0"
                basis="0"
                pl="10.62px"
                pr="236.68px"
                pt="9.88px"
                pb="10.10px"
                justifyContent="start"
                alignItems="start"
                gap="223.53px"
              >
                <Text
                  width="76.59px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="bold"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  Sản phẩm:
                </Text>
                <Text
                  width="106.53px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="normal"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  iPhone 14 Plus
                </Text>
              </Flex>
              <Flex
                width="full"
                grow="1"
                shrink="0"
                basis="0"
                pl="10.62px"
                pr="256.67px"
                pt="9.88px"
                pb="10.10px"
                justifyContent="start"
                alignItems="start"
                gap="263.74px"
              >
                <Text
                  width="39.38px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="bold"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  Màu:
                </Text>
                <Text
                  width="86.54px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="normal"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  Xanh dương
                </Text>
              </Flex>
              <Flex
                width="full"
                grow="1"
                shrink="0"
                basis="0"
                pl="10.62px"
                pr="294.52px"
                pt="9.88px"
                pb="10.10px"
                justifyContent="start"
                alignItems="start"
                gap="257.29px"
              >
                <Text
                  width="42.83px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="bold"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  Hãng:
                </Text>
                <Text
                  width="50.69px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="normal"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  APPLE
                </Text>
              </Flex>
              <Flex
                width="full"
                grow="1"
                shrink="0"
                basis="0"
                pl="10.62px"
                pr="295.05px"
                pt="9.88px"
                pb="10.74px"
                justifyContent="start"
                alignItems="start"
                gap="212.45px"
              >
                <Text
                  width="87.67px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="bold"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  Dung lượng:
                </Text>
                <Text
                  width="48.16px"
                  height="24px"
                  color="gray.900"
                  fontSize="16px"
                  fontWeight="normal"
                  fontFamily="Roboto"
                  lineHeight="normal"
                >
                  128GB
                </Text>
              </Flex>
            </Flex>
          </Box>

          {/* comment */}
        </Box>
      </Flex>
      {/* Related Products */}
      <Box
        mt={50}
        sx={{
          "@media screen and (min-width: 100%)": {
            maxWidth: "100%",
            mx: "auto",
            mt: "50px",
          },
        }}
        bg="#ffffff"
      >
        <Heading size="lg" mb={6} color="black" textAlign="left">
          Sản phẩm liên quan
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(160px, 1fr))" gap={6}>
          {product.relatedProducts.map((relatedProduct, index) => (
            <GridItem
              key={index}
              border="1px solid #ccc"
              borderRadius="20"
              p={4}
              textAlign="center"
              background={"white"}
              mt={10}
              w={"auto"}
              h={351}
            >
              <Image
                src={relatedProduct.imgSrc}
                alt={relatedProduct.name}
                borderRadius="md"
                mb={4}
                mt={10}
                w={150}
                h={150}
              />
              <Text fontSize="md" fontWeight="600" color="black" mb={2} mt={10}>
                {relatedProduct.name}
              </Text>

              <Text color="black" mt={5}>
                Giá mới:
                <span
                  style={{ fontSize: "17px", color: "red", marginLeft: "5px" }}
                >
                  {relatedProduct.newPrice}
                </span>
              </Text>
              <Text color="black" mt={5}>
                Giá cũ:
                <span
                  style={{
                    fontSize: "17px",
                    textDecoration: "line-through",
                    marginLeft: "5px",
                  }}
                >
                  {relatedProduct.oldPrice}
                </span>
              </Text>

              <Box
                w="119.16px"
                h="18.98px"
                pl="26px"
                pr="25.79px"
                pt="1.37px"
                pb="2.61px"
                bg="#FEB373"
                borderRadius="5px"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                ml={-50}
                mt={40}
              >
                <Box
                  w="67.37px"
                  h="15px"
                  color="#EC4C0A"
                  fontSize="9.53px"
                  fontWeight="medium"
                  fontFamily="Inter"
                  lineHeight="15px"
                >
                  GIẢM GIÁ SỐC
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      {/* comment */}
      <Box
        w="100%"
        h="313.96px"
        position="relative"
        bg="#DFEDFA"
        rounded="10px"
        shadow="md"
        mt={50}
      >
        <Text
          w="100%"
          h="21.60px"
          position="absolute"
          left="30px"
          top="30px"
          color="gray.900"
          fontSize="30"
          fontWeight="bold"
          fontFamily="Inter"
          lineHeight="tall"
        >
          Đánh giá sản phẩm:
        </Text>
        {/* đánh giá sao sp  */}
        <Flex position="absolute" left="30px" top="70px" gap="2.99px">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} color="#ffc107" fontSize="18" lineHeight="24px" />
          ))}
        </Flex>
        {/* đánh giá sao sp  */}
        <Box
          w="95%"
          h="90px"
          position="absolute"
          left="30px"
          top="109.57px"
          bg="white"
          rounded="md"
          border="1px solid"
          borderColor="slate.200"
        >
          <Box
            w="full"
            h="full"
            position="absolute"
            left="0"
            top="0"
            rounded="md"
            border="1px solid"
            borderColor="black"
          />
          <Text
            w="90%"
            h="22px"
            position="absolute"
            left="17.25px"
            top="8.86px"
            color="gray.400"
            fontSize="14.88px"
            fontWeight="normal"
            fontFamily="Inter"
            lineHeight="tall"
          >
            Hãy nhận xét về sản phẩm này
          </Text>
        </Box>
        <Button
          w="97px"
          h="40px"
          pl="4"
          pr="3.95"
          pt="10.19px"
          pb="10.61px"
          position="absolute"
          left="24.20px"
          top="233.77px"
          bg="#4299E1"
          rounded="5px"
          color="black"
          fontFamily="Inter"
          fontSize="14"
          fontWeight="700"
          lineHeight="tight"
          _hover={{ bg: "#dfedfa" }}
        >
          Nhận xét
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;
