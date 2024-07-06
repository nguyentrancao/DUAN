import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";


const Historybuy = () => {
  return (
    <Flex
      className=" h-[695.33px] relative rounded-md border border-slate-200 flex-col justify-start items-start"
      bg="white"
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      mt={200}
      borderStyle="solid"
      borderColor="#E2E8F0"
      w={"80%"}
      ml={200}
    >
      <Flex
        className="h-[230px] pl-[134.35px] pr-[134.36px] py-6 left-[1.34px] top-[1.33px] absolute bg-gradient-to-b  flex-col justify-center items-center gap-[22px] inline-flex"
        bgGradient="linear(to-b, )"
        color="white"
        rounded="lg"
        shadow="md"

      >
       
      </Flex>
      <Box w="399.38px" h="672.67px" pos="relative" rounded="lg" shadow="md" borderWidth="1px" boxShadow="0 0 10px 1px rgba(0, 0, 0, 0.2)">
    
        <Flex bg="#498FF7" w={368} h={250} pos="absolute" left="1.34px" top="1.33px" flexDirection="column" justify="center" items="center" gap="22px">
        <Flex>
          <Image margin={"auto"} borderRadius={100} mt={20} w="134" h="134" src="https://imagetolink.com/ib/3itW8D1II6.png" alt="Profile" roundedFull />
          </Flex>
          <Text margin={"auto"}   h="8"  color="white"  fontSize="23" fontWeight="bold" lineHeight="loose">
            admin
          </Text>
        </Flex>
        <Box w="250" h="6" pos="absolute" left="65.34px" top="263.33px"  >
          <Text color="gray" fontSize="15.12px" fontWeight="bold" >
            Username:   nhan
          </Text>
        </Box>
        <Box w="250" h="6" pos="absolute" left="65.34px" top="319.33px">
          <Text color="gray" fontSize="15px" fontWeight="bold">
            Đường:  sadasd
          </Text>
        </Box>
        <Box w="250" h="6" pos="absolute" left="65.34px" top="375.33px">
          <Text color="gray.700" fontSize="sm" fontWeight="bold">
            Địa chỉ:  sadasdas
          </Text>
        </Box>
        <Box w="250" h="6" pos="absolute" left="65.34px" top="431.33px" color="gray" fontSize="base" fontWeight="bold">
          Quận huyện: fmwekf
        </Box>
        <Box w="250" h="6" pos="absolute" left="65.34px" top="487.33px" color="gray" fontSize="base" fontWeight="bold">
          Tỉnh thành: ừef
        </Box>
        <Box w="250" h="6" pos="absolute" left="65.34px" top="543.33px">
          <Text color="gray.700" fontSize="base" fontWeight="bold">
            Phone:  321312123
          </Text>
        </Box>
        <Box w="250"h="6" pos="absolute" left="65.34px" top="599.33px">
          <Text color="gray.700" fontSize="base" fontWeight="bold">
            Email:321312123
          </Text>
        </Box>
      </Box>
      
      <Box mt={50} w="1060px" h="193.17px" pos="relative" borderWidth="1px" borderColor="slate" borderStyle="solid" >
        <Box w="930.42px" h="11" pos="absolute" left="11.33px" top="11.33px" >
            <Text mt={-55} fontSize={32} color={"black"}>Đơn Mua</Text>
          <Box w="430x" fontSize={32} color={"black"} px="2" pt="3" pb="2" pos="absolute" left="0" top="0" justify="center" items="end" flexDirection="row">
            <Text w="412.41px" h="6" color="gray.900" fontSize="15.12px" fontWeight="bold">
              Mã giao dịch: 2f2e6e40-f2f7-11ee-a54f-6d3df28ceb25
            </Text>
            <Box w="4" h="4" pos="relative" flexDir="column" justify="start" items="start" />
          </Box>
          <Box  w="226.63px" h="27.17px" pl="1" pr="3.80px" pb="0.17px" pos="absolute" left="448.21px" top="13px" bg="green" rounded="sm" justify="center" items="center" flexDirection="row">
            <Text w="250px" h="27px" color="black" fontSize="17.02px" fontWeight="semibold" textTransform="uppercase">
              Phương thức: Banking
            </Text>
          </Box>
          <Box w="251.58px" h="27.17px" pl="1" pr="3.80px" pb="0.17px" pos="absolute" left="678.84px" top="13px" bg="yellow" rounded="sm" justify="center" items="center" flexDirection="row">
            <Text w="243.78px" h="27px" color="black" fontSize="lg" fontWeight="semibold" textTransform="uppercase">
              Trạng thái: Đợi xác nhận
            </Text>
          </Box>
         </Box>
        <Text mt={-10} w="300px" h="22.50px" pos="absolute" left="15.33px" top="54.08px" color="black" opacity="0.80" fontSize="sm" fontWeight="medium" lineHeight="snug">
          Ngày đặt hàng: 09:49:55 5/4/2024
        </Text>
        <Box w="191.73px" h="27px" pos="absolute" left="15.33px" top="93.83px" justify="center" items="center" flexDirection="row">
          <Text mt={20} w="191.93px" h="27px" color="red.600" fontSize="base" fontWeight="semibold" lineHeight="27px">
            Thành Tiền: 6.741.000 ₫
          </Text>
        </Box>
        <Box w="94.50px" h="10" pl="4" pr="15.80px" pt="10.12px" pb="10.67px" pos="absolute" left="11.33px" top="136.83px" bg="red.500" rounded="md" justify="center" items="center" flexDirection="row">
          <Text w="62.70px" h="19.20px" textAlign="center" color="white" fontSize="base" fontWeight="semibold" lineHeight="tight">
            Hủy đơn
          </Text>
        </Box>
      </Box>
     
    </Flex>
    
  );
};

export default Historybuy;
