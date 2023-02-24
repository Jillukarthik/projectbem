import React from "react";
import "./Header.css";
import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
function Header() {
  return (
    <Box className="header">
      <Flex className="header__items">
        <Box className="header header__item">
          <Header as="h1" className="header__title">
            Portfolio
          </Header>
        </Box>
        <ButtonGroup>
          <Button>SignUp</Button>
          <Button>Login</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Header;
