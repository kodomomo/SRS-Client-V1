import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import MainRoomList from "./MainRoomList";
import * as S from "./style";
import MainMyReservation from "./MainMyReservation";
import { floorType, roomType } from "../../models";

interface Props {
  modalType: string;
  setModalType: (value: string) => void;
  setBookingRoom: (value: roomType) => void;
  setError: (error: number) => void;
  setSelectedReservation: (value: reservationType) => void;
  user: userType;
  setUser: (user: userType) => void;
}

type userType = {
  name: string;
  number: string;
  id: string;
};

type reservationType = {
  reservation_id: number;
  room: string;
  time: string;
  leader: userType;
  member: userType[];
  description: string;
};

const Main: FC<Props> = ({
  setModalType,
  setBookingRoom,
  setSelectedReservation,
  modalType,
  setError,
  setUser,
  user,
}) => {
  const history = useHistory();

  const [myReservation, setMyReservation] = useState<reservationType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const seminaRoomList = [
    {
      floor: 2,
      list: [
        {
          id: 1,
          name: "2-1",
        },
        {
          id: 2,
          name: "2-2",
        },
        {
          id: 3,
          name: "2-3",
        },
        {
          id: 4,
          name: "2-4",
        },
      ],
    },
    {
      floor: 3,
      list: [
        {
          id: 5,
          name: "3-1",
        },
        {
          id: 6,
          name: "3-2",
        },
        {
          id: 7,
          name: "3-3",
        },
      ],
    },
    {
      floor: 4,
      list: [
        {
          id: 8,
          name: "4-1",
        },
        {
          id: 9,
          name: "4-2",
        },
        {
          id: 10,
          name: "4-3",
        },
        {
          id: 11,
          name: "4-4",
        },
      ],
    },
  ];
  const renderRoomList = (seminaRoomList: Array<floorType>) =>
    seminaRoomList.map((floor) => (
      <MainRoomList
        floor={floor}
        setBookingRoom={setBookingRoom}
        setModalType={setModalType}
        key={floor.floor}
      />
    ));
  const getMyReservation = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token || token === "null" || token.length <= 0) return;
      console.log(process.env.REACT_APP_SERVER_URL);
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/apply/my/seminar-room`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setMyReservation(data.reservation);
    } catch (error) {
      if (error.response.status) setError(error.response.status);
    }
  };
  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token || token === "null" || token.length <= 0) return;
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setUser(data);
      setLoading(false);
    } catch (error) {
      if (error.response.status) {
      }
    }
  };
  const logout = async () => {
    localStorage.removeItem("access_token");
    console.log("logout! muyaho~");
    history.push("/signin");
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken || accessToken.length <= 0 || accessToken === "null") {
      history.push("/signin");
    } else {
      getMyReservation();
      getUserInfo();
    }
  }, []);
  useEffect(() => {
    if (modalType === "") {
      getMyReservation();
    }
  }, [modalType]);
  if (loading === true) {
    return (
      <S.Loading>
        <S.CuteCat />
      </S.Loading>
    );
  }
  return (
    <S.Main>
      <S.MainNavigation>
        <S.MainTitle>세미나실 예약 서비스</S.MainTitle>
        <S.MainHeaderUser>
          <p>
            {user.number} {user.name}
          </p>
          <button onClick={logout}>로그아웃</button>
        </S.MainHeaderUser>
      </S.MainNavigation>
      <S.MainInfoBox />
      {renderRoomList(seminaRoomList)}
      <S.MainRoomListWrapper>
        <h5>예약현황</h5>
        <MainMyReservation
          reservations={myReservation}
          setSelectedReservation={setSelectedReservation}
          setModalType={setModalType}
        />
      </S.MainRoomListWrapper>
    </S.Main>
  );
};

export default Main;
