import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  Center,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  AiOutlineCreditCard,
  AiOutlineHome,
  AiOutlineDelete,
  AiOutlineClose, // Import icon for close button
} from "react-icons/ai";

const Payment = () => {
  const [isAddressFormVisible, setAddressFormVisible] = useState(false);

  const openAddressForm = () => setAddressFormVisible(true);
  const closeAddressForm = () => setAddressFormVisible(false);

  return (
    <Center minH="170vh" bg="#f5f5f5" py={6}>
      <Box
        w="800px"
        p={6}
        bg="white"
        borderRadius="8px"
        boxShadow="md"
        position="relative"
      >
        <Heading mb={6} textAlign="center">
          <Text fontSize="32px" as="b">
            Đặt hàng
          </Text>
        </Heading>

        {/* Địa chỉ nhận hàng */}
        <Box
          mb={2}
          p={4}
          border="1px solid #d3d3d3"
          borderRadius="8px"
          position="relative"
        >
          <Flex justify="space-between" align="center" mb={2}>
            <Flex align="center">
              <Icon as={AiOutlineHome} mr={2} />
              <Text fontSize="20px" fontWeight="700">
                Địa chỉ nhận hàng
              </Text>
            </Flex>
            <Input
              placeholder="Nhập địa chỉ nhận hàng"
              fontWeight="600"
              h="30px"
              borderRadius="6px"
              w="60%"
              onClick={openAddressForm}
            />
          </Flex>

          {isAddressFormVisible && (
            <Box
              position="absolute"
              top="0"
              right="0"
              width="450px"
              bg="white"
              border="1px solid #d3d3d3"
              borderRadius="8px"
              p={4}
              boxShadow="lg"
              zIndex="10"
            >
              {/* Close button */}
              <Icon
                as={AiOutlineClose}
                position="absolute"
                top="5px"
                right="5px"
                cursor="pointer"
                onClick={closeAddressForm}
              />

              <FormControl mb={2}>
                <FormLabel>Họ và tên</FormLabel>
                <Input placeholder="Họ và tên" h="30px" borderRadius="6px" />
              </FormControl>
              <FormControl mb={2}>
                <FormLabel>Địa chỉ cụ thể</FormLabel>
                <Input
                  placeholder="Địa chỉ cụ thể"
                  h="30px"
                  borderRadius="6px"
                />
              </FormControl>
              <FormControl mb={2}>
                <FormLabel>Quận/Huyện</FormLabel>
                <Select
                  placeholder="Chọn Quận/Huyện"
                  h="30px"
                  borderRadius="6px"
                >
                  <option value="district1">Quận 1</option>
                  <option value="district2">Quận 2</option>
                  {/* Thêm các Quận/Huyện khác nếu cần */}
                </Select>
              </FormControl>
              <FormControl mb={2}>
                <FormLabel>Thành phố</FormLabel>
                <Select
                  placeholder="Chọn thành phố"
                  h="30px"
                  borderRadius="6px"
                >
                  <option value="hanoi">Hà Nội</option>
                  <option value="hcm">TP. Hồ Chí Minh</option>
                  {/* Thêm các thành phố khác nếu cần */}
                </Select>
              </FormControl>
              <FormControl mb={2}>
                <FormLabel>Số điện thoại</FormLabel>
                <Input
                  type="tel"
                  placeholder="Số điện thoại"
                  h="30px"
                  borderRadius="6px"
                />
              </FormControl>
              <Flex justify="flex-end" mt={4}>
                <Button
                  colorScheme="teal"
                  onClick={closeAddressForm}
                  mr={4}
                  background="#3182ce"
                  borderRadius="6px"
                  color="#fff"
                  fontWeight="600"
                  fontSize="15"
                >
                  Lưu
                </Button>
                <Button
                  colorScheme="red"
                  onClick={closeAddressForm}
                  borderRadius="6px"
                  fontWeight="600"
                  fontSize="15"
                  background="#eceff1"
                  color="#2b6cb0"
                >
                  Cancel
                </Button>
              </Flex>
            </Box>
          )}
        </Box>

        {/* Giỏ hàng */}
        <Box mb={2} p={4} border="1px solid #d3d3d3" borderRadius="8px">
          <Heading as="h2" size="md" mb={2} fontWeight="600">
            Giỏ hàng (1 sản phẩm)
          </Heading>
          <Flex justify="space-between" align="center" mb={2}>
            <Flex align="center">
              <Box w="100px" h="100px" mr={4} borderRadius="8px">
                <Image
                  src="https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg"
                  alt="Sản phẩm"
                  w="100%"
                  h="100%"
                  borderRadius="8px"
                  objectFit="cover"
                />
              </Box>
              <Icon as={AiOutlineDelete} color="red" cursor="pointer" />
            </Flex>
            <VStack align="flex-end">
              <Text fontWeight="550" fontSize="15">
                Iphone 15 Pro
              </Text>
              <Text color="#808080">Màu: Đỏ</Text>
              <Flex align="center">
                <Text
                  color="
#f00"
                >
                  Giá: 500,000 VND
                </Text>
                <Text ml={2} textDecoration="line-through">
                  600,000 VND
                </Text>
              </Flex>
              <Flex>
                <Button>-</Button>
                <Text mx={2}>1</Text>
                <Button>+</Button>
              </Flex>
            </VStack>
          </Flex>
        </Box>

        {/* Phương thức thanh toán */}
        <Box mb={2} p={4} border="1px solid #d3d3d3" borderRadius="8px">
          <Text fontSize="20px" mb={2} color="#1a202c" fontWeight="700">
            Chọn phương thức thanh toán
          </Text>
          <Flex justify="space-between">
            <Button leftIcon={<Icon as={AiOutlineCreditCard} />} w="48%">
              <Text fontSize="14px" color="">
                Thanh toán khi nhận hàng
              </Text>
            </Button>
            <Button leftIcon={<Icon as={AiOutlineCreditCard} />} w="48%">
              <Text fontSize="14px">Thanh toán qua ví VNpay</Text>
            </Button>
          </Flex>
        </Box>

        {/* Mã giảm giá */}
        <Box mb={2} p={4} border="1px solid #d3d3d3" borderRadius="8px">
          <FormControl mb={2}>
            <FormLabel>Nhập mã giảm giá</FormLabel>
            <Flex>
              <Input
                placeholder="Mã giảm giá"
                h="30px"
                borderRadius="6px"
                w="70%"
              />
              <Button
                ml={2}
                colorScheme="teal"
                fontWeight="400"
                borderRadius="5"
                background="#3681f0"
                borderColor="#3681f0"
                color="#fff"
              >
                Áp dụng
              </Button>
            </Flex>
          </FormControl>
        </Box>

        {/* Tính toán */}
        <Box mb={2} p={4} border="1px solid #d3d3d3" borderRadius="8px">
          <Flex justify="space-between">
            <Text color="#808080" fontWeight="500" fontSize="12">
              Tạm tính:
            </Text>
            <Text>500,000 VND</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontWeight="500" color="#808080" fontSize="12">
              Giảm giá:
            </Text>
            <Text
              fontWeight="500"
              color="
#f00"
            >
              50,000 VND
            </Text>
          </Flex>
          <Flex justify="space-between" fontWeight="bold">
            <Text>Tổng tiền:</Text>
            <Text
              fontWeight="500"
              color="
#f00"
            >
              450,000 VND
            </Text>
          </Flex>
        </Box>

        {/* Button hành động */}
        <Flex justify="space-between" mt={4}>
          <Button
            fontWeight="600"
            borderRadius="10px"
            colorScheme="teal"
            w="48%"
            h="40px"
            background="#ff2323"
            borderColor="#ff2323"
            color="#fff"
          >
            Đặt hàng
          </Button>
          <Link to="/">
            <Button
              w="400px"
              h="40px"
              color="#ff2323"
              borderRadius="10px"
              borderColor="#ff2323"
              fontWeight="600"
            >
              Chọn sản phẩm khác
            </Button>
          </Link>
        </Flex>
      </Box>
    </Center>
  );
};

export default Payment;
