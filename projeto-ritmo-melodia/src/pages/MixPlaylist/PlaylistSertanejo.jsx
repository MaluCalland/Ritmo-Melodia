import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/playlist-sertanejo/simone-mendes.webp';
import cantor2 from '../../assets/images/playlist-sertanejo/marilia.jpg';
import cantor3 from '../../assets/images/playlist-sertanejo/maiaraemaraisa.webp';
import cantor4 from '../../assets/images/playlist-sertanejo/chitaozinho-xororo.webp';
import cantor5 from '../../assets/images/playlist-sertanejo/cristiaanoaraujo.webp';
import cantor6 from '../../assets/images/playlist-sertanejo/daniel.webp';
import cantor7 from '../../assets/images/playlist-sertanejo/gusttavo-lima1.jpg';
import cantor8 from '../../assets/images/playlist-sertanejo/Jorge-Mateus.jpg';
import cantor9 from '../../assets/images/playlist-sertanejo/leaandroeleonardo.avif';
import cantor10 from '../../assets/images/playlist-sertanejo/sergioreis.jpg';
import cantor11 from '../../assets/images/playlist-sertanejo/brunoemarrone.jpg';
import cantor12 from '../../assets/images/playlist-sertanejo/zeze-di-camargo-luciano.webp';

function PlaylistSertanejo () {

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
          <p className='music-Head-Name'>Erro Gostoso</p>
          <p className='music-Artist-Name'>Simone Mendes</p>
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
          <p className='music-Head-Name'>Como Faz Com Ela</p>
          <p className='music-Artist-Name'>Marília Mendonça</p>
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
          <p className='music-Head-Name'>10%</p>
          <p className='music-Artist-Name'>Maiara & Maraisa</p>
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
          <p className='music-Head-Name'>Evidências</p>
          <p className='music-Artist-Name'>Chitãozinho & Xororó</p>
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
          <p className='music-Head-Name'>Maus Bocados</p>
          <p className='music-Artist-Name'>Cristiano Araújo</p>
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
          <p className='music-Head-Name'>O menino da porteira</p>
          <p className='music-Artist-Name'>Daniel</p>
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
          <p className='music-Head-Name'>Cem Mil</p>
          <p className='music-Artist-Name'>Gusttavo Lima</p>
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
          <p className='music-Head-Name'>Paredes</p>
          <p className='music-Artist-Name'>Jorge & Mateus</p>
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
          <p className='music-Head-Name'>Pense em mim</p>
          <p className='music-Artist-Name'>Leandro & Leonardo</p>
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
          <p className='music-Head-Name'>Rei do Gado</p>
          <p className='music-Artist-Name'>Sérgio Reis</p>
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
          <p className='music-Head-Name'>Na Conta da Loucura</p>
          <p className='music-Artist-Name'>Bruno & Marrone</p>
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
          <p className='music-Head-Name'>É o Amor</p>
          <p className='music-Artist-Name'>Zezé Di Camargo & Luciano</p>
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
  
export default PlaylistSertanejo;  