import { Box, Center, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Popover,PopoverBody } from "@chakra-ui/react";

const Phukiennb = () => {
    const products = [
        {
            name: "Pin dự phòng Samsung 10000mAh",
            image: "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg",
            price: "500,000"
        },
        {
            name: "Cáp sạc iPhone chính hãng",
            image: "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
            price: "300,000"
        },
        {
            name: "Tai nghe Sony Noise Cancelling",
            image: "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
            price: "2,000,000"
        },
        {
            name: "Loa Bluetooth JBL Charge 5",
            image: "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg",
            price: "3,500,000"
        },
        {
            name: "Bàn phím Logitech G Pro X",
            image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg",
            price: "1,200,000"
        },
        {
            name: "Chuột Gaming Razer DeathAdder",
            image: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg",
            price: "800,000"
        },
        {
            name: "Ổ cứng di động WD Elements 1TB",
            image: "https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-blue-thumbnew-600x600.jpg",
            price: "1,000,000"
        },
        {
            name: "Thẻ nhớ SanDisk Extreme Pro 128GB",
            image: "https://cdn.tgdd.vn/Products/Images/42/299248/oppo-reno8t-4g-den1-thumb-600x600.jpg",
            price: "500,000"
        },
        {
            name: "Tai nghe Bluetooth Samsung Galaxy Buds Pro",
            image: "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-1-600x600.jpg",
            price: "2,500,000"
        },
        {
            name: "Bàn di chuột gaming HyperX Fury S",
            image: "https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-xanh-thumb-600x600.jpg",
            price: "300,000"
        }
    ];

    return (
        <Box width="100%" mx="auto" mt={50}>
            <Text fontSize={32} as='b' textAlign="center" ml={520}>Các phụ kiện khác</Text>
            <Flex justifyContent="space-between" px={100} mt={10}>
                <Text fontSize={20}>Pin dự phòng</Text>
                <Text fontSize={20}>Cáp sạc</Text>
                <Text fontSize={20}>Tai nghe</Text>
                <Text fontSize={20}>Loa</Text>
                <Text fontSize={20}>Bàn phím</Text>
                <Text fontSize={20}>Chuột</Text>
            </Flex>
            <Flex justifyContent="center" mt={2}>
                <Box width="100%">
                    <hr style={{ borderColor: 'black', borderWidth: '1px', margin: 'auto' }} />
                </Box>
            </Flex>
            <Grid
                ml={0}
                mt={10}
                w="100%"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                
                justifyContent="center"
                alignItems="center"
                
            >
                {products.map((product, index) => (
                    <GridItem
                        key={index}
                        h="350px"
                        w="240px"
                        bg="white"
                        borderRadius={8}
                        boxShadow="lg"
                        p={10}
                        border="1px solid black"
                        mt={10}
                    >
                        <Center>
                            <Image
                                src={product.image}
                                alt={`Product ${index + 1}`}
                                h="180px"
                                w="150px"
                                mt={10}
                                borderRadius={8}
                                marginBottom={20}
                            />
                        </Center>
                        <Box textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={20}>
                        <Text fontSize='2xl' as='b' textAlign="center">{product.name}</Text>
                        <Text fontSize='md' textAlign="center" mt={4}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red' }}>{product.price}</span>
                        </Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
            <Center mt={50}>
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

export default Phukiennb;
