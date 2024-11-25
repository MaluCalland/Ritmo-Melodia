import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-pop/anavitoria.jpg';
import cantor2 from '../../assets/images/playlist-pop/dudabeat.jpg';
import cantor3 from '../../assets/images/playlist-pop/giulia-be.webp';
import cantor4 from '../../assets/images/playlist-pop/gloria.webp';
import cantor5 from '../../assets/images/playlist-pop/iza.jpg';
import cantor6 from '../../assets/images/playlist-pop/Jão.jpg';
import cantor7 from '../../assets/images/playlist-pop/lagum.jpg';
import cantor8 from '../../assets/images/playlist-pop/lud.jpeg';
import cantor9 from '../../assets/images/playlist-pop/luisa.png';
import cantor10 from '../../assets/images/playlist-pop/marina-sena.webp';
import cantor11 from '../../assets/images/playlist-pop/Pabllo-Vittar.webp';
import cantor12 from '../../assets/images/playlist-pop/vitor-kley-2023.webp';
import YouTube from 'react-youtube';

function PlaylistPop() {

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
    { id: '9Sk7RQtSl5g', title: 'Pupila', artist: 'ANAVITÓRIA', image: cantor1 },
    { id: 'UFj_yrzzenc', title: 'Bixinho', artist: 'DUDA BEAT', image: cantor2 },
    { id: 'wuvO6wyGz_k', title: 'se essa vida fosse um filme', artist: 'GIULIA BE', image: cantor3 },
    { id: 'p4aPlYN6x1Q', title: "VERMELHO", artist: 'Gloria Groove', image: cantor4 },
    { id: 'TXtXUGxWATw', title: 'Meu talismã', artist: 'IZA', image: cantor5 },
    { id: 'JdKDGAZaO9Y', title: 'Essa Eu Fiz Pro Nosso Amor', artist: 'Jão', image: cantor6 },
    { id: 'JsbvyRXpNmE', title: 'Oi', artist: 'Lagum', image: cantor7 },
    { id: 'VsIp4-vnqlw', title: 'Maldivas', artist: 'LUDMILLA', image: cantor8 },
    { id: 'pQ6ZV_sg0sY', title: 'Sou Musa do Verão ', artist: 'Luisa Sonza', image: cantor9 },
    { id: 'uZTbg0vyyxI', title: 'Ombrim', artist: 'Marina Sena', image: cantor10 },
    { id: 'WiVKh2xXhEg', title: 'São Amores', artist: 'Pabllo Vittar', image: cantor11 },
    { id: '4Sv66qB4YwU', title: 'Morena', artist: 'Vitor Kley', image: cantor12 },
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
  );  }
  
  export default PlaylistPop;  