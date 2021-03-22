export type roomType = {
  id: number;
  name: string;
};

export type userType = {
  name: string;
  number: string;
  id: string;
};

export type reservationType = {
  reservation_id: number;
  room: string;
  time: string;
  leader: userType;
  member: userType[];
  description: string;
};

export type floorType = {
  floor: number;
  list: Array<roomType>;
};
