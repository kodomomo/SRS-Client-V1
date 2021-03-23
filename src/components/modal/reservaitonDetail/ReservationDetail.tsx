import axios from "axios";
import React, { FC } from "react";
import * as S from "../style";

type userType = {
  name: string;
  id: string;
  number: string;
};

type reservationType = {
  reservation_id: number;
  room: string;
  time: string;
  leader: userType;
  description: string;
  member: userType[];
};

const timeEnum = {
  L: "점심시간",
  D: "저녁시간",
  "8": "8교시",
  "9": "8교시",
  "10": "10교시",
};

interface Props {
  reservation: reservationType;
  nextButtonClickHandler: () => void;
  exitButtonClickHandler: () => void;
  user: userType;
}

const ReservationDetail: FC<Props> = ({
  reservation,
  exitButtonClickHandler,
  nextButtonClickHandler,
  user,
}) => {
  const renderMember = (member: userType[]) => {
    return member.map((member: userType) => (
      <S.ModalUserListItem
        key={member.name}
        leader={member.number === reservation.leader.number}
      >
        <p>{member.number}</p>
        <p>{member.name}</p>
      </S.ModalUserListItem>
    ));
  };
  const deleteReservation = async (reservation: reservationType) => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/apply/seminar-room`,
      {
        data: {
          reservation_id: reservation.reservation_id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
  };
  const deleteButtonClickHandler = async () => {
    await deleteReservation(reservation);
    nextButtonClickHandler();
  };
  return (
    <div>
      <S.ModalInfoList>
        <S.ModalInfoListItem>{reservation.room}</S.ModalInfoListItem>
        <S.ModalInfoListItem>
          {timeEnum[reservation.time as "8" | "9" | "10" | "D" | "L"]}
        </S.ModalInfoListItem>
        <S.ModalInfoListItem>{reservation.description}</S.ModalInfoListItem>
      </S.ModalInfoList>
      <S.ModalUserList>
        {renderMember([reservation.leader, ...reservation.member])}
      </S.ModalUserList>
      <S.ModalButtonWrapper>
        <S.ModalButton nextButton={false} onClick={exitButtonClickHandler}>
          닫기
        </S.ModalButton>
        {user.id === reservation.leader.id ? (
          <S.ModalButton nextButton={true} onClick={deleteButtonClickHandler}>
            예약취소
          </S.ModalButton>
        ) : (
          ""
        )}
      </S.ModalButtonWrapper>
    </div>
  );
};

export default ReservationDetail;
