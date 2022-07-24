import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", textAlign: "center", marginTop: "-50px" }}>
       Um portal de Pokedex para geeks
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://github.com/gideony">
              <i className="Github">
                <span style={{ marginLeft: "10px" }}>Github</span>
              </i>
            </FooterLink>
            <FooterLink href="https://instagram.com/gideony">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/gideonyewerton/">
              <i className="LinkedIn">
                <span style={{ marginLeft: "10px" }}>LinkedIn</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Criado por:</Heading>
            <FooterLink href="#">Gideony Ewerton</FooterLink>
          </Column>
          
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
