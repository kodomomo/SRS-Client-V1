import React, { FC, useState } from "react";
import * as S from "./style";
import TimeSetModal from "./timeSetModal";
import ReasonModal from "./reasonModal";
import SearchUserModal from "./searchUserModal";
import ReservationDetail from "./reservaitonDetail";
import ErrorModal from "./errorModal";

type roomType = {
  id: number;
  name: string;
};

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
  member: userType[];
  description: string;
};

interface Props {
  type: string;
  setModalType: (value: string) => void;
  bookingRoom: roomType;
  setBookingRoom: (room: roomType) => void;
  setError: (error: number) => void;
  error: number;
  selectedReservation: reservationType;
  setUser: (user: userType) => void;
  user: userType;
}

const Modal: FC<Props> = ({
  type,
  setModalType,
  bookingRoom,
  selectedReservation,
  setError,
  user,
}) => {
  const [bookTime, setBookTime] = useState<Array<string>>([]);
  const [description, setDescription] = useState<string>("");
  const setModalTypeReason = () => {
    setModalType("reason");
  };
  const setModalTypeSearch = () => {
    setModalType("search");
  };
  const resetModalType = () => {
    setModalType("");
    setBookTime([]);
  };
  const stopPropagationAndPreventDefault = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
  };
  if (type.length <= 0) return <></>;
  return (
    <>
      <S.Modal onClick={resetModalType}>
        <S.ModalBody onClick={stopPropagationAndPreventDefault}>
          <div>
            {type === "timeset" ? (
              <TimeSetModal
                nextButtonClickHandler={setModalTypeReason}
                exitButtonClickHandler={resetModalType}
                setBookTime={(value: string[]) => {
                  setBookTime(value);
                }}
                bookTime={bookTime}
                bookingRoomId={bookingRoom.name}
                setError={setError}
              />
            ) : (
              ""
            )}
            {type === "reason" ? (
              <ReasonModal
                nextButtonClickHandler={setModalTypeSearch}
                exitButtonClickHandler={resetModalType}
                bookingRoom={bookingRoom}
                bookTime={bookTime}
                setDescription={setDescription}
                description={description}
              />
            ) : (
              ""
            )}
            {type === "search" ? (
              <SearchUserModal
                nextButtonClickHandler={resetModalType}
                exitButtonClickHandler={resetModalType}
                description={description}
                room={bookingRoom}
                setError={setError}
                bookTime={bookTime}
              />
            ) : (
              ""
            )}
            {type === "detail" ? (
              <ReservationDetail
                reservation={selectedReservation}
                nextButtonClickHandler={resetModalType}
                exitButtonClickHandler={resetModalType}
                user={user}
              />
            ) : (
              ""
            )}
          </div>
        </S.ModalBody>
        <S.ModalBackground />
      </S.Modal>
    </>
  );
};

export default Modal;
