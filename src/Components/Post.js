import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import "./post.css";
import Bouton from "./Bouton";

const Post = ({ coordonnees }) => {
  return (
    <div>
      {coordonnees.map(({ avatar, name, discreption, message, pub }) => (
        <div>
          <div className="post">
            <div className="header">
              <img style={{height:"40px"}}  src={avatar} alt="" />
              <div>
                <h3>{name}</h3>
                <p>{discreption}</p>
              </div>
            </div>
            <div className="body">
              <p>{message}</p>
              <img className="publication" src={pub} alt="" />
            </div>
            <div className="boutons">
              <Bouton Icon={ThumbUpAltIcon} titre="J'aime" color="gray" />
              <Bouton Icon={CommentIcon} titre="Commenter" color="gray" />
              <Bouton Icon={ShareIcon} titre="Partager" color="gray" />
              <Bouton Icon={SendIcon} titre="Envoyer" color="gray" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
