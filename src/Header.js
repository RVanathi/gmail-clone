import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Apps,
  Notifications,
  Search,
  Settings,
  Tune,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header-middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <Tune className="header-inputCaret" />
      </div>
      <div className="header-right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
