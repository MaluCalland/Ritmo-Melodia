// import { useRef, useState } from 'react';
// import '../../css/DesignPlaylist.css';

// import cantor1 from '../../assets/images/playlist-mpb/gonzaga.png';
// import cantor2 from '../../assets/images/playlist-mpb/eva.png';
// import cantor3 from '../../assets/images/playlist-mpb/chiclete-banana.png';
// import cantor4 from '../../assets/images/playlist-mpb/tim-balada.png';
// import cantor5 from '../../assets/images/playlist-mpb/psirico.png';
// import cantor6 from '../../assets/images/playlist-mpb/asa-aguia.jpg';
// import cantor7 from '../../assets/images/playlist-mpb/é-tchan.png';
// import cantor8 from '../../assets/images/playlist-mpb/leo-santana.png';
// import cantor9 from '../../assets/images/playlist-mpb/levanois.png';
// import cantor10 from '../../assets/images/playlist-mpb/netinho.png';
// import cantor11 from '../../assets/images/playlist-mpb/Ivete-Sangalo.webp';
// import cantor12 from '../../assets/images/playlist-mpb/claudia-leitte.png';

// function PlaylistMPB() {

//     const [currentMusicDetails, setCurrentMusicDetails] = useState({
//       songName: '',
//       songArtist: 'MPB',
//       songSrc: cancao1,
//       songAvatar: cantor1
//     })
  
//     //UseStates Variables
//     const [audioProgress, setAudioProgress] = useState(0);
//     const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//     const [musicIndex, setMusicIndex] = useState(0);
//     const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
//     const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  
//     const currentAudio = useRef()
  
//     const handleMusicProgressBar = (e)=>{
//       setAudioProgress(e.target.value);
//       currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
//     }
  
//     //Change Avatar Class
//     let avatarClass = ['objectFitCover','objectFitContain','none']
//     const [avatarClassIndex, setAvatarClassIndex] = useState(0)
//     const handleAvatar = ()=>{
//       if (avatarClassIndex >= avatarClass.length - 1) {
//         setAvatarClassIndex(0)
//       }else{
//         setAvatarClassIndex(avatarClassIndex + 1)
//       }
//     }
  
  
//     //Play Audio Function
//     const handleAudioPlay = ()=>{
//       if (currentAudio.current.paused) {
//         currentAudio.current.play();
//         setIsAudioPlaying(true)
//       }else{
//         currentAudio.current.pause();
//         setIsAudioPlaying(false)
//       }
//     }

//     const handleNextSong = ()=>{
//       if (musicIndex >= musicAPI.length - 1) {
//         let setNumber = 0;
//         setMusicIndex(setNumber);
//         updateCurrentMusicDetails(setNumber);
//       }else{
//         let setNumber = musicIndex + 1;
//         setMusicIndex(setNumber)
//         updateCurrentMusicDetails(setNumber);
//       }
//     }
  
//     const handlePrevSong = ()=>{
//       if (musicIndex === 0) {
//         let setNumber = musicAPI.length - 1;
//         setMusicIndex(setNumber);
//         updateCurrentMusicDetails(setNumber);
//       }else{
//         let setNumber = musicIndex - 1;
//         setMusicIndex(setNumber)
//         updateCurrentMusicDetails(setNumber);
//       }
//     }
  
//     const updateCurrentMusicDetails = (number)=>{
//       let musicObject = musicAPI[number];
//       currentAudio.current.src = musicObject.songSrc;
//       currentAudio.current.play();
//       setCurrentMusicDetails({
//         songName: musicObject.songName,
//         songArtist: musicObject.songArtist,
//         songSrc: musicObject.songSrc,
//         songAvatar: musicObject.songAvatar
//       })
//       setIsAudioPlaying(true);
//     }
  
//     const handleAudioUpdate = ()=>{
//       //Input total length of the audio
//       let minutes = Math.floor(currentAudio.current.duration / 60);
//       let seconds = Math.floor(currentAudio.current.duration % 60);
//       let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
//       setMusicTotalLength(musicTotalLength0);
  
//       //Input Music Current Time
//       let currentMin = Math.floor(currentAudio.current.currentTime / 60);
//       let currentSec = Math.floor(currentAudio.current.currentTime % 60);
//       let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
//       setMusicCurrentTime(musicCurrentT);
  
//       const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
//       setAudioProgress(isNaN(progress)? 0 : progress)
//     }
 
//     return (
//       <>
//       <div className="body-playlist">
//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Acenda o farol</p>
//           <p className='music-Artist-Name'>Tim Maia</p>
//           <img src={cantor1} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Onde Anda Você</p>
//           <p className='music-Artist-Name'>Toquinho</p>
//           <img src={cantor2} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Oba, Lá Vem Ela</p>
//           <p className='music-Artist-Name'>Jorge Ben Jor</p>
//           <img src={cantor3} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Samurai</p>
//           <p className='music-Artist-Name'>Djavan</p>
//           <img src={cantor4} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Exagerado</p>
//           <p className='music-Artist-Name'>Cazuza</p>
//           <img src={cantor5} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Ai, Ai, Ai...</p>
//           <p className='music-Artist-Name'>Vanessa Da Mata</p>
//           <img src={cantor6} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>All Star</p>
//           <p className='music-Artist-Name'>Nando Reis</p>
//           <img src={cantor7} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Samba De Verão</p>
//           <p className='music-Artist-Name'>Caetano Veloso</p>
//           <img src={cantor8} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Ainda Bem</p>
//           <p className='music-Artist-Name'>Marisa Monte</p>
//           <img src={cantor9} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Folhetim</p>
//           <p className='music-Artist-Name'>Gal Costa</p>
//           <img src={cantor10} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Já Sei Namorar</p>
//           <p className='music-Artist-Name'>Tribalistas</p>
//           <img src={cantor11} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="music-Container">
//           <p className='music-Head-Name'>Poema</p>
//           <p className='music-Artist-Name'>Ney Matogrosso</p>
//           <img src={cantor12} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//           <div className="musicControlers">
//             <i className='fa fa-backward musicControler' onClick={handlePrevSong}></i>
//             <i className={`fa ${isAudioPlaying ? 'fa-pause-circle' : 'fa-play-circle'} playBtn`} onClick={handleAudioPlay}></i>
//             <i className='fa fa-forward musicControler' onClick={handleNextSong}></i>
//           </div>
//         </div>
//       </div>
//       </div>
//       </>
//     );
//   }
  
//   export default PlaylistMPB;  