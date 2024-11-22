import React, { useState } from "react";
import "../../css/Playlist.css";

import PlaylistAxe from "../MixPlaylist/PlaylistAxe";
import PlaylistForro from "../MixPlaylist/PlaylistForro";
import PlaylistFunk from "../MixPlaylist/PlaylistFunk";
// import PlaylistMPB from "../MixPlaylist/PlaylistMPB";
// import PlaylistPagode from "../MixPlaylist/PlaylistPagode";
// import PlaylistPop from "../MixPlaylist/PlaylistPop";
// import PlaylistRap from "../MixPlaylist/PlaylistRap";
// import PlaylistReggae from "../MixPlaylist/PlaylistReggae";
// import PlaylistRock from "../MixPlaylist/PlaylistRock";
// import PlaylistSamba from "../MixPlaylist/PlaylistSamba";
// import PlaylistSertanejo from "../MixPlaylist/PlaylistSertanejo";
import PlaylistTrap from "../MixPlaylist/PlaylistTrap";

const Playlist = () => {
  const [itens, setItens] = useState([
    { id: 1, src: PlaylistAxe(), categoria: "Axé" },
    { id: 2, src: PlaylistForro(), categoria: "Forró" },
    { id: 3, src: PlaylistFunk(), categoria: "Funk" },
    // { id: 4, src: PlaylistMPB(), categoria: "MPB" },
    // { id: 5, src: PlaylistPagode(), categoria: "Pagode" },
    // { id: 6, src: PlaylistPop(), categoria: "Pop" },
    // { id: 7, src: PlaylistRap(), categoria: "Rap" },
    // { id: 8, src: PlaylistReggae(), categoria: "Reggae" },
    // { id: 9, src: PlaylistRock(), categoria: "Rock" },
    // { id: 10, src: PlaylistSamba(), categoria: "Samba" },
    // { id: 11, src: PlaylistSertanejo(), categoria: "Sertanejo" },
    { id: 12, src: PlaylistTrap(), categoria: "Trap" },
  ]);

  // Estado para armazenar a categoria selecionada
  const [filtro, setFiltro] = useState("todas");

  // Função para filtrar os itens com base na categoria selecionada
  const itensFiltrados =
    filtro === "todas"
      ? itens
      : itens.filter((item) => item.categoria === filtro);

  return (
    <div>
      <div className="tituloPlaylist">
        <h1>Algumas playlists já criadas por nós</h1>
        <p>Aproveite seu momento e se divirta! </p>
      </div>

      <div className="buttonCategoria">
        {/* Radio buttons para escolher a categoria */}
        <button
          className="buttonItem"
          onClick={() => setFiltro("todas")}
          style={{ backgroundColor: filtro === "todas" ? "lightblue" : "" }}
        >
          Todas
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Axé")}
          style={{ backgroundColor: filtro === "Axé" ? "lightblue" : "" }}
        >
          Axé
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Forró")}
          style={{ backgroundColor: filtro === "Forró" ? "lightblue" : "" }}
        >
          Forró
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Funk")}
          style={{ backgroundColor: filtro === "Funk" ? "lightblue" : "" }}
        >
          Funk
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("MPB")}
          style={{ backgroundColor: filtro === "MPB" ? "lightblue" : "" }}
        >
          MPB
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Pagode")}
          style={{ backgroundColor: filtro === "Pagode" ? "lightblue" : "" }}
        >
          Pagode
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Pop")}
          style={{ backgroundColor: filtro === "Pop" ? "lightblue" : "" }}
        >
          Pop
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Reggae")}
          style={{ backgroundColor: filtro === "Reggae" ? "lightblue" : "" }}
        >
          Reggae
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Rock")}
          style={{ backgroundColor: filtro === "Rock" ? "lightblue" : "" }}
        >
          Rock
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Rap")}
          style={{ backgroundColor: filtro === "Rap" ? "lightblue" : "" }}
        >
          Rap
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Samba")}
          style={{ backgroundColor: filtro === "Samba" ? "lightblue" : "" }}
        >
          Samba
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Sertanejo")}
          style={{ backgroundColor: filtro === "Sertanejo" ? "lightblue" : "" }}
        >
          Sertanejo
        </button>
        <button
          className="buttonItem"
          onClick={() => setFiltro("Trap")}
          style={{ backgroundColor: filtro === "Trap" ? "lightblue" : "" }}
        >
          Trap
        </button>
      </div>
      {/* Exibindo os itens filtrados */}
      <div className="exibirPlaylists"> 
        <ul className="flex-item-caixa">
            {itensFiltrados.map((item) => (
              <p key={item.id}>{item.src}</p>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
