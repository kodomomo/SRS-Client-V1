import styled, { css } from "styled-components";
import { logo, banner, loading } from "../../../statics/image/main";

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

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 40px;
  box-sizing: border-box;
  background-color: white;
`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const MainHeaderUser = styled.div`
  margin-bottom: 5px;
  display: flex;
  > p {
    font-size: 18px;
    font-weight: 100;
  }
  > button {
    font-size: 18px;
    background-color: white;
    border: none;
    outline: none;
    margin-left: 10px;
    padding: 0px;
  }
`;

export const MainNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const MainTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

export const MainBookedRoom = styled.p`
  font-size: 16px;
  font-weight: 100;
`;

export const MainInfoBox = styled.div`
  width: 100%;
  height: 120px;
  padding: 15px 25px 15px 25px;
  box-sizing: border-box;
  display: flex;
  background-image: url(${banner});
  background-size: 100%;
  background-position: center;
  margin-bottom: 30px;
`;

export const MainRoomListWrapper = styled.div`
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
  > h5 {
    font-size: 21px;
    margin-bottom: 15px;
    > span {
      font-size: 18px;
    }
  }
`;

export const MainRoomList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 25px;
`;

export const MainRoomListItem = styled.li<{
  booked?: boolean;
  selected: boolean;
}>`
  margin: 0px 5px;
  width: 85px;
  height: 45px;
  font-size: 16px;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  ${({ booked }) =>
    booked
      ? css`
          background-color: #2e2e2e;
        `
      : css`
          background-color: #f6f6f6;
        `}
  ${({ selected }) =>
    selected
      ? css`
          background-color: #2e2e2e;
          color: white;
        `
      : css``}
`;

export const MainMyReservation = styled.div<{ onReservation: boolean }>`
  width: 75px;
  height: 45px;
  margin: 7px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    margin: auto auto;
    > p {
      text-align: center;
    }
  }
  ${({ onReservation }) =>
    onReservation
      ? css`
          background-color: #2e2e2e;
          color: white;
        `
      : css`
          background-color: #f6f6f6;
          color: #7d7d7d;
        `}
`;

export const MainMyreservationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
