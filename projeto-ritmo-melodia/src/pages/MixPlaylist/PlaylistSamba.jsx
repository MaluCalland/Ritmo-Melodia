import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-samba/raca-negra.jpg';
import cantor2 from '../../assets/images/playlist-samba/seu-jorge.webp';
import cantor3 from '../../assets/images/playlist-samba/Zeca Pagodinho.webp';
import cantor4 from '../../assets/images/playlist-samba/adorianbarbosa.jpg';
import cantor5 from '../../assets/images/playlist-samba/alcione.jpeg';
import cantor6 from '../../assets/images/playlist-samba/arlindooo.jpg';
import cantor7 from '../../assets/images/playlist-samba/beth.png';
import cantor8 from '../../assets/images/playlist-samba/diogo.avif';
import cantor9 from '../../assets/images/playlist-samba/elza.webp';
import cantor10 from '../../assets/images/playlist-samba/jorge-aragão.jpeg';
import cantor11 from '../../assets/images/playlist-samba/martinho.jpeg';
import cantor12 from '../../assets/images/playlist-samba/pauilinho.avif';

function PlaylistSamba () {

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
          <p className='music-Head-Name'>Cheia de Manias</p>
          <p className='music-Artist-Name'>Raça Negra</p>
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
          <p className='music-Head-Name'>Amiga da Minha Mulher</p>
          <p className='music-Artist-Name'>Seu Jorge</p>
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
          <p className='music-Head-Name'>Deixa A Vida Me Levar</p>
          <p className='music-Artist-Name'>Zeca Pagodinho</p>
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
          <p className='music-Head-Name'>Trem Das Onze</p>
          <p className='music-Artist-Name'>Adoniran Barbosa</p>
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
          <p className='music-Head-Name'>Não Deixe o Samba Morrer</p>
          <p className='music-Artist-Name'> Alcione</p>
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
          <p className='music-Head-Name'>Será Que É Amor</p>
          <p className='music-Artist-Name'>Arlindo Cruz</p>
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
          <p className='music-Head-Name'>Vou Festejar</p>
          <p className='music-Artist-Name'>Beth Carvalho</p>
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
          <p className='music-Head-Name'>Pé Na Areia</p>
          <p className='music-Artist-Name'>Diogo Nogueira</p>
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
          <p className='music-Head-Name'>Saltei De Banda</p>
          <p className='music-Artist-Name'>Elza Soares</p>
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
          <p className='music-Head-Name'>Partido alto</p>
          <p className='music-Artist-Name'>Jorge Aragão</p>
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
          <p className='music-Head-Name'>Disritmia</p>
          <p className='music-Artist-Name'>Martinho Da Vila</p>
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
          <p className='music-Head-Name'>Pecado capital</p>
          <p className='music-Artist-Name'>Paulinho Da Viola</p>
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
  
  export default PlaylistSamba;  