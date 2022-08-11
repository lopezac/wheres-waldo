import styled from "styled-components";

export const MapsDiv = styled.div`
  display: grid;
  justify-items: center;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MapCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
