import { useRef, useState } from 'react';
import '../../css/DesignPlaylist.css';

import cantor1 from '../../assets/images/samba.png';
import cantor2 from '../../assets/images/axe.webp';
import cantor3 from '../../assets/images/forro.jpg';
import cantor4 from '../../assets/images/funk.webp';

import cancao1 from '../../assets/songs/Chasing - NEFFEX.mp3';
import cancao2 from '../../assets/songs/AURORA - Runaway (Lyrics).mp3';
import cancao3 from '../../assets/songs/Baby doll [ slowed + reverb ] __ meet bros ,Kanika Kapoor __ jr santu.mp3';
import cancao4 from '../../assets/songs/Catch Me If I Fall - NEFFEX.mp3';

function PlaylistSamba () {

    const [currentMusicDetails, setCurrentMusicDetails] = useState({
      songName: '',
      songArtist: 'Samba',
      songSrc: cancao1,
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
  
    const musicAPI = [
      { songName: 'Chasing', songArtist: 'NEFFEX', songSrc: cancao1, songAvatar: cantor1},
      { songName: 'AURORA - Runaway', songArtist: 'Aurora Aksnes', songSrc: cancao2, songAvatar: cantor2},
      { songName: 'Catch Me If I Fall', songArtist: 'TEGNENT', songSrc: cancao3, songAvatar: cantor3 }
    ]
  
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
      <div className="container">
        <audio src={cancao1} ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className='musicPlayer'></p>
          <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
          <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
          <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
          <div className="musicTimerDiv">
            <p className='musicCurrentTime'>{musicCurrentTime}</p>
            <p className='musicTotalLenght'>{musicTotalLength}</p>
          </div>
          <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
          <div className="musicControlers">
            <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default PlaylistSamba;  