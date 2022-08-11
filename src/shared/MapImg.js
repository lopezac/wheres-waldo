import styled from "styled-components";

export const MapImgCard = styled.img`
  width: 390px;
  ${"" /* height: 390px; */}

  @media (max-width: 1200px) {
    width: 450px;
    ${"" /* height: 450px; */}
  }

  @media (max-width: 992px) {
    width: 370px;
    ${"" /* height: 370px; */}
  }

  @media (max-width: 768px) {
    width: 550px;
    ${"" /* height: 550px; */}
  }

  @media (max-width: 576px) {
    width: 400px;
    ${"" /* height: 400px; */}
  }

  @media (max-width: 320px) {
    width: 300px;
    ${"" /* height: 300px; */}
  }
`;

export const MapGameImg = styled.img`
  width: 500px;
  height: 500px;

  @media (min-width: 576px) {
    width: 570px;
    height: 570px;
  }

  @media (min-width: 768px) {
    width: 750px;
    height: 750px;
  }

  @media (min-width: 992px) {
    width: 950px;
    height: 950px;
  }

  @media (min-width: 1200px) {
    width: 1150px;
    height: 900px;
  }
`;

export const MapImgIcon = styled.img`
  width: 70px;
  height: 70px;
`;
