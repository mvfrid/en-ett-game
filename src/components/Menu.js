import React from 'react';

// eslint-disable-next-line max-len
export const Menu = ({
  onPlayButtonClick,
  onPracticeButtonClick,
  onProfileButtonClick,
  onStatisticsButtonClick,
  onSettingsButtonClick,
  onInfoButtonClick,
  onLogoutButtonClick
}) => {
  return (
    <div className="menu">
      <h2>Välkommen användare!</h2>
      <p>Vad vill du göra idag?</p>
      <div className="menubuttons">
        <button className="iconbox play" type="button" onClick={onPlayButtonClick}>
          <img src="/logos/icon2b.png" alt="play button" className="icon play" />
          <p>Spela</p>
        </button>
        <div className="menubuttonsrest">
          <button className="iconbox" type="button" onClick={onPracticeButtonClick}>
            <img src="/logos/icon5b.png" alt="practice button" className="icon" />
            <p>Öva</p>
          </button>
          <button className="iconbox" type="button" onClick={onProfileButtonClick}>
            <img src="/logos/icon4b.png" alt="profile button" className="icon" />
            <p>Profil</p>
          </button>
          <button className="iconbox" type="button" onClick={onInfoButtonClick}>
            <img src="/logos/icon9c.png" alt="button" className="icon" />
            <p>Info</p>
          </button>
          <button className="iconbox" type="button" onClick={onStatisticsButtonClick}>
            <img src="/logos/icon6b.png" alt="button" className="icon" />
            <p>Statistik</p>
          </button>
          <button className="iconbox" type="button" onClick={onSettingsButtonClick}>
            <img src="/logos/Icon8b.png" alt="button" className="icon" />
            <p>Inställningar</p>
          </button>
          <button className="iconbox" type="button" onClick={onLogoutButtonClick}>
            <img src="/logos/icon7b.png" alt="button" className="icon" />
            <p>Logga ut</p>
          </button>
        </div>
      </div>
    </div>
  );
};

/* Square play button:
        <button className="iconbox play" type="button" onClick={onPlayButtonClick}>
          <img src="/logos/icon2b.png" alt="play button" className="icon play" />
          <p>Spela</p>
        </button>

        .icon.play {
  max-width: 105px;
}

.iconbox.play p {
  font-size: 48px;
}

*/