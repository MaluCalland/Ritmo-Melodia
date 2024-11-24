import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';


import cantor1 from '../../assets/images/playlist-funk/marcinho.jpg';
import cantor2 from '../../assets/images/playlist-funk/leozinho.jpg';
import cantor3 from '../../assets/images/playlist-funk/livinho.webp';
import cantor4 from '../../assets/images/playlist-funk/sapao.jpg';
import cantor5 from '../../assets/images/playlist-funk/dennis.jpg';
import cantor6 from '../../assets/images/playlist-funk/don-juan.webp';
import cantor7 from '../../assets/images/playlist-funk/delano.jpg';
import cantor8 from '../../assets/images/playlist-funk/kevin.png';
import cantor9 from '../../assets/images/playlist-funk/FBC.webp';
import cantor10 from '../../assets/images/playlist-funk/zaac.webp';
import cantor11 from '../../assets/images/playlist-funk/kevin.jpeg';
import cantor12 from '../../assets/images/playlist-funk/claudinho-e-buchecha.jpg';


function PlaylistFunk() {


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


    return (
      <>
      <div className="body-playlist">
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Glamurosa</p>
          <p className='music-Artist-Name'>MC Marcinho, DJ Marlboro</p>
          <img src={cantor1} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Ela Só Pensa em Beijar</p>
          <p className='music-Artist-Name'>MC Leozinho, DJ Marlboro </p>
          <img src={cantor2} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Hoje Eu Vou Parar Na Gaiola</p>
          <p className='music-Artist-Name'>Mc Livinho, Rennan da Penha</p>
          <img src={cantor3} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Vou Desafiar Você</p>
          <p className='music-Artist-Name'>Mc Sapão, DJ Detonna</p>
          <img src={cantor4} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Só Você</p>
          <p className='music-Artist-Name'>DENNIS, MC G15</p>
          <img src={cantor5} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Amar Amei</p>
          <p className='music-Artist-Name'>Mc Donn Juan</p>
          <img src={cantor6} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Na Ponta Ela Fica</p>
          <p className='music-Artist-Name'>Delano</p>
          <img src={cantor7} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Pra Inveja é Tchau</p>
          <p className='music-Artist-Name'>MC Kevin e Mc Davi</p>
          <img src={cantor8} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Delírios</p>
          <p className='music-Artist-Name'>FBC, VHOOR, Djair Voz Cristalina</p>
          <img src={cantor9} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Bumbum Granada</p>
          <p className='music-Artist-Name'>Mc's Zaac & Jerry Smith</p>
          <img src={cantor10} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Evoluiu</p>
          <p className='music-Artist-Name'>MC Kevin o Chris</p>
          <img src={cantor11} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Amor de Chocolate</p>
          <p className='music-Artist-Name'>Claudinho & Buchecha</p>
          <img src={cantor12} className={avatarClass[avatarClassIndex]}  alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' ></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' ></i>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }
 
  export default PlaylistFunk;  