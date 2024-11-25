import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-mpb/Caetano-Veloso.webp';
import cantor2 from '../../assets/images/playlist-mpb/djavan.jpg';
import cantor3 from '../../assets/images/playlist-mpb/elisregina.webp';
import cantor4 from '../../assets/images/playlist-mpb/gal-costa.webp';
import cantor5 from '../../assets/images/playlist-mpb/jorgeben.jpg';
import cantor6 from '../../assets/images/playlist-mpb/MarisaMonte.webp';
import cantor7 from '../../assets/images/playlist-mpb/ney.avif';
import cantor8 from '../../assets/images/playlist-mpb/tim-maia.avif';
import cantor9 from '../../assets/images/playlist-mpb/toquinoevinicius.webp';
import cantor10 from '../../assets/images/playlist-mpb/tribalistas.avif';
import cantor11 from '../../assets/images/playlist-mpb/vanessa-da-mata.webp';
import cantor12 from '../../assets/images/playlist-mpb/zeca-baleiro.jpg';
import YouTube from 'react-youtube';

function PlaylistMPB() {
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
    { id: 'wFjx3wMQtEU', title: 'Samba De Verão', artist: 'Caetano Veloso', image: cantor1 },
    { id: 'lBrDZjuwKSw', title: 'Samurai', artist: 'Djavan', image: cantor2 },
    { id: 'caEFyFRc91c', title: 'Tiro Ao Álvaro', artist: 'Elis Regina', image: cantor3 },
    { id: 'q_dJUjmHIIM', title: "Folhetim", artist: 'Gal Costa', image: cantor4 },
    { id: 'gWUAEnb4BVM', title: 'Oba, Lá Vem Ela', artist: 'Jorge Ben Jor', image: cantor5 },
    { id: 't7M89YJAPhM', title: 'Ainda Bem', artist: 'Marisa Monte', image: cantor6 },
    { id: 'L2bINZ0G_yI', title: 'Poema', artist: 'Ney Matogrosso', image: cantor7 },
    { id: 'lG-eNorxpO0', title: 'Acenda o farol', artist: 'Tim Maia', image: cantor8 },
    { id: 'Gb5sbORA62w', title: 'Onde Anda Você ', artist: 'Toquinho & Vinícius', image: cantor9 },
    { id: 'VmxqhvnfMvI', title: 'Já Sei Namorar', artist: 'Tribalistas', image: cantor10 },
    { id: 'hoDIORT5JL8', title: 'Ai, Ai, Ai...', artist: 'Vanessa Da Mata', image: cantor11 },
    { id: 'zqKgYIqGmkM', title: 'Telegrama', artist: 'Zeca Baleiro', image: cantor12 },
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
  
  export default PlaylistMPB;  