import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { CiMoneyBill, CiCreditCard1 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      width="100%"
      mt={100}
      height="400px"
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <TextItems />
      <Flex
        flex="1"
        justifyContent="space-between"
        alignItems="flex-end"
        width="100%"
        mt={50}
      >
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          width="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          
          >
            <Text
              color="#1A202C"
              fontSize="14.88px"
              fontWeight="700"
              mb="10px"
              ml={120}
              mt="-30px" // Adjusted margin-top to -30px
            >
              Phương thức thanh toán
            </Text>
            <PaymentMethods />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
           
          >
            <Text color="#1A202C" fontSize="14.88px" fontWeight="700" mb="10px" mt="-30px"> {/* Adjusted margin-top to -30px */}
              Danh sách các ngân hàng thanh toán online
            </Text>
            <Image
              mr="300"
              width="800px"
              height="60.49px"
              src="https://shopfront-cdn.tekoapis.com/static/vnpay_banks.png"
              alt="Bank logos"
            

            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const TextItems = () => {
  const textData = [
    { text: "Danh mục", fontSize: "17.44px", fontWeight: "700" },
    { text: "Về chúng tôi", fontSize: "17.58px", fontWeight: "700" },
    { text: "Hỗ trợ khách hàng", fontSize: "17.72px", fontWeight: "700" },
    { text: "Chính sách mua hàng", fontSize: "17.16px", fontWeight: "700" },
    { text: "Blog", fontSize: "14.30px", fontWeight: "400" },
    { text: "Giới thiệu về chúng tôi", fontSize: "14.30px", fontWeight: "400" },
    { text: "Thẻ ưu đãi", fontSize: "14.30px", fontWeight: "400" },
    {
      text: "Điều kiện giao dịch chung",
      fontSize: "14.30px",
      fontWeight: "400",
    },
    { text: "Điện Thoại", fontSize: "14.30px", fontWeight: "400" },
    { text: "Hệ thống cửa hàng", fontSize: "14.30px", fontWeight: "400" },
    { text: "Hướng dẫn mua online", fontSize: "14.30px", fontWeight: "400" },
    { text: "Chính sách bảo hành", fontSize: "14.30px", fontWeight: "400" },
    { text: "Laptop", fontSize: "14.30px", fontWeight: "400" },
    { text: "Trung tâm bảo hành", fontSize: "14.30px", fontWeight: "400" },
    {
      text: "Ưu đãi dành cho danh nghiệp",
      fontSize: "14.30px",
      fontWeight: "400",
    },
    { text: "Chính sách đổi trả", fontSize: "14.30px", fontWeight: "400" },
    { text: "Tablet", fontSize: "14.30px", fontWeight: "400" },
    { text: "Tin công nghệ", fontSize: "14.30px", fontWeight: "400" },
    { text: "Chích sách trả góp", fontSize: "14.30px", fontWeight: "400" },
    { text: "Chính sách thanh toán", fontSize: "14.30px", fontWeight: "400" },
    { text: "Smartwatch", fontSize: "14.30px", fontWeight: "400" },
    { text: "Hỏi đáp", fontSize: "14.30px", fontWeight: "400" },
    { text: "Dịch vụ sửa chữa", fontSize: "14.30px", fontWeight: "400" },
    {
      text: "Giao hành và lắp đặt tại nhà",
      fontSize: "14.30px",
      fontWeight: "400",
    },
    // Add more text items here
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
      {textData.map((item, index) => (
        <Text
          key={index}
          width="calc(25% - 10px)"
          mb="10px"
          color="#1A202C"
          fontSize={item.fontSize}
          fontWeight={item.fontWeight}
          textAlign="center"
        >
          {item.text}
        </Text>
      ))}
    </Flex>
  );
};

const PaymentMethods = () => {
  const methods = [
    { icon: CiMoneyBill, label: "Tiền mặt" },
    { icon: FaRegClock, label: "Trả góp" },
    { icon: CiCreditCard1, label: "Banking" },
  ];

  return (
    <Flex justifyContent="center" gap="40px" width="100%" mr={150}>
      {methods.map((method, index) => (
        <Flex
          key={index}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <method.icon size="40px" />
          </Box>
          <Text
            width="100%"
            color="#1A202C"
            fontSize="14.88px"
            fontWeight="400"
            textAlign="center"
          >
            {method.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Footer;
