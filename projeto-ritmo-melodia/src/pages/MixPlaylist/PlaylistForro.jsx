import React from 'react'
import imagemForro from '../../assets/forro.jpg'; 
import '../../css/DesignPlaylist.css'

const PlaylistForro = () => {

  return (
    <>
    <div className='total'>
      <div className='musica-1'>
        <img src={imagemForro}></img>
        <div className='descricao-forro'>
          <h2 className="">Nome da Música</h2>
          <i>Nome Artista</i>
        </div>
        <div className="duracao-musica">
          <div className='barra'>
            <progress value='0' max='1'></progress>
            <div className="ponto"></div>
          </div>
        </div>
      </div>
          <div className='musica-1'>
          <img src={imagemForro}></img>
          <div className='descricao-forro'>
            <h2 className="">Nome da Música</h2>
            <i>Nome Artista</i>
          </div>
          <div className="duracao-musica">
            <div className='barra'>
              <progress value='0' max='1'></progress>
              <div className="ponto"></div>
            </div>
          </div>
        </div>
          <div className='musica-1'>
          <img src={imagemForro}></img>
          <div className='descricao-forro'>
            <h2 className="">Nome da Música</h2>
            <i>Nome Artista</i>
          </div>
          <div className="duracao-musica">
            <div className='barra'>
              <progress value='0' max='1'></progress>
              <div className="ponto"></div>
            </div>
          </div>
        </div>
        </div>
         < div className='musica-1'>
          <img src={imagemForro}></img>
          <div className='descricao-forro'>
            <h2 className="">Nome da Música</h2>
            <i>Nome Artista</i>
          </div>
          <div className="duracao-musica">
            <div className='barra'>
              <progress value='0' max='1'></progress>
              <div className="ponto"></div>
            </div>
        </div>
        
      </div>
      </>
  )
}

export default PlaylistForro
