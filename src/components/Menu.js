import React from 'react';

export const Menu = ({ onPlayButtonClick }) => {
  return (
    <div className="menu">
      <h2>Välkommen användare!</h2>
      <p>Vad vill du göra idag?</p>
      <div className="menubuttons">
        <button onClick={onPlayButtonClick} type="button" className="playbutton">
          Spela
        </button>
        <button className="unusedbutton" type="button">Öva</button>
        <button className="unusedbutton" type="button">Se min statistik</button>
        <button className="unusedbutton" type="button">Logga ut</button>
      </div>
    </div>
  );
};
