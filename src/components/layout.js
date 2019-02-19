import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { background, primaryText } from "../styled/colors";

const Layout = ({ children }) => (
  <LayoutContainer>
    <Wrapper>
      <Header />

      <ContentWrapper>{children}</ContentWrapper>

      <Footer />
    </Wrapper>
  </LayoutContainer>
);

export default Layout;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem;

  @media (max-width: 500px) {
    width: 100vw;
    padding: 0;
  }
`;

const LayoutContainer = styled.div`
  background: ${background};
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  background: #f8fafc;
  padding: 30px 5vw;
  color: ${primaryText};
`;
