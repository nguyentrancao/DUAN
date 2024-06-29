import { Box, Text, Flex, Image, Center } from "@chakra-ui/react";

const InfoCard = ({ imageUrl, title, description }) => {
  return (
   
    <Box
      mr={-15}
      width="326px"
      height="215px"
      background="white"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.10)"
      borderRadius="6px"
      mx={2} // Adjust as needed for spacing between cards
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Image
        src={imageUrl}
        alt="Placeholder"
        width="70px"
        height="70px"
        mb={4}
      />
      <Text
        color="#424245"
        fontSize="14px"
        fontFamily="Inter"
        fontWeight="700"
        lineHeight="21px"
        textAlign="center"
        wordWrap="break-word"
      >
        {title}
      </Text>
      <Text
        color="#4A5568"
        fontSize="12px"
        fontFamily="Inter"
        fontWeight="400"
        lineHeight="22.50px"
        textAlign="center"
        wordWrap="break-word"
      >
        {description}
      </Text>
    </Box>
    
  );
};

const InfoCardRow = () => {
  const cards = [
    {
      imageUrl: "https://via.placeholder.com/70x70",
      title: "Ship hàng toàn quốc",
      description: "Freeship nội thành TP.HCM",
    },
    {
      imageUrl: "https://via.placeholder.com/70x70",
      title: "Giao hàng nhanh",
      description: "Miễn phí giao hàng nội thành",
    },
    {
      imageUrl: "https://via.placeholder.com/70x70",
      title: "Thanh toán khi nhận hàng",
      description: "Kiểm tra hàng trước khi thanh toán",
    },
    {
      imageUrl: "https://via.placeholder.com/70x70",
      title: "Hỗ trợ khách hàng",
      description: "Tư vấn 24/7",
    },
  ];

  return (
    <Box textAlign="center" w={"100%"}>
      <Text mt={-280} fontSize="36px" fontWeight="bold" mb={10}>
        Dịch vụ của chúng tôi
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={10}
      >
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default InfoCardRow;
