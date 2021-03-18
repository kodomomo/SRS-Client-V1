import React, { FC, useState } from "react";
import * as S from "../style";

interface Props {
  booked: boolean;
  deleteTimeOnBookTime: (value: string) => void;
  addTimeOnBookTime: (value: string) => void;
  children: string;
  time: string;
}

const TimeButton: FC<Props> = ({
  children,
  booked,
  deleteTimeOnBookTime,
  addTimeOnBookTime,
  time,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const buttonClickHandler = () => {
    if (booked) return;
    if (checked) {
      deleteTimeOnBookTime(time);
    } else {
      addTimeOnBookTime(time);
    }
    setChecked((state) => !state);
  };
  return (
    <S.ModalTimeButton
      booked={booked}
      checked={checked}
      onClick={buttonClickHandler}
    >
      {children}
    </S.ModalTimeButton>
  );
};

export default TimeButton;
