import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';
import YouTube from 'react-youtube';

import cantor1 from '../../assets/images/playlist-forro/gonzaga.png';
import cantor2 from '../../assets/images/playlist-forro/dominguinhos.jpg';
import cantor3 from '../../assets/images/playlist-forro/bicho-de-pe.jpg';
import cantor4 from '../../assets/images/playlist-forro/Elba-Ramalho.jpeg';
import cantor5 from '../../assets/images/playlist-forro/geraldo.avif';
import cantor6 from '../../assets/images/playlist-forro/alceu.webp';
import cantor7 from '../../assets/images/playlist-forro/FALAMANSA.jpg';
import cantor8 from '../../assets/images/playlist-forro/avioes.jpg';
import cantor9 from '../../assets/images/playlist-forro/dorgival.jpg';
import cantor10 from '../../assets/images/playlist-forro/joao_gomes.jpg';
import cantor11 from '../../assets/images/playlist-forro/ze-vaqueiro.png';
import cantor12 from '../../assets/images/playlist-forro/TrioVirgulino.avif';

function PlaylistForro() {
  // Estado para controlar o estado de reprodução de cada música
  const [isAudioPlaying, setIsAudioPlaying] = useState([false]); 
  const playerRefs = useRef([]); // Ref para os players do YouTube

  const avatarClass = ['objectFitCover', 'objectFitContain', 'none'];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);

  // Função para controlar a reprodução
  const handleAudioPlay = (index) => {
    const newIsPlaying = [...isAudioPlaying];

    // Verifica se o vídeo já está tocando
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

      // Reproduz a música clicada
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
    { id: 'zsFSHg2hxbc', title: 'Asa Branca', artist: 'Luiz Gonzaga', image: cantor1 },
    { id: 'TPm6YnDNyj0 ', title: 'Eu Só Quero um Xodó', artist: 'Dominguinhos', image: cantor2 },
    { id: 'TPm6YnDNyj0', title: 'Nosso Xote', artist: 'Bicho de Pé', image: cantor3 },
    { id: 'ni8S1ZTvVEc', title: "Ai Que Saudade D'Ocê", artist: 'Elba Ramalho', image: cantor4 },
    { id: 'Kh21uLSZQZQ', title: 'Moça Bonita', artist: 'Geraldo Azevedo', image: cantor5 },
    { id: 'uQ73O-ZM3k0', title: 'Tropicana', artist: 'Alceu Valença', image: cantor6 },
    { id: 'Bd76Bj0ostQ', title: 'Xote Dos Milagres', artist: 'Falamansa', image: cantor7 },
    { id: 'Y2qSvovEoT4', title: 'Coração', artist: 'Aviões do Forró', image: cantor8 },
    { id: '0-Vk65aZk7s', title: 'Destá ', artist: 'Dorgival Dantas', image: cantor9 },
    { id: 'H1DEczvTjgE', title: 'Meu Pedaço de Pecado', artist: 'João Gomes', image: cantor10 },
    { id: 'eihpkV7KSKo', title: 'Coladin', artist: 'Zé Vaqueiro', image: cantor11 },
    { id: 'E5omj3l_7UQ', title: 'Frevo Mulher', artist: 'Trio Virgulino', image: cantor12 },
  ];

  return (
    <>
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
                  onClick={() => handleAudioPlay(index)} // Passa o índice para a música clicada
                ></i>
                <i className="fa fa-forward musicControler"></i>
              </div>

              {/* Componente YouTube (ocultando o vídeo) */}
              <YouTube
                videoId={song.id}
                opts={opts}
                ref={(el) => (playerRefs.current[index] = el)} // Referência para o player
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
  export default PlaylistForro;  