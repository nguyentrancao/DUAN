import React from "react";
import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Center,
  Image,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "https://isotech-demo.myshopify.com/cdn/shop/files/2_ae5cc69e-78af-4aea-9cc7-bb616d558539.png?v=1695797615",
    alt: "IPhone 15 Pro Max",
    title: "IPhone 15 Pro Max",
    description:
      "Hiệu năng vượt trội với con chip A17 Pro tốc độ xử lý nhanh hơn IPhone 12 Pro Max",
  },
  {
    src: "https://truesmart.com.vn/wp-content/uploads/iphone-14-pro-max-full.webp",
    alt: "IPhone 14 Pro Max",
    title: "IPhone 14 Pro Max",
    description:
      "Hiệu năng vượt trội với con chip A16 Pro tốc độ xử lý nhanh hơn IPhone 11 Pro Max",
  },
  {
    src: "https://images.hindustantimes.com/tech/img/2023/10/03/960x540/iPhone_1696304572240_1696304572418.jpg",
    alt: "IPhone 13 Pro Max",
    title: "IPhone 13 Pro Max",
    description:
      "Hiệu năng vượt trội với con chip A15 Pro tốc độ xử lý nhanh hơn IPhone 10 Pro Max",
  },
];

const BannerHome = () => {
  const settings = {
    dots: false,
    infinite: true,

    speed: 5000, // Chuyển đổi slide sau mỗi 1 giây
    slidesToShow: 1, // Hiển thị 1 slide cùng lúc
    slidesToScroll: 1, // Chuyển đổi 1 slide khi chuyển đổi
    autoplay: true,
    autoplaySpeed: 1000, // Chuyển slide sau mỗi 1 giây

    // speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <Center>
      <Grid
        mt={110}
        w={"100%"}
        h="500px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem
          h="350px"
          rowSpan={2}
          colSpan={9}
          bg="tomato"
          borderRadius={8}
        >
          <Slider {...settings} prevArrow={<></>} nextArrow={<></>}>
            {images.map((image, index) => (
              <Box key={index} position="relative" borderRadius={8}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  h="470px"
                  w="100%"
                  borderRadius={8}
                />
                <Box
                  position="absolute"
                  top="45%"
                  left="12%"
                  right="51%"
                  transform="translate(10%, )"
                  color="white"
                >
                  <Text fontSize="35px" fontWeight="bold" mb={0}>
                    {image.title}
                  </Text>
                  <Text fontSize="16px" mb={4} mt={20}>
                    {image.description}
                  </Text>
                  <Button
                    borderRadius={7}
                    w={120}
                    h={40}
                    mt={20}
                    backgroundColor="white"
                    color="black"
                    fontWeight="bold"
                    _hover={{ backgroundColor: "", color: "blue" }}
                    onClick={() => {
                      // Handle button click
                    }}
                  >
                    XEM THÊM
                  </Button>
                </Box>
              </Box>
            ))}
          </Slider>
        </GridItem>

        <GridItem colSpan={3} borderRadius={8}>
          <Image
            src="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_14.png?v=1695797658&width=1500"
            alt="Slide 2"
            style={{
              width: "100%",
              height: "230px",
              objectFit: "cover",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          />
        </GridItem>
        <GridItem colSpan={3} borderRadius={8}>
          <Image
            src="https://isotech-demo.myshopify.com/cdn/shop/files/Frame_15.png?v=1695797682&width=1500"
            alt="Slide 3"
            style={{
              width: "100%",
              height: "230px",
              objectFit: "cover",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          />
        </GridItem>
        <GridItem colSpan={4} h={"160px"} borderRadius={15}>
          <Image
            src="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_4.png?v=1695813715&width=550"
            alt="Slide 4"
            h={200}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          />
        </GridItem>
        <GridItem colSpan={4} h={"160px"} borderRadius={15}>
          <Image
            src="https://isotech-demo.myshopify.com/cdn/shop/files/3_Banner_5.png?v=1695813736&width=550"
            alt="Slide 5"
            h={200}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          />
        </GridItem>
        <GridItem colSpan={4} h={"160px"} borderRadius={15}>
          <Image
            src="https://cdn.vectorstock.com/i/preview-1x/35/83/software-development-programming-vector-24033583.jpg"
            alt="Slide 6"
            h={200}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default BannerHome;
