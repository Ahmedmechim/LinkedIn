import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./navbar.css";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import { Badge } from "antd";
// import Noti from "./Noti"

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <SearchIcon className="search" />
        <input type="texte" placeholder="Rechrche" />
        <div className="icon" style={{ color: "black" }}>
          <i className="fas fa-home"></i>
          <p>Acceuil</p>
          <div className="sousLigne"></div>
        </div>
        <div className="icon">
          <i class="fas fa-user-friends"></i>
          <p>Réseau</p>
        </div>
        <div className="icon">
          <i class="fas fa-briefcase"></i>
          <p>Emploi</p>
        </div>
        <div className="icon">
          <i class="fas fa-comment-dots"></i>
          <p>Messagerie</p>
        </div>
        <div className="icon">
          {/* <Noti/> */}
          <i class="fas fa-bell"></i>
          <p>Notifcations</p>
        </div>
        <div className="prof">
          <img src="./photo.jpg" alt="" />
          <div className="vous">
            <p>Vous </p>
            <p className="triangle">▶</p>
          </div>
        </div>
        <div className="barr"></div>
        <div className="iconn">
          <i class="fas fa-th"></i>
          <div className="vous">
            <p>Produits</p>
            <p className="triangle">▶</p>
          </div>
        </div>
        <div className="essayer">
          <p>Essayez Premium gratuitement</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
