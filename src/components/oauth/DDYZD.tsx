import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import * as S from "./style";

const DDYZD = () => {
  const history = useHistory();
  const url = window.location.href;
  const params = new URL(url);
  const { REACT_APP_DDYZD_CLIENT_ID, REACT_APP_DDYZD_SECRET_KEY } = process.env;
  const code = params.searchParams.get("code");
  const getOauthAccessToken = async () => {
    try {
      const { data } = await axios.post(
        "https://developer-api.dsmkr.com/dsmauth/token",
        {
          client_id: REACT_APP_DDYZD_CLIENT_ID,
          client_secret: REACT_APP_DDYZD_SECRET_KEY,
          code,
        }
      );
      await getTokenToServer(data["access-token"]);
    } catch (error) {
      history.push("/signin");
    }
  };
  const getTokenToServer = async (token: string) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/auth`,
        {
          auth_type: "ddyzd",
          token,
        }
      );
      localStorage.setItem("access_token", data.access_token);
      console.log(`access_token: ${data.access_token}`);
      history.push("/");
    } catch (error) {
      history.push("/signin");
    }
  };
  useEffect(() => {
    getOauthAccessToken();
  }, []);
  return (
    <S.Loading>
      <S.CuteCat />
    </S.Loading>
  );
};

export default DDYZD;
