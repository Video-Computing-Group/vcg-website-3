import React from "react";
import styled from "styled-components";

import Logo from "../../images/ucr-logo.png";
import { darkBlue } from "../../styled/colors";

const Banner = () => (
  <Wrapper>
    <img src={Logo} alt="UCR Logo" />
    <Divider />
    <h2>Video Computing Group</h2>
  </Wrapper>
);

export default Banner;

const Wrapper = styled.header`
  height: 100px;
  background: white;
  display: flex;
  align-items: center;
  color: ${darkBlue};
  padding: 18px;

  img {
    height: 3vmax;
  }

  h2 {
    margin: 0;
    font-size: 3vmax;
  }
`;

const Divider = styled.div`
  height: 100%;
  width: 1px;
  background: black;
  margin: 0 18px;
`;
