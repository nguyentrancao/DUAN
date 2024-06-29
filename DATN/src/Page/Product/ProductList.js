import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ProductList = () => {
    return (
        <Center>
            <Box p={4} borderRadius={8} w="100%">
                <Box display="flex" alignItems="center" mt={20}> <Text fontSize={40} as='b' mr={4}>Danh Mục</Text> </Box>
                {/* <Grid
                    ml={20}
                    mt={70}
                    w={"100%"}
                    h="400px"
                    templateRows="repeat(5, 1fr)" // Đổi 10fr thành 1fr để phân bố đều các hàng
                    templateColumns="repeat(6, 1fr)"
                    gap={4}
                    justifyContent="center" // Căn giữa theo chiều ngang
                    alignItems="center" // Căn giữa theo chiều dọc
                > */}
                    {/* Bao bọc toàn bộ GridItem bởi một Grid */}
                    <Grid
                        templateColumns="repeat(6, 1fr)" // Số lượng cột bằng số lượng cột của Grid cha
                        gap={30} // Khoảng cách giữa các ô sản phẩm
                        w="80%" // Chiều rộng bằng 100%
                    >

                        <Box>
                            <GridItem
                                mr={2}
                                h={180}
                                w={180} // Đổi 'PX' thành 'px'
                                rowSpan={1}
                                colSpan={1}
                                bg="white"
                                borderRadius="50%"
                                Center // Xóa Center và thêm style justifyContent và alignItems
                            >
                                <Center>
                                    <Image
                                        src="https://www.ipopularshop.com/cdn/shop/products/1_04c83235-33a4-49cd-9f1e-1c611b986fd2.jpg?v=1669603425&width=1445"
                                        alt="Dan Abramov"
                                        h={180}
                                        w={180} // Đổi {"100%"} thành "100%"
                                        borderRadius="50%"
                                        marginBottom={20}

                                    />

                                </Center>
                            </GridItem>
                            <Text fontSize={20}>Bàn Phím</Text>
                        </Box>
                        <Box>
                            <GridItem
                                mr={2}
                                h={180}
                                w={180} // Đổi 'PX' thành 'px'
                                rowSpan={1}
                                colSpan={1}
                                bg="white"
                                borderRadius="50%"
                                Center // Xóa Center và thêm style justifyContent và alignItems
                            >
                                <Center>
                                    <Image
                                        src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png"
                                        alt="Dan Abramov"
                                        h={180}
                                        w={180} // Đổi {"100%"} thành "100%"
                                        borderRadius="50%"
                                        marginBottom={20}

                                    />

                                </Center>
                            </GridItem>
                            <Text fontSize={20}>MacBook</Text>
                        </Box>
                        <Box>
                            <GridItem
                                mr={2}
                                h={180}
                                w={180} // Đổi 'PX' thành 'px'
                                rowSpan={1}
                                colSpan={1}
                                bg="white"
                                borderRadius="50%"
                                Center // Xóa Center và thêm style justifyContent và alignItems
                            >
                                <Center>
                                    <Image
                                        src="https://wklife.vn/wp-content/uploads/iCon-Cap-Sac.webp"
                                        alt="Dan Abramov"
                                        h={180}
                                        w={180} // Đổi {"100%"} thành "100%"
                                        borderRadius="50%"
                                        marginBottom={20}

                                    />

                                </Center>
                            </GridItem>
                            <Text fontSize={20}>Cáp Sạc </Text>
                        </Box>
                        <Box>
                            <GridItem
                                mr={2}
                                h={180}
                                w={180} // Đổi 'PX' thành 'px'
                                rowSpan={1}
                                colSpan={1}
                                bg="white"
                                borderRadius="50%"
                                Center // Xóa Center và thêm style justifyContent và alignItems
                            >
                                <Center>
                                    <Image
                                        src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Loa-128x128.png"
                                        alt="Dan Abramov"
                                        h={180}
                                        w={180} // Đổi {"100%"} thành "100%"
                                        borderRadius="50%"
                                        marginBottom={20}

                                    />

                                </Center>
                            </GridItem>
                            <Text fontSize={20}>Loa Bluetooth</Text>
                        </Box>
                        <Box>
                            <GridItem
                                mr={2}
                                h={180}
                                w={180} // Đổi 'PX' thành 'px'
                                rowSpan={1}
                                colSpan={1}
                                bg="white"
                                borderRadius="50%"
                                Center // Xóa Center và thêm style justifyContent và alignItems
                            >
                                <Center>
                                    <Image
                                        src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-moi-128x129.png"
                                        alt="Dan Abramov"
                                        h={180}
                                        w={180} // Đổi {"100%"} thành "100%"
                                        borderRadius="50%"
                                        marginBottom={20}

                                    />

                                </Center>
                            </GridItem>
                            <Text fontSize={20}>Apple Watch</Text>
                        </Box>
                        <Box>
                            <GridItem
                                mr={2}
                                h={180}
                                w={180} // Đổi 'PX' thành 'px'
                                rowSpan={1}
                                colSpan={1}
                                bg="white"
                                borderRadius="50%"
                                Center // Xóa Center và thêm style justifyContent và alignItems
                            >
                                <Center>
                                    <Image
                                        src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/dien-thoai-doc-quyen-128x128.png"
                                        alt="Dan Abramov"
                                        h={180}
                                        w={180} // Đổi {"100%"} thành "100%"
                                        borderRadius="50%"
                                        marginBottom={20}

                                    />

                                </Center>
                            </GridItem>
                            <Text fontSize={20}>Iphone</Text>
                        </Box>



                        {/* Các GridItem khác */}
                    </Grid>
                {/* </Grid> */}
            </Box>

        </Center>


    );
};

export default ProductList;
