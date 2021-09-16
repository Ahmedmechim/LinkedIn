import React from "react";
import "./suggestion.css";

const Suggestion = ({ suggestions }) => {
  return (
    <div>
      <div className="suggestion">
        <h4>Ajoutez à votre fil d’actualité</h4>
        <div>
          {suggestions.map(({ avatar, name, discreption }) => (
            
              <div className="sugg">
                <div>
                  <img className="suggImg" src={avatar} alt="" />
                </div>
                <div>
                  <h4 className="suggName">{name}</h4>
                  <p className="suggDisc">{discreption}</p>
                  <button className="btnSui">+ Suivre</button>
                </div>
              </div>
            
          ))}
        </div>
        <h4>Voir toutes les suggestions ➜ </h4>
      </div>
      <div className="lerarning">
      <h4>Meilleurs cours du jour </h4>
      <h5></h5>
      <h4>Afficher plus sur LinkedIn Learning ➜</h4>

      </div>
    </div>
  );
};

export default Suggestion;
