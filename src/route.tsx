import React, { FC, useState } from "react";
import GlobalStyle from "./styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main";
import Modal from "./components/modal";
import DDYZD from "./components/oauth";
import SignIn from "./components/signIn";
import ErrorModal from "./components/modal/errorModal";

type roomType = {
  id: number;
  name: string;
};

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

const App: FC = () => {
  const [modalType, setModalType] = useState<string>("");
  const [error, setError] = useState<number>(0);
  const [bookingRoom, setBookingRoom] = useState<roomType>({
    id: 0,
    name: "",
  });
  const [
    selectedReservation,
    setSelectedReservation,
  ] = useState<reservationType>({
    reservation_id: 0,
    room: "",
    time: "",
    leader: {
      name: "",
      id: "",
      number: "",
    },
    member: [],
    description: "",
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/oauth/ddyzd" component={DDYZD} />
        <Route
          path="/"
          render={() => (
            <Main
              setModalType={setModalType}
              setBookingRoom={setBookingRoom}
              modalType={modalType}
              setSelectedReservation={setSelectedReservation}
              setError={setError}
            />
          )}
        />
      </Switch>
      <GlobalStyle />
      <Modal
        error={error}
        setError={setError}
        type={modalType}
        setModalType={setModalType}
        bookingRoom={bookingRoom}
        setBookingRoom={setBookingRoom}
        selectedReservation={selectedReservation as reservationType}
      />
      {error !== 0 ? <ErrorModal error={error} setError={setError} /> : ""}
    </BrowserRouter>
  );
};

export default App;
