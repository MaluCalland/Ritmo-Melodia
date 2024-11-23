import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-pagode/belo.jpg';
import cantor2 from '../../assets/images/playlist-pagode/bom.jpg';
import cantor3 from '../../assets/images/playlist-pagode/exalta.jpg';
import cantor4 from '../../assets/images/playlist-pagode/ferrugem.avif';
import cantor5 from '../../assets/images/playlist-pagode/Fundo.jpg';
import cantor6 from '../../assets/images/playlist-pagode/marvilla.jpg';
import cantor7 from '../../assets/images/playlist-pagode/menos-mais.jpg';
import cantor8 from '../../assets/images/playlist-pagode/Pericles.jpg';
import cantor9 from '../../assets/images/playlist-pagode/pixote.webp';
import cantor10 from '../../assets/images/playlist-pagode/revelacao.png';
import cantor11 from '../../assets/images/playlist-pagode/thiaguinho.jpg';
import cantor12 from '../../assets/images/playlist-pagode/turma.jpg';

function PlaylistPagode () {
  
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);

  const currentAudio = useRef()

  let avatarClass = ['objectFitCover','objectFitContain','none']
  const [avatarClassIndex, setAvatarClassIndex] = useState(0)

  const handleAudioPlay = ()=>{
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    }else{
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const handleNextSong = ()=>{
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const handlePrevSong = ()=>{
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }
 
    return (
      <>
      <div className="body-playlist">
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Pura Adrenalina</p>
          <p className='music-Artist-Name'>Belo</p>
          <img src={cantor1} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Patricinha de Olho Azul</p>
          <p className='music-Artist-Name'>Bom Gosto</p>
          <img src={cantor2} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Tá Vendo Aquela Lua</p>
          <p className='music-Artist-Name'>Exaltasamba</p>
          <img src={cantor3} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Interessante</p>
          <p className='music-Artist-Name'>Ferrugem</p>
          <img src={cantor4} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>O Show Tem Que Continuar </p>
          <p className='music-Artist-Name'>Grupo Fundo de Quintal</p>
          <img src={cantor5} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>A Pagodeira</p>
          <p className='music-Artist-Name'>Marvilla</p>
          <img src={cantor6} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Coração Partido</p>
          <p className='music-Artist-Name'>Grupo Menos É Mais</p>
          <img src={cantor7} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Até Que Durou</p>
          <p className='music-Artist-Name'>Péricles</p>
          <img src={cantor8} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Mande um Sinal</p>
          <p className='music-Artist-Name'>Pixote</p>
          <img src={cantor9} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Ô Queiroz</p>
          <p className='music-Artist-Name'>Grupo Revelação</p>
          <img src={cantor10} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Falta Você</p>
          <p className='music-Artist-Name'>Thiaguinho</p>
          <img src={cantor11} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Lancinho</p>
          <p className='music-Artist-Name'>Turma do Pagode</p>
          <img src={cantor12} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }
  
  export default PlaylistPagode;  