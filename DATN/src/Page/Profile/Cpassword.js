import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Button,
  Heading,
  VStack
} from "@chakra-ui/react";


const LoginForm = () => {
  return (
    <Flex
      width="100%"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      mt={100}
    >
      <Box
        maxWidth="700px"
        padding="90px 60px 75px"
        margin="0 auto"
        bg="white"
        border="1px solid rgba(0,0,0,0.1)"
        borderRadius="md"
      >
        <VStack spacing={4} as="form">
          <Heading as="h2" fontSize={36} marginBottom="30px" mt={-50}>
           Đổi mật khẩu
          </Heading>
          <Text ml={-225} fontWeight={600}>Mật khẩu hiện tại:</Text>
          <Input
          w={374}
          h={40}
            type="text"
            name="username"
            required
            autoFocus
            size="lg"
            marginBottom="-1px"
            borderRadius={5}
            borderBottomRadius="none"
             border="1px solid rgba(0,0,0,0.1)"
          />
          <Text ml={-250} mt={20} fontWeight={600}>Mật khẩu mới:</Text>
          <Input
           w={374}
           h={40}
            type="password"
            name="password"
            required
            size="lg"
            marginBottom="20px"
            borderRadius={5}
            borderTopRadius="none"
            border="1px solid rgba(0,0,0,0.1)"
          />
          <Text ml={-205} fontWeight={600}>Xác nhận mật khẩu:</Text>
          <Input
           w={374}
           h={40}
            type="password"
            name="password"
            required
            size="lg"
            marginBottom="20px"
            borderRadius={5}
            borderTopRadius="none"
             border="1px solid rgba(0,0,0,0.1)"
          />
          <Checkbox name="rememberMe" colorScheme="blue">
            Remember me
          </Checkbox>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            width="full"
            marginTop="30px"
            w={129}
            h={40}
            bg={"blue"}
            color={"white"}
            fontWeight={600}
            borderRadius={5}
          >
            Đổi mật khẩu
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LoginForm;
