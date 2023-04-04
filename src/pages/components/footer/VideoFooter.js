/* rcfe */

import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{ name }</h3> 
        <p>{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic_text">
          <p>{music}</p>
          </div>
          
        </div>
      </div>
      <img 
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/video-e2d0b.appspot.com/o/vinil.png?alt=media&token=66d642b1-cd7f-45ff-bc18-28658d2707e4"
      />
    </div>
  );
}

export default VideoFooter;
