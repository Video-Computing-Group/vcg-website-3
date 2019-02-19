import React from "react";
import styled from "styled-components";

import { yellow } from "../../styled/colors";

import Image1 from "../../images/cover-photos/amitrc_cover1.png";
import Image2 from "../../images/cover-photos/amitrc_cover2.png";
import Image3 from "../../images/cover-photos/amitrc_cover3.png";
import Image4 from "../../images/cover-photos/amitrc_cover4.png";

const PhotoBanner = () => (
  <PhotoBannerWrapper>
    <img src={Image1} alt="Cover Photo" />
    <img src={Image2} alt="Cover Photo" />
    <img src={Image3} alt="Cover Photo" />
    <img src={Image4} alt="Cover Photo" />
  </PhotoBannerWrapper>
);

export default PhotoBanner;

const PhotoBannerWrapper = styled.div`
  border-top: 5px solid ${yellow};
  border-bottom: 5px solid ${yellow};
  display: flex;

  img {
    flex: 1;
  }
`;
