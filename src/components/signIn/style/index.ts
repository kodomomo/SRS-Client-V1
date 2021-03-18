import styled from "styled-components";
import { loading_bar } from "../../../statics/image/main";
export const SignIn = styled.div`
  width: 100%;
  height: 100vh;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  > div {
    transform: translate(0px, -100px);
  }
`;

export const SignInBar = styled.div`
  > div {
    width: 15px;
    height: 1px;
    background-color: black;
    margin-bottom: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const SignInTitle = styled.h1<{ marginBottom: number }>`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const SignInSubTitle = styled.h3`
  font-size: 15px;
  font-weight: 100;
  text-align: center;
`;

export const SignInServiceTitle = styled.h1`
  font-size: 31px;
  text-align: center;
  font-weight: 600;
`;

export const SignInServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SignInServiceSubTitle = styled.div`
  font-size: 16px;
  color: #7d7d7d;
  font-weight: 100;
  margin-bottom: 5px;
`;

export const SignInInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background-color: #f6f6f6;
  color: #7d7d7d;
  padding: 0px 10px;
  box-sizing: border-box;
  margin: 5px 0px;
`;

export const SignInButton = styled.button`
  color: white;
  background-color: #2e2e2e;
  font-size: 16px;
  width: 100%;
  border: none;
  height: 50px;
  margin: 15px 0px;
  border-radius: 6px;
`;

export const SignInLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 90%;
`;

export const SignInLoadingAnimation = styled.div`
  background-image: url(${loading_bar});
  width: 150px;
  height: 100px;
  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: center center;
`;
