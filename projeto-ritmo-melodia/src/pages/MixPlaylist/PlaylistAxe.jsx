import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';
import YouTube from 'react-youtube';

import cantor1 from '../../assets/images/playlist-axe/tchakabum.png';
import cantor2 from '../../assets/images/playlist-axe/eva.png';
import cantor3 from '../../assets/images/playlist-axe/chiclete-banana.png';
import cantor4 from '../../assets/images/playlist-axe/tim-balada.png';
import cantor5 from '../../assets/images/playlist-axe/psirico.png';
import cantor6 from '../../assets/images/playlist-axe/asa-aguia.jpg';
import cantor7 from '../../assets/images/playlist-axe/é-tchan.png';
import cantor8 from '../../assets/images/playlist-axe/leo-santana.png';
import cantor9 from '../../assets/images/playlist-axe/levanois.png';
import cantor10 from '../../assets/images/playlist-axe/netinho.png';
import cantor11 from '../../assets/images/playlist-axe/Ivete-Sangalo.webp';
import cantor12 from '../../assets/images/playlist-axe/claudia-leitte.png';

function PlaylistAxe() {
  // Estado para controlar o estado de reprodução de cada música
  const [isAudioPlaying, setIsAudioPlaying] = useState([false]); 
  const playerRefs = useRef([]); // Ref para os players do YouTube

  const avatarClass = ['objectFitCover', 'objectFitContain', 'none'];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);

  // Função para controlar a reprodução
  const handleAudioPlay = (index) => {
    const newIsPlaying = [...isAudioPlaying];

    // Se a música que está sendo clicada já está tocando
    if (newIsPlaying[index]) {
      // Pausa a música
      if (playerRefs.current[index] && playerRefs.current[index].internalPlayer) {
        playerRefs.current[index].internalPlayer.pauseVideo();
      }
      newIsPlaying[index] = false;
    } else {
      // Se a música não está tocando, pausa todas as outras e toca a música atual
      playerRefs.current.forEach((player, i) => {
        if (i !== index && player && player.internalPlayer) {
          player.internalPlayer.pauseVideo(); // Pausa outras músicas
          newIsPlaying[i] = false; // Atualiza o estado das outras músicas
        }
      });

      // Certificando que o player existe antes de tocar
      if (playerRefs.current[index] && playerRefs.current[index].internalPlayer) {
        playerRefs.current[index].internalPlayer.playVideo();
      }
      newIsPlaying[index] = true;
    }

    // Atualiza o estado
    setIsAudioPlaying(newIsPlaying);
  };

  // Configurações do YouTube Player
  const opts = {
    height: '0', // Não exibe o vídeo
    width: '0',  // Não exibe o vídeo
    playerVars: {
      autoplay: 0, // Não começa automaticamente
      controls: 0, // Não exibe controles
      mute: 0, // Não muda o áudio
      modestbranding: 1, // Remove a marca do YouTube
      showinfo: 0, // Não mostra informações do vídeo
    },
  };

  const songs = [
    { title: 'Olha a Onda', artist: 'Tchakabum', img: cantor1, videoId: 'eKpGe41hVjk' },
    { title: 'Eva', artist: 'Banda Eva', img: cantor2, videoId: '_soaJhvm9TA' },
    { title: '100% Você', artist: 'Chiclete Com Banana', img: cantor3, videoId: 'fDS9fHfLf7g' },
    { title: 'Beija-Flor', artist: 'Tim Balada', img: cantor4, videoId: '72WaH5kX2sI' },
    { title: 'Lepo Lepo', artist: 'Psirico', img: cantor5, videoId: 'p0D1PCfGoEw' },
    { title: 'Não Tem Lua', artist: 'Asa de Águia', img: cantor6, videoId: 'fiTr7_lg7B4' },
    { title: 'Ralando O Tchan', artist: 'É O Tchan', img: cantor7, videoId: 'bWxDcmGA1lE' },
    { title: 'Zona de Perigo', artist: 'Léo Santana', img: cantor8, videoId: 'tGEfMULycsM' },
    { title: 'Liga da Justiça', artist: 'Leva Noiz', img: cantor9, videoId: 'lWq92qjVngM' },
    { title: 'Milla', artist: 'Netinho', img: cantor10, videoId: 'Vt8K80X9gt8' },
    { title: 'Macetando', artist: 'Ivete Sangalo', img: cantor11, videoId: '2DqP9UmzQOE' },
    { title: 'Largadinho', artist: 'Claudia Leitte', img: cantor12, videoId: '8s_lk2vjbMc' },
  ];

  return (
    <div className="body-playlist">
      {songs.map((song, index) => (
        <div className="container" key={index}>
          <div className="music-Container">
            <p className="music-Head-Name">{song.title}</p>
            <p className="music-Artist-Name">{song.artist}</p>
            <img src={song.img} className={avatarClass[avatarClassIndex]} alt="song Avatar" id="songAvatar" />
            <div className="musicControlers">
              <i className="fa fa-backward musicControler"></i>
              <i
                className={`fa ${isAudioPlaying[index] ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`}
                onClick={() => handleAudioPlay(index)} // Passa o índice para controlar a música específica
              ></i>
              <i className="fa fa-forward musicControler"></i>
            </div>

            {/* Componente YouTube (ocultando o vídeo) */}
            <YouTube
              videoId={song.videoId} // Usando o ID do vídeo da música
              opts={opts}
              ref={(el) => (playerRefs.current[index] = el)} // Ref para cada player
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlaylistAxe;