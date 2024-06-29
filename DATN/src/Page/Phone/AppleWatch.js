import { Box, Button, Flex, Text, Image, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdVisibility } from "react-icons/md"; // Import icon từ thư viện react-icons

const AppleWatchProduct = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null); // Bấm lại để huỷ bỏ
    } else {
      setClickedIndex(index); // Bấm để đánh dấu đã chọn
    }
  };

  return (
    <div>
      {/* Banner */}
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <Image
            src="https://cdn.tgdd.vn/2023/09/banner/1200x150-tgdd-1200x150-1.png"
            alt="Banner"
            width="979px"
            height="300px"
            objectFit="cover"
          />
        </Box>
      </Flex>

      <br />

      {/* Filter and Product Section */}
      <Box width="80%" margin="auto">
        <Flex justifyContent="space-between" alignItems="center">
          {/* Buttons */}
          <Flex gap="1rem">
            <Button
              borderRadius="5px"
              colorScheme="teal"
              variant="outline"
              width="100px"
              height="50px"
              _hover={{ transform: "scale(1.05)" }}
            >
              16GB
            </Button>
            <Button
              borderRadius="5px"
              colorScheme="teal"
              variant="outline"
              width="100px"
              height="50px"
              _hover={{ transform: "scale(1.05)" }}
            >
              64GB
            </Button>
            <Button
              borderRadius="5px"
              colorScheme="teal"
              variant="outline"
              width="100px"
              height="50px"
              _hover={{ transform: "scale(1.05)" }}
            >
              128GB
            </Button>
            <Button
              borderRadius="5px"
              colorScheme="teal"
              variant="outline"
              width="100px"
              height="50px"
              _hover={{ transform: "scale(1.05)" }}
            >
              1TB
            </Button>
          </Flex>

          {/* Select Dropdown */}
          <Select
            placeholder="Hiển thị tất cả sản phẩm"
            width="250px"
            height="50px"
            borderColor="#e2e8f0"
            borderRight="6px"
            color="#1a202c"
            fontSize="16px"
            fontWeight="bold"
          >
            <option value="all">Tất cả sản phẩm</option>
            <option value="low-high">Sản phẩm rẻ nhất</option>
            <option value="high-low">Sản phẩm đắt nhất</option>
            <option value="discount">Sản phẩm giảm giá</option>
          </Select>
        </Flex>

        <br />

        {/* Products */}
        <Flex flexWrap="wrap" justifyContent="flex-start">
          {Array.from({ length: 12 }).map((_, index) => (
            <Box
              key={index}
              borderWidth="1px"
              border="1px solid #cccccc"
              borderRadius="4px"
              overflow="hidden"
              flexBasis="calc(25% - 20px)"
              margin="0 10px 20px 0"
              padding="1rem"
              boxShadow={
                (hoveredIndex === index || clickedIndex === index) &&
                "0 0 10px rgba(0, 0, 0, 0.2)"
              }
              transition="box-shadow 0.3s"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              width="calc(25% - 20px)"
              marginRight="20px"
              marginBottom="20px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center" // căn giữa theo chiều ngang
            >
              <Link to={`/product/${index}`}>
                <Image
                  src="https://cdn.phuckhangmobile.com/image/apple-watch-series-6-vang-900-21196j.jpg"
                  alt="Product Image"
                  marginBottom="1rem"
                  _hover={{ transform: "translateY(-5px)" }}
                  transition="all 0.3s"
                  borderRadius="md"
                  width="100%" // Thiết lập chiều rộng là 200px
                  height="100%" // Thiết lập chiều cao là 200px
                />
              </Link>
              <Text fontSize="20px" fontWeight="bold" color="#000">
                Apple Watch Series 6
              </Text>
              <Text
                fontSize="18px"
                color="#0000007a"
                textDecoration="line-through"
              >
                Giá cũ: 1,200,000 VND
              </Text>
              <Text fontSize="16px" color="#f00" fontWeight="900">
                Giá mới: 1,000,000 VND
              </Text>
              <Text fontSize="14px" color="#ffa500" fontWeight="900">
                ★★★★☆
              </Text>
              <Link to={`/product/${index}`}>
                <Button
                  borderRadius="6px"
                  colorScheme="red"
                  width="100px"
                  height="40px"
                  marginTop="1rem"
                  _hover={{ transform: "scale(1.05)" }}
                  fontSize="16px"
                >
                  Mua hàng
                </Button>
              </Link>
            </Box>
          ))}
        </Flex>

        <br />

        {/* Load More Button */}
        <Flex justifyContent="center">
          <Button
            fontWeight="600"
            borderRadius="6px"
            borderColor="#2b6cb0"
            className="load-more-button"
            colorScheme="teal"
            width="100px"
            height="40px"
            margin="10px"
            borderWidth="1px"
            fontSize="16px" // Font size lớn hơn
            _hover={{
              bg: "white",
              color: "#2b6cb0",
              borderColor: "#2b6cb0",
            }}
          >
            Xem thêm
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default AppleWatchProduct;
