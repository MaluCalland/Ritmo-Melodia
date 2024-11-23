import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-reggae/armandinho.webp';
import cantor2 from '../../assets/images/playlist-reggae/chimarruts.png';
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

function PlaylistReggae () {

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
          <p className='music-Head-Name'>Outra Vida</p>
          <p className='music-Artist-Name'>Armadinho</p>
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
          <p className='music-Head-Name'>Do Lado De Cá</p>
          <p className='music-Artist-Name'>Chimarruts</p>
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
          <p className='music-Head-Name'>A Estrada</p>
          <p className='music-Artist-Name'>Cidade Negra</p>
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
          <p className='music-Head-Name'>Me Namora</p>
          <p className='music-Artist-Name'>Edu Ribeiro</p>
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
          <p className='music-Head-Name'>Seja Para Mim</p>
          <p className='music-Artist-Name'>Maneva</p>
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
          <p className='music-Head-Name'>Um Anjo do Céu</p>
          <p className='music-Artist-Name'>Maskavo</p>
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
          <p className='music-Head-Name'>Quero Ser Feliz Também</p>
          <p className='music-Artist-Name'>Natiruts</p>
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
          <p className='music-Head-Name'>Meu Lugar</p>
          <p className='music-Artist-Name'>Onze:20</p>
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
          <p className='music-Head-Name'>Pescador de ilusões</p>
          <p className='music-Artist-Name'>O Rappa</p>
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
          <p className='music-Head-Name'>Aquele Lugar</p>
          <p className='music-Artist-Name'>Planta E Raiz</p>
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
          <p className='music-Head-Name'>Aonde Vai Chegar</p>
          <p className='music-Artist-Name'>Ponto de Equilíbrio</p>
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
          <p className='music-Head-Name'>Uma onda que passou</p>
          <p className='music-Artist-Name'>Tribo de Jah</p>
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
  
  export default PlaylistReggae;  