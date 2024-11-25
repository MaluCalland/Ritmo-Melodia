import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';
import YouTube from 'react-youtube';

import cantor1 from '../../assets/images/playlist-funk/marcinho.jpg';
import cantor2 from '../../assets/images/playlist-funk/leozinho.jpg';
import cantor3 from '../../assets/images/playlist-funk/livinho.webp';
import cantor4 from '../../assets/images/playlist-funk/sapao.jpg';
import cantor5 from '../../assets/images/playlist-funk/dennis.jpg';
import cantor6 from '../../assets/images/playlist-funk/don-juan.webp';
import cantor7 from '../../assets/images/playlist-funk/delano.jpg';
import cantor8 from '../../assets/images/playlist-funk/kevin.png';
import cantor9 from '../../assets/images/playlist-funk/FBC.webp';
import cantor10 from '../../assets/images/playlist-funk/zaac.webp';
import cantor11 from '../../assets/images/playlist-funk/kevin.jpeg';
import cantor12 from '../../assets/images/playlist-funk/claudinho-e-buchecha.jpg';

function PlaylistFunk() {
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
    { id: 'am3U2a_wpV4', title: 'Glamurosa', artist: 'MC Marcinho, DJ Marlboro', img: cantor1 },
    { id: 'ekg_x8EwCnc', title: 'Ela Só Pensa em Beijar', artist: 'MC Leozinho, DJ Marlboro', img: cantor2 },
    { id: 'Gx9xqXlU9gE', title: 'Hoje Eu Vou Parar Na Gaiola', artist: 'Mc Livinho, Rennan da Penha', img: cantor3 },
    { id: 'W6f8jlqRXB4', title: "Vou Desafiar Você", artist: 'Mc Sapão, DJ Detonna', img: cantor4 },
    { id: 'um6fQzRg4hE', title: 'Só Você', artist: 'DENNIS, MC G15', img: cantor5 },
    { id: '_Qub7jfzYQw', title: 'Amar Amei', artist: 'Mc Don Juan', img: cantor6 },
    { id: 'fkQXies7DSQ', title: 'Na Ponta Ela Fica', artist: 'Delano', img: cantor7 },
    { id: 'WMCKKUvwBCQ', title: 'Pra Inveja é Tchau', artist: 'MC Kevin e Mc Davi', img: cantor8 },
    { id: '0tKvxIp29Js', title: 'Delírios ', artist: 'FBC, VHOOR, Djair Voz Cristalina', img: cantor9 },
    { id: 'EWcOY14GWwM', title: 'Bumbum Granada', artist: 'Mc Zaac & Jerry Smith', img: cantor10 },
    { id: '_4datNzTy1o', title: 'Evoluiu', artist: 'MC Kevin o Chris', img: cantor11 },
    { id: 'pB_9IHBT2U8', title: 'Nosso Sonho', artist: 'Claudinho & Buchecha', img: cantor12 },
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
 
  export default PlaylistFunk;  