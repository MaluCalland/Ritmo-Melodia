import React from "react";

const PlaylistAxe = () => {
  return (
    <div className="">
      <nav className="flex-conteiner-playlist">
          <iframe className="flex-item-playlist"
            width="280"
            height="157.5"
            src="https://www.youtube.com/embed/videoseries?list=PL3IsGvUdVyAJ6gOeibD3m8pQ2LRsHTeNm"
            title="Minha Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe className="flex-item-playlist"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLFtsMqiDcqt0v_gcgX01-ipIHU_81rK8G"
            title="Minha Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </nav>
    </div>
  );
};

export default PlaylistAxe;
