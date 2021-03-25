import React, { FC, useEffect } from "react";
import { roomType } from "../../../models";
import * as S from "../style";

interface Props {
  nextButtonClickHandler: () => void;
  exitButtonClickHandler: () => void;
  bookingRoom: roomType;
  bookTime: string[];
  setDescription: (value: string) => void;
  description: string;
}

const timeEnum = {
  L: "점심시간",
  D: "저녁시간",
  "8": "8교시",
  "9": "9교시",
  "10": "10교시",
};

const ReasonModal: FC<Props> = ({
  nextButtonClickHandler,
  exitButtonClickHandler,
  bookingRoom,
  bookTime,
  setDescription,
}) => {
  const ReasonEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  return (
    <div>
      <S.ModalReason>
        <p className="place">{bookingRoom.name}</p>
        <p>
          {bookTime.map((time) => (
            <span key={time}>
              {timeEnum[time as "8" | "9" | "10" | "D" | "L"]} /
            </span>
          ))}
        </p>
      </S.ModalReason>
      <form>
        <S.ModalInput
          placeholder="사유를 입력하세요."
          id="input"
          type="text"
          onChange={ReasonEventHandler}
        />
      </form>
      <S.ModalButtonWrapper>
        <S.ModalButton nextButton={false} onClick={exitButtonClickHandler}>
          취소
        </S.ModalButton>
        <S.ModalButton nextButton={true} onClick={nextButtonClickHandler}>
          다음
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </div>
  );
};

export default ReasonModal;
