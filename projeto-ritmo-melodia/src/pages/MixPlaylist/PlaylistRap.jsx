import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-rap/bacoexudoblues.webp';
import cantor2 from '../../assets/images/playlist-rap/bk.jpg';
import cantor3 from '../../assets/images/playlist-rap/blackaline1.jpg';
import cantor4 from '../../assets/images/playlist-rap/conecrew.jpg';
import cantor5 from '../../assets/images/playlist-rap/delacruz.webp';
import cantor6 from '../../assets/images/playlist-rap/djonga.jpg';
import cantor7 from '../../assets/images/playlist-rap/emicida.png';
import cantor8 from '../../assets/images/playlist-rap/filiperet.png';
import cantor9 from '../../assets/images/playlist-rap/Lourena.jpg';
import cantor10 from '../../assets/images/playlist-rap/luiz lins.jpg';
import cantor11 from '../../assets/images/playlist-rap/rael.jpeg';
import cantor12 from '../../assets/images/playlist-rap/yagooproprio.jpg';

function PlaylistRap () {
  
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
          <p className='music-Head-Name'>Me Desculpa Jay Z</p>
          <p className='music-Artist-Name'>Baco Exu do Blues</p>
          <img src={cantor1} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Planos</p>
          <p className='music-Artist-Name'>BK</p>
          <img src={cantor2} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Como Eu Te Quero</p>
          <p className='music-Artist-Name'>Black Alien</p>
          <img src={cantor3} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Rainha da Pista</p>
          <p className='music-Artist-Name'>ConeCrew Diretoria </p>
          <img src={cantor4} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Sunshine</p>
          <p className='music-Artist-Name'>Delacruz</p>
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
          <p className='music-Head-Name'>LEAL</p>
          <p className='music-Artist-Name'>Djonga</p>
          <img src={cantor6} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Eu Gosto Dela</p>
          <p className='music-Artist-Name'>Emicida</p>
          <img src={cantor7} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Libertários Não Morrem</p>
          <p className='music-Artist-Name'>Filipe Ret</p>
          <img src={cantor8} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Dizeres</p>
          <p className='music-Artist-Name'>Lourena</p>
          <img src={cantor9} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Saudade</p>
          <p className='music-Artist-Name'>Luiz Lins</p>
          <img src={cantor10} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Envolvidão</p>
          <p className='music-Artist-Name'>Rael</p>
          <img src={cantor11} className={avatarClass[avatarClassIndex]}alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Imprevisto</p>
          <p className='music-Artist-Name'>Yago Oproprio</p>
          <img src={cantor12} className={avatarClass[avatarClassIndex]} alt="song Avatar" id='songAvatar'/>
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
  
  export default PlaylistRap;  