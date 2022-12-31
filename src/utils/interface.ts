import React, { SetStateAction } from "react";
import { Nullable } from "./type";

export interface AuthProps {
  usersToken: Nullable<string>;
  setUsersToken: React.Dispatch<SetStateAction<Nullable<string>>>;
}

export interface HomeProps {
  usersToken: Nullable<string>;
  setUsersToken: React.Dispatch<SetStateAction<Nullable<string>>>;
}
