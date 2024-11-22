// import { useRef, useState } from 'react';
// import '../../css/DesignPlaylist.css';

// import cantor1 from '../../assets/images/playlist-pop/gonzaga.png';
// import cantor2 from '../../assets/images/playlist-pop/eva.png';
// import cantor3 from '../../assets/images/playlist-pop/chiclete-banana.png';
// import cantor4 from '../../assets/images/playlist-pop/tim-balada.png';
// import cantor5 from '../../assets/images/playlist-pop/psirico.png';
// import cantor6 from '../../assets/images/playlist-pop/asa-aguia.jpg';
// import cantor7 from '../../assets/images/playlist-pop/é-tchan.png';
// import cantor8 from '../../assets/images/playlist-pop/leo-santana.png';
// import cantor9 from '../../assets/images/playlist-pop/levanois.png';
// import cantor10 from '../../assets/images/playlist-pop/netinho.png';
// import cantor11 from '../../assets/images/playlist-pop/Ivete-Sangalo.webp';
// import cantor12 from '../../assets/images/playlist-pop/claudia-leitte.png';

// function PlaylistPop() {

//     const [currentMusicDetails, setCurrentMusicDetails] = useState({
//       songName: '',
//       songArtist: 'Pop',
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
  
//     const musicAPI = [
//       { songName: 'Chasing', songArtist: 'NEFFEX', songSrc: cancao1, songAvatar: cantor1},
//       { songName: 'AURORA - Runaway', songArtist: 'Aurora Aksnes', songSrc: cancao2, songAvatar: cantor2},
//       { songName: 'Catch Me If I Fall', songArtist: 'TEGNENT', songSrc: cancao3, songAvatar: cantor3 }
//     ]
  
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
//           <p className='music-Head-Name'>Olha a Onda</p>
//           <p className='music-Artist-Name'>Tchakabum</p>
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
//           <p className='music-Head-Name'>Eva</p>
//           <p className='music-Artist-Name'>Banda Eva</p>
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
//           <p className='music-Head-Name'>100% Você</p>
//           <p className='music-Artist-Name'>Chiclete Com Banana</p>
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
//           <p className='music-Head-Name'>Beija-Flor</p>
//           <p className='music-Artist-Name'>Tim Balada</p>
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
//           <p className='music-Head-Name'>Lepo Lepo</p>
//           <p className='music-Artist-Name'>Psirico</p>
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
//           <p className='music-Head-Name'>Não Tem Lua</p>
//           <p className='music-Artist-Name'>Asa de Águia</p>
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
//           <p className='music-Head-Name'>Ralando O Tchan</p>
//           <p className='music-Artist-Name'>É O Tchan</p>
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
//           <p className='music-Head-Name'>Zona de Perigo</p>
//           <p className='music-Artist-Name'>Léo Santana</p>
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
//           <p className='music-Head-Name'>Liga da Justiça</p>
//           <p className='music-Artist-Name'>Leva Noiz</p>
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
//           <p className='music-Head-Name'>Milla</p>
//           <p className='music-Artist-Name'>Netinho</p>
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
//           <p className='music-Head-Name'>Macetando</p>
//           <p className='music-Artist-Name'>Ivete</p>
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
//           <p className='music-Head-Name'>Largadinho</p>
//           <p className='music-Artist-Name'>Claudia Leitte</p>
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
  
//   export default PlaylistPop;  