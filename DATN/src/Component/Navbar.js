import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  Icon,
  Image,
  Popover,
  PopoverBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoIosPhonePortrait, IoIosLaptop, IoIosHeadset } from "react-icons/io";
import { CgAppleWatch } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { ChevronDownIcon } from '@chakra-ui/icons'
const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHistoryClick = () => {
    navigate("./Hproduct"); // Replace with your actual history page path
  };

  const handlePasswordClick = () => {
    navigate("./Cpassword"); // Replace with your actual history page path
  };

  const handleAuthClick = () => {
    navigate("./Auth"); // Replace with your actual history page path
  };


  return (
    <Center>
      <Box
        w="100%"
        bgColor="#fff"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={2000}
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      >
        <Box>
          <Center>
            <Flex w="80%" justifyContent="space-between" alignItems="center" py={2}>
              <Box>
                <Flex>
                  <Box>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS-96bdVmRxd8tlgDYqa47PNS3nJ9CZvNpw&s"
                        alt="Logo"
                        w={60}
                        h={60}
                      />
                    </Link>
                  </Box>
                </Flex>
              </Box>

              <Box w="40%">
                <Flex
                  bg="white"
                  borderRadius="14px"
                  w="100%"
                  h={20}
                  p="5px"
                  textAlign="center"
                  ml={20}
                  alignItems="center"
                >
                  <Input
                    bg="#f5f5f5"
                    ml={20}
                    w="100%"
                    border="none"
                    fontSize="16px"
                    borderRadius="8px"
                    placeholder="Bạn tìm gì..."
                    h={25}
                    mt={-5}
                  />
                  <Icon as={CiSearch} color="#555" fontSize="25px" ml={5} mt={-4} />
                </Flex>
              </Box>

              <Box w="25%">
                <Flex justifyContent="flex-end">
                  <Box ml={10}>
                    <Flex alignItems="center">
                      <Icon as={FaUser} fontSize="24px" color="#555" margin={2} />
                      <Menu>
                        <MenuButton
                          px={4}
                          py={2}
                          transition="all 0.2s"
                          borderRadius="5px"
                          borderWidth="1px"
                          _hover={{ bg: "gray" }}
                          _expanded={{ bg: "blue" }}
                          _focus={{ boxShadow: "outline" }}
                          w={60}
                          h={30}
                      
                        >
                          File <ChevronDownIcon/>
                        </MenuButton>
                        <MenuList>
                     <MenuItem onClick={handleHistoryClick} h={30}>Lịch sử mua hàng</MenuItem>
                          <MenuItem onClick={handlePasswordClick} h={30}>Đổi mật khẩu</MenuItem>
                          <MenuItem onClick={handleAuthClick} h={30}>Đăng nhập</MenuItem>
                        </MenuList>
                      </Menu>
                    </Flex>
                  </Box>
                  <Box ml={10}>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <Flex alignItems="center">
                        <Icon as={BsCart2} fontSize="25px" color="#555" margin={2} />
                        <Heading
                          fontWeight={400}
                          m="2"
                          cursor="pointer"
                          fontSize="18px"
                          color="#555"
                        >
                          Giỏ hàng
                        </Heading>
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Center>
        </Box>

        <Box borderTop="1px solid #ccc" borderBottom="1px solid #ccc" mt={10} mb={2}>
          <Popover>
            <PopoverBody>
              <Flex
                w="100%"
                h="40px"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                m="auto"
              >
                <Link to="/Phone" style={{ textDecoration: "none" }}>
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    mr={35}
                    cursor="pointer"
                    color="#555"
                  >
                    <Icon as={IoIosPhonePortrait} color="#555" fontSize="23px" mb={-5} />
                    iPhone
                  </Heading>
                </Link>
                <Link to="/Mac" style={{ textDecoration: "none" }}>
                  <Heading
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    fontWeight={600}
                    mr={35}
                    cursor="pointer"
                    color="#555"
                  >
                    <Icon as={IoIosLaptop} color="#555" fontSize="23px" mb={-5} />
                    MacBook
                  </Heading>
                </Link>
                <Link to="/AppleWatch" style={{ textDecoration: "none" }}>
                  <Heading
                    fontWeight={600}
                    mr={35}
                    cursor="pointer"
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    color="#555"
                  >
                    <Icon as={CgAppleWatch} color="#555" fontSize="23px" mb={-5} />
                    Apple Watch
                  </Heading>
                </Link>
                <Link to="/Airpod" style={{ textDecoration: "none" }}>
                  <Heading
                    fontWeight={600}
                    mr="35"
                    cursor="pointer"
                    fontSize="16px"
                    _hover={{ fontSize: "18px", transition: "0.3s" }}
                    color="#555"
                  >
                    <Icon as={IoIosHeadset} color="#555" fontSize="23px" mb={-5} />
                    AirPods
                  </Heading>
                </Link>
              </Flex>
            </PopoverBody>
          </Popover>
        </Box>
      </Box>
    </Center>
  );
};

export default Navbar;
