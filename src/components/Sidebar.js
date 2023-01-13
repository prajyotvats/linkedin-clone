import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import src from "./linkedin.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={src} alt="" />
        <Avatar src={user.photoURL} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed You</p>
          <p className="sidebar_statNumber">2,156</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">111</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjobs")}
        {recentItems("reactjs")}
        {recentItems("frontend")}
        {recentItems("Developer")}
        {recentItems("Copy Paste")}
      </div>
    </div>
  );
}

export default Sidebar;
