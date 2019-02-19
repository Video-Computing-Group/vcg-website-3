import React from "react";
import styled from "styled-components";

import { secondaryText } from "../../styled/colors";

const Footer = () => (
  <FooterContainer>
    <p>Department of Electrical and Computer Engineering</p>
    <p>© {new Date().getFullYear()} University of California, Riverside</p>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  background: #f5f5f5;
  text-align: center;
  padding: 12px;
  border-top: 1px solid black;
  color: ${secondaryText};

  p {
    margin: 0;
  }
`;
