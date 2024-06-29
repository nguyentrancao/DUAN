import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ProductTop = () => {
  return (
    <Center>
      <Box bg="#000000" borderRadius={8} w="100%" mt={200} h={960}>
        <Box h={50} w="100%">
          <Image
            src="https://cdn.tgdd.vn/2023/11/campaign/GIF-BF-DESK-1200x120.gif"
            alt="Campaign"
            h="auto"
            w="100%"
            borderTopRadius={8}
            marginBottom={20}
          />
        </Box>

        <Grid
          mt={165}
          marginBottom={10}
          ml={13}
          w="98%"
          h={"810"}
          templateColumns="repeat(5, 1fr)"
          gap={5}
          mr={10}
        >
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Link to="/detail" style={{ textDecoration: "none" }}>
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
            </Link>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
          <GridItem
            mr={2}
            h="400px"
            w="100%"
            rowSpan={1}
            colSpan={1}
            bg="white"
            borderRadius={8}
            mt={-70}
          >
            <Center>
              <Image
                src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                alt="Samsung Galaxy"
                h="180px"
                w="65%"
                mt={10}
                borderTopRadius={8}
                marginBottom={20}
              />
            </Center>
            <Flex ml={30} mt={20}>
              <Text fontSize="18" as="b">
                HP Gaming VICTUS 16 r0128TX i5 13450HX
              </Text>
            </Flex>
            <Box mt={20} ml={30} fontSize={18}>
            <Flex fontSize="md">
              <Box>Giá mới: </Box>
              <Box
                style={{ fontSize: "18px", color: "red", marginLeft: "5px" }}
              >
                50000000
              </Box>
            </Flex>
            <Flex >
              <Text>Giá gốc: </Text>
              <Text
                style={{ fontSize: "18px", marginLeft: "5px" }}
                textDecoration="line-through"
              >
                50000000
              </Text>
            </Flex>
            <Flex>
              <Text>Giảm giá:</Text>
              <Text bg="yellow" ml={5}>
                -15%
              </Text>
            </Flex>
            </Box>
          </GridItem>
        
          {/* Các GridItem khác tương tự, bạn có thể thêm nội dung cho từng sản phẩm tại đây */}
        </Grid>
      </Box>
    </Center>
  );
};

export default ProductTop;
