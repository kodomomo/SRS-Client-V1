import styled from "styled-components";
import { loading } from "../../../statics/image/main";

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CuteCat = styled.div`
  background-image: url(${loading});
  width: 150px;
  height: 150px;
  background-size: 100% 100%;
`;
