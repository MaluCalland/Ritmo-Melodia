import React from 'react';
import {useNavigate} from 'react-router-dom';

import imagemAxe from '../../assets/images/axe.webp'; 
import imagemForro from '../../assets/images/forro.jpg'; 
import imagemFunk from '../../assets/images/funk.webp'; 
import imagemMPB from '../../assets/images/mpb.png'; 
import imagemPagode from '../../assets/images/pagode.jpg'; 
import imagemPop from '../../assets/images/pop.webp'; 
import imagemRap from '../../assets/images/rap.png'; 
import imagemReggae from '../../assets/images/reggae.jpg'; 
import imagemRock from '../../assets/images/rock.webp'; 
import imagemSamba from '../../assets/images/samba.png'; 
import imagemSertanejo from '../../assets/images/sertanejo.png'; 
import imagemTrap from '../../assets/images/trap.jpg'; 

import "../../css/Home.css"

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
        <div >
            <p class='tituloHome'>Ritmo & Melodia</p>
            <p className='subtituloHome'>Ritmos que ecoam, vozes que emocionam. Venha explorar o melhor da música brasileira!</p>
        </div>

        <div className='paginasHome'>
            <nav className='flex-conteiner-home'>
                <button className='flex-item-home' onClick={() => navigate('/musicas/mpb')}>
                    <div className="image-container">
                        <img src={imagemMPB} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">MPB</p>
                    </div>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/axe')}>
                    <div className="image-container">
                        <img src={imagemAxe} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">AXÉ</p>
                    </div>    
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/forro')}>
                    <div className="image-container">
                        <img src={imagemForro} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">FORRÓ</p>
                    </div>    
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/funk')}>
                    <div className="image-container">
                        <img src={imagemFunk} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">FUNK</p>
                    </div>    
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/trap')}>
                    <div className="image-container">
                        <img src={imagemTrap} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">TRAP</p>
                    </div> 
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/rap')}>
                        <div className="image-container">
                        <img src={imagemRap} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">RAP</p>
                    </div> 
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/reggae')}>
                    <div className="image-container">
                        <img src={imagemReggae} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">REGGAE</p>
                    </div> 
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/samba')}>
                    <div className="image-container">
                        <img src={imagemSamba} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">SAMBA</p>
                    </div> 
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/pagode')}>
                    <div className="image-container">
                        <img src={imagemPagode} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">PAGODE</p>
                    </div> 
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/rock')}>
                    <div className="image-container">
                        <img src={imagemRock} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">ROCK</p>
                    </div> 
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/pop')}>
                    <div className="image-container">
                        <img src={imagemPop} alt="Imagem do cantor Djavan" />
                        <p className="genre-name">POP</p>
                    </div> 
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/sertanejo')}>
                    <div className="image-container">
                        <img src={imagemSertanejo} alt="Imagem Marília Mendonça" />
                        <p className="genre-name">SERTANEJO</p>
                    </div> 
                </button>
            </nav>
        </div>
        </>
    )
};

export default Home