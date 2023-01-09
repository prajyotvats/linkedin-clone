import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";

import src from "./linkedin.png";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src={src} />
        <div className="header_search">
          <SearchIcon />
          {/* search icon MUI */}
          <input placeholder="search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          onClick={logoutOfApp}
          avatar={true}
          title={user ? user.displayName : "me"}
        />
      </div>
    </div>
  );
}

export default Header;
