import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-trap/teto.png';
import cantor2 from '../../assets/images/playlist-trap/wiu.avif';
import cantor3 from '../../assets/images/playlist-trap/cabelinho.webp';
import cantor4 from '../../assets/images/playlist-trap/poze.jpg';
import cantor5 from '../../assets/images/playlist-trap/xama.avif';
import cantor6 from '../../assets/images/playlist-trap/l7.jpg';
import cantor7 from '../../assets/images/playlist-trap/matue.jpg';
import cantor8 from '../../assets/images/playlist-trap/Chefin.jpg';
import cantor9 from '../../assets/images/playlist-trap/Tasha-e-Tracie.webp';
import cantor10 from '../../assets/images/playlist-trap/kay.avif';
import cantor11 from '../../assets/images/playlist-trap/veigh.png';
import cantor12 from '../../assets/images/playlist-trap/borges.png';
import YouTube from 'react-youtube';

function PlaylistTrap () {
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
    { id: '  LhBTGI7AUfI', title: 'Minha Vida é um Filme', artist: 'Teto', image: cantor1 },
    { id: ' p03BWB5SN4M', title: 'Coração de Gelo', artist: 'WIU', image: cantor2 },
    { id: ' zgdQsLH7sDw', title: 'X1', artist: 'MC Cabelinho', image: cantor3 },
    { id: 'LwPlWd48Erw', title: "To Voando Alto", artist: 'Mc Poze do Rodo', image: cantor4 },
    { id: ' eycuj9jczm0', title: 'Luxúria', artist: 'Xamã', image: cantor5 },
    { id: ' uzSme3PRhZ0', title: 'Perdição', artist: 'L7NNON', image: cantor6 },
    { id: 'ZPcG9PCfagM', title: 'Máquina do Tempo', artist: 'Matuê', image: cantor7 },
    { id: ' T2BQG_8CFHI', title: '10 Carros', artist: 'Chefin', image: cantor8 },
    { id: 'FqhliaBW_rM', title: 'TANG', artist: 'Tasha e Trace', image: cantor9 },
    { id: ' 0lgAIjua6pA', title: 'Melhor Só', artist: 'KayBlack', image: cantor10 },
    { id: 'uGMQbSy_JTM', title: 'Novo Balanço', artist: 'Veigh', image: cantor11 },
    { id: ' ba969xr3krs', title: 'Loucura', artist: 'Borges', image: cantor12 },
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
  );  }
  
  export default PlaylistTrap;  