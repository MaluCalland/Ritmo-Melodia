import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

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

    const [currentMusicDetails, setCurrentMusicDetails] = useState({
      songName: '',
      songArtist: 'Forro',
      songAvatar: cantor1
    })
  
    //UseStates Variables
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
    const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  
    const currentAudio = useRef()
  
    const handleMusicProgressBar = (e)=>{
      setAudioProgress(e.target.value);
      currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
    }
  
    //Change Avatar Class
    let avatarClass = ['objectFitCover','objectFitContain','none']
    const [avatarClassIndex, setAvatarClassIndex] = useState(0)
    const handleAvatar = ()=>{
      if (avatarClassIndex >= avatarClass.length - 1) {
        setAvatarClassIndex(0)
      }else{
        setAvatarClassIndex(avatarClassIndex + 1)
      }
    }
  
  
    //Play Audio Function
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
  
    const updateCurrentMusicDetails = (number)=>{
      let musicObject = musicAPI[number];
      currentAudio.current.src = musicObject.songSrc;
      currentAudio.current.play();
      setCurrentMusicDetails({
        songName: musicObject.songName,
        songArtist: musicObject.songArtist,
        songSrc: musicObject.songSrc,
        songAvatar: musicObject.songAvatar
      })
      setIsAudioPlaying(true);
    }
  
    const handleAudioUpdate = ()=>{
      //Input total length of the audio
      let minutes = Math.floor(currentAudio.current.duration / 60);
      let seconds = Math.floor(currentAudio.current.duration % 60);
      let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
      setMusicTotalLength(musicTotalLength0);
  
      //Input Music Current Time
      let currentMin = Math.floor(currentAudio.current.currentTime / 60);
      let currentSec = Math.floor(currentAudio.current.currentTime % 60);
      let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
      setMusicCurrentTime(musicCurrentT);
  
      const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
      setAudioProgress(isNaN(progress)? 0 : progress)
    }
 
    return (
      <>
      <div className="body-playlist">
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Asa Branca</p>
          <p className='music-Artist-Name'>Luiz Gonazaga</p>
          <img src={cantor1} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Eu Só Quero um Xodó</p>
          <p className='music-Artist-Name'>Dominguinhos</p>
          <img src={cantor2} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Nosso Xote</p>
          <p className='music-Artist-Name'>Bicho de Pé</p>
          <img src={cantor3} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Ai Que Saudade D'Ocê</p>
          <p className='music-Artist-Name'>Elba Ramalho</p>
          <img src={cantor4} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Moça Bonita</p>
          <p className='music-Artist-Name'>Geraldo Azevedo</p>
          <img src={cantor5} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Tropicana</p>
          <p className='music-Artist-Name'>Alceu Valença</p>
          <img src={cantor6} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Xote Dos Milagres</p>
          <p className='music-Artist-Name'>Falamansa</p>
          <img src={cantor7} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Coração</p>
          <p className='music-Artist-Name'>Aviões do Forró</p>
          <img src={cantor8} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Destá</p>
          <p className='music-Artist-Name'>Dorgival Dantas</p>
          <img src={cantor9} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Meu Pedaço de Pecado</p>
          <p className='music-Artist-Name'>João Gomes</p>
          <img src={cantor10} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Coladin</p>
          <p className='music-Artist-Name'>Zé Vaqueiro</p>
          <img src={cantor11} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-Container">
          <p className='music-Head-Name'>Frevo Mulher</p>
          <p className='music-Artist-Name'>Trio Virgulino</p>
          <img src={cantor12} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
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
  
  export default PlaylistForro;  