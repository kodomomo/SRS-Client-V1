import React, { FC } from "react";
import * as S from "./style";

interface Props {
  setSelectedReservation: (value: reservationType) => void;
  reservations: reservationType[];
  setModalType: (value: string) => void;
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

const MainMyReservation: FC<Props> = ({
  reservations,
  setModalType,
  setSelectedReservation,
}) => {
  const getReservationOnTime = (
    reservations: reservationType[],
    time: string
  ) => {
    const reservation = reservations.filter(
      (reservation) => reservation.time === time
    )[0];
    return reservation ? reservation : ({ room: "-" } as reservationType);
  };
  const isHaveReservationOnTime = (
    reservations: reservationType[],
    time: string
  ) => {
    const onTimeReservation = reservations.filter(
      (reservation) => reservation.time === time
    );
    return onTimeReservation[0] ? true : false;
  };
  const getMyReservationClickHandler = (time: string) => {
    return () => {
      if (isHaveReservationOnTime(reservations, time)) {
        setModalType("detail");
        setSelectedReservation(getReservationOnTime(reservations, time));
      }
    };
  };
  return (
    <S.MainMyreservationWrapper>
      <S.MainMyReservation
        onClick={getMyReservationClickHandler("L")}
        onReservation={isHaveReservationOnTime(reservations, "L")}
      >
        <div>
          <p>점심</p>
          <p>{getReservationOnTime(reservations, "L").room}</p>
        </div>
      </S.MainMyReservation>
      <S.MainMyReservation
        onClick={getMyReservationClickHandler("D")}
        onReservation={isHaveReservationOnTime(reservations, "D")}
      >
        <div>
          <p>저녁</p>
          <p>{getReservationOnTime(reservations, "D").room}</p>
        </div>
      </S.MainMyReservation>
      <S.MainMyReservation
        onReservation={isHaveReservationOnTime(reservations, "8")}
        onClick={getMyReservationClickHandler("8")}
      >
        <div>
          <p>8</p>
          <p>{getReservationOnTime(reservations, "8").room}</p>
        </div>
      </S.MainMyReservation>
      <S.MainMyReservation
        onReservation={isHaveReservationOnTime(reservations, "9")}
        onClick={getMyReservationClickHandler("9")}
      >
        <div>
          <p>9</p>
          <p>{getReservationOnTime(reservations, "9").room}</p>
        </div>
      </S.MainMyReservation>
      <S.MainMyReservation
        onClick={getMyReservationClickHandler("10")}
        onReservation={isHaveReservationOnTime(reservations, "10")}
      >
        <div>
          <p>10</p>
          <p>{getReservationOnTime(reservations, "10").room}</p>
        </div>
      </S.MainMyReservation>
    </S.MainMyreservationWrapper>
  );
};

export default MainMyReservation;
