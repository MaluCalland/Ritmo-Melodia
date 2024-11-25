import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-rock/BaraoVermelho.jpg';
import cantor2 from '../../assets/images/playlist-rock/detonautas.jpg';
import cantor3 from '../../assets/images/playlist-rock/blitz_05.jpg';
import cantor4 from '../../assets/images/playlist-rock/capital-inicial.webp';
import cantor5 from '../../assets/images/playlist-rock/charlie-brown-jr.jpeg';
import cantor6 from '../../assets/images/playlist-rock/legiao.jpg';
import cantor7 from '../../assets/images/playlist-rock/paralamas.jpeg';
import cantor8 from '../../assets/images/playlist-rock/plebe rude.webp';
import cantor9 from '../../assets/images/playlist-rock/raimundoss.jpg';
import cantor10 from '../../assets/images/playlist-rock/rpm.png';
import cantor11 from '../../assets/images/playlist-rock/skank.webp';
import cantor12 from '../../assets/images/playlist-rock/titas.png';
import YouTube from 'react-youtube';

function PlaylistRock () {
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
    { id: 'P3M-hLfvg30', title: 'Bete Balanço', artist: 'Barão Vermelho', image: cantor1 },
    { id: '8zsZ3Ql8x7o', title: 'Outro Lugar', artist: 'Detonautas', image: cantor2 },
    { id: 'i4PiyTpDX1c', title: 'Você Não Soube Me Amar', artist: 'Blitz', image: cantor3 },
    { id: '6cdRLssVLvE', title: "Natasha", artist: 'Capital Inicial', image: cantor4 },
    { id: 'etlCmhhn-VI', title: 'Zóio De Lula', artist: 'Charlie Brown Jr.', image: cantor5 },
    { id: 'LqmRIG1plVU', title: 'Tempo Perdido', artist: 'Legião Urbana', image: cantor6 },
    { id: 'cLXmiAsyJdY', title: 'Óculos', artist: 'Os Paralamas Do Sucesso', image: cantor7 },
    { id: 'syL3QlD9S3M', title: 'Até Quando Esperar', artist: 'Plebe Rude', image: cantor8 },
    { id: 'FkXWfreN2QA', title: 'Mulher de fases ', artist: 'Raimundos', image: cantor9 },
    { id: 'Xin46vgD8p4', title: 'Olhar 43', artist: 'RPM', image: cantor10 },
    { id: 'Q2gAomSRKP', title: 'Garota Nacional', artist: 'Skank', image: cantor11 },
    { id: 'OZfgSnXRhZI', title: 'Homem primata', artist: 'Titãs', image: cantor12 },
  ];

  return (
    <div className="body-playlist">
      {songs.map((song, index) => (
        <div className="container" key={index}>
          <div className="music-Container">
            <p className="music-Head-Name">{song.title}</p>
            <p className="music-Artist-Name">{song.artist}</p>
            <img src={song.image} className={avatarClass[avatarClassIndex]} alt="song Avatar" id="songAvatar" />
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
  
  export default PlaylistRock;  