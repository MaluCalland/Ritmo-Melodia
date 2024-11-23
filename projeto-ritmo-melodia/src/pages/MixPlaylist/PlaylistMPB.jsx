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

function PlaylistMPB() {
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
          <p className='music-Head-Name'>Samba De Verão</p>
          <p className='music-Artist-Name'>Caetano Veloso</p>
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
          <p className='music-Head-Name'>Samurai</p>
          <p className='music-Artist-Name'>Djavan</p>
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
          <p className='music-Head-Name'>Tiro Ao Álvaro</p>
          <p className='music-Artist-Name'>Elis Regina</p>
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
          <p className='music-Head-Name'>Folhetim</p>
          <p className='music-Artist-Name'>Gal Costa</p>
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
          <p className='music-Head-Name'>Oba, Lá Vem Ela</p>
          <p className='music-Artist-Name'>Jorge Ben Jor</p>
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
          <p className='music-Head-Name'>Ainda Bem</p>
          <p className='music-Artist-Name'>Marisa Monte</p>
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
          <p className='music-Head-Name'>Poema</p>
          <p className='music-Artist-Name'>Ney Matogrosso</p>
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
          <p className='music-Head-Name'>Acenda o farol</p>
          <p className='music-Artist-Name'>Tim Maia</p>
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
          <p className='music-Head-Name'>Onde Anda Você</p>
          <p className='music-Artist-Name'>Toquinho & Vinícius</p>
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
          <p className='music-Head-Name'>Já Sei Namorar</p>
          <p className='music-Artist-Name'>Tribalistas</p>
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
          <p className='music-Head-Name'>Ai, Ai, Ai...</p>
          <p className='music-Artist-Name'>Vanessa Da Mata</p>
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
          <p className='music-Head-Name'>Telegrama</p>
          <p className='music-Artist-Name'>Zeca Baleiro</p>
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
  
  export default PlaylistMPB;  