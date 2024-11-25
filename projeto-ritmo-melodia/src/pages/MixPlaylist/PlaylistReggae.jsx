import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-reggae/armandinho.webp';
import cantor2 from '../../assets/images/playlist-reggae/chimarruts.jpg';
import cantor3 from '../../assets/images/playlist-reggae/cidadenegra.png';
import cantor4 from '../../assets/images/playlist-reggae/eduribeiro.webp';
import cantor5 from '../../assets/images/playlist-reggae/manevaa.jpg';
import cantor6 from '../../assets/images/playlist-reggae/maskavo.jpg';
import cantor7 from '../../assets/images/playlist-reggae/natiruts.jpg';
import cantor8 from '../../assets/images/playlist-reggae/onze20.webp';
import cantor9 from '../../assets/images/playlist-reggae/orappa.jpg';
import cantor10 from '../../assets/images/playlist-reggae/plantaeraiz.png';
import cantor11 from '../../assets/images/playlist-reggae/pontodeequilibrio.jpg';
import cantor12 from '../../assets/images/playlist-reggae/tribo-de-jah.jpg';
import YouTube from 'react-youtube';

function PlaylistReggae () {
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
    { id: '6BaCNYU2YR0', title: 'Outra Vida', artist: 'Armadinho', image: cantor1 },
    { id: 'JQlKMX2LLHg', title: 'Do Lado De Cá', artist: 'Chimarruts', image: cantor2 },
    { id: 'xMQso-BWFmA', title: 'A Estrada', artist: 'Cidade Negra', image: cantor3 },
    { id: '8tw5s74zV-k', title: "Me Namora", artist: 'Edu Ribeiro', image: cantor4 },
    { id: 'nGGxZe3I2DE', title: 'Seja Para Mim', artist: 'Maneva', image: cantor5 },
    { id: 'kCE2d33yMNA', title: 'Um Anjo do Céu', artist: 'Maskavo', image: cantor6 },
    { id: 'i1Nm-MJ313w', title: 'Quero Ser Feliz Também', artist: 'Natiruts', image: cantor7 },
    { id: 'NcPtnX_7PrM', title: 'Meu Lugar', artist: 'Onze:20', image: cantor8 },
    { id: 'RU6UQgo7VZw', title: 'Pescador de ilusões ', artist: 'O Rappa', image: cantor9 },
    { id: 'Cl6E7wWtxSM', title: 'Aquele Lugar', artist: 'Planta E Raiz', image: cantor10 },
    { id: 'm9EN6CkMOs8', title: 'Aonde Vai Chegar', artist: 'Ponto de Equilíbrio', image: cantor11 },
    { id: 'WMo34JnCXOw', title: 'Uma onda que passou', artist: 'Tribo de Jah', image: cantor12 },
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
  
  export default PlaylistReggae;  