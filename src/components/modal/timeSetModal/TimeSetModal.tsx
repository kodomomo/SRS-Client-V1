import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import * as S from "../style";
import TimeButton from "./TimeButton";

interface Props {
  nextButtonClickHandler: () => void;
  exitButtonClickHandler: () => void;
  setBookTime: (value: string[]) => void;
  bookTime: string[];
  bookingRoomId: string;
  setError: (error: number) => void;
}

type userType = {
  name: string;
  number: string;
};

type reservationType = {
  reservation_id: number;
  room: string;
  time: string;
  leader: userType;
  member: userType[];
};

const TimeSetModal: FC<Props> = ({
  nextButtonClickHandler,
  exitButtonClickHandler,
  setBookTime,
  bookTime,
  bookingRoomId,
  setError,
}) => {
  const [reservations, setReservation] = useState<reservationType[]>([]);
  const deleteTimeOnBookTime = (time: string) => {
    setBookTime(bookTime.filter((bookTime: string) => bookTime !== time));
  };
  const addTimeOnBookTime = (time: string) => {
    setBookTime([...bookTime, time]);
  };
  const getReservation = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/apply/seminar-room?room=${bookingRoomId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setReservation(data.reservation);
    } catch (error) {
      if (error.response) {
        setError(error.response.status);
      }
    }
  };
  const isHaveReservationOnTime = (time: string) => {
    reservations.map((reservation: any) => reservation.time === time);
    for (let reservation of reservations) {
      if (reservation.time === time) {
        return true;
      }
    }
    return false;
  };
  useEffect(() => {
    getReservation();
  }, []);
  return (
    <>
      <S.ModalTimeButtonWrapper>
        <TimeButton
          booked={isHaveReservationOnTime("L")}
          deleteTimeOnBookTime={deleteTimeOnBookTime}
          addTimeOnBookTime={addTimeOnBookTime}
          time="L"
        >
          점심시간
        </TimeButton>
        <TimeButton
          booked={isHaveReservationOnTime("D")}
          deleteTimeOnBookTime={deleteTimeOnBookTime}
          addTimeOnBookTime={addTimeOnBookTime}
          time="D"
        >
          저녁시간
        </TimeButton>
      </S.ModalTimeButtonWrapper>
      <S.ModalTimeButtonWrapper>
        <TimeButton
          booked={isHaveReservationOnTime("8")}
          deleteTimeOnBookTime={deleteTimeOnBookTime}
          addTimeOnBookTime={addTimeOnBookTime}
          time="8"
        >
          8교시
        </TimeButton>
        <TimeButton
          booked={isHaveReservationOnTime("9")}
          deleteTimeOnBookTime={deleteTimeOnBookTime}
          addTimeOnBookTime={addTimeOnBookTime}
          time="9"
        >
          9교시
        </TimeButton>
        <TimeButton
          booked={isHaveReservationOnTime("10")}
          deleteTimeOnBookTime={deleteTimeOnBookTime}
          addTimeOnBookTime={addTimeOnBookTime}
          time="10"
        >
          10교시
        </TimeButton>
      </S.ModalTimeButtonWrapper>
      <S.ModalButtonWrapper>
        <S.ModalButton nextButton={false} onClick={exitButtonClickHandler}>
          취소
        </S.ModalButton>
        <S.ModalButton
          nextButton={true}
          onClick={() => {
            if (bookTime.length <= 0) return;
            nextButtonClickHandler();
          }}
        >
          확인
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </>
  );
};

export default TimeSetModal;
