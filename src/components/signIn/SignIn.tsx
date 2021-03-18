import React, { useState } from "react";
import * as S from "./style";

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const loginButtonClickHandler = () => {
    setLoading(true);
    const { REACT_APP_DDYZD_CLIENT_ID, REACT_APP_SERVICE_URL } = process.env;
    window.location.href = `https://developer.dsmkr.com/external/login?redirect_url=${REACT_APP_SERVICE_URL}/oauth/ddyzd&client_id=${REACT_APP_DDYZD_CLIENT_ID}`;
  };
  return (
    <S.SignIn>
      <div>
        <S.SignInBar>
          <div />
        </S.SignInBar>
        <S.SignInSubTitle>대덕소프트웨어마이스터고등학교</S.SignInSubTitle>
        <S.SignInTitle marginBottom={100}>세미나실 예약 서비스</S.SignInTitle>
        <S.SignInButton onClick={loginButtonClickHandler}>
          DDYZD로 로그인
        </S.SignInButton>
        {loading ? (
          <S.SignInLoading>
            <S.SignInLoadingAnimation />
          </S.SignInLoading>
        ) : (
          ""
        )}
      </div>
    </S.SignIn>
  );
};

export default SignIn;
