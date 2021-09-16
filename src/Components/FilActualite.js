import React from "react";
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import Bouton from "./Bouton";



const FilActualite = () => {
  return (
    <>
      <div className="statue">
        <div>
          <img className="pic" src="./photo.jpg" alt="" />
          <input type="texte" placeholder="    Commoncer un post" />
        </div>
        <div className="btn">
        <Bouton Icon={PhotoIcon} titre="Photo" color="#70b5f9" />
        <Bouton Icon={YouTubeIcon} titre="Vidéo" color="#7fc15e" />
        <Bouton Icon={EventIcon} titre="Evénement" color="#e7a33e" />
        <Bouton Icon={VerticalSplitIcon} titre="Rédiger un article" color="#fc9295" />
         
        </div>
      </div>
    </>
  );
};

export default FilActualite;
