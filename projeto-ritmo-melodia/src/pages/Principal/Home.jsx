import React from 'react';
import { Outlet , useNavigate} from 'react-router-dom';

import imagemAxe from '../../assets/axe.webp'; 
import imagemForro from '../../assets/forro.jpg'; 
import imagemFunk from '../../assets/funk.webp'; 
import imagemMPB from '../../assets/mpb.png'; 
import imagemPagode from '../../assets/pagode.jpg'; 
import imagemPop from '../../assets/pop.webp'; 
import imagemRap from '../../assets/rap.png'; 
import imagemReggae from '../../assets/reggae.jpg'; 
import imagemRock from '../../assets/rock.webp'; 
import imagemSamba from '../../assets/samba.png'; 
import imagemSertanejo from '../../assets/sertanejo.png'; 
import imagemTrap from '../../assets/trap.jpg'; 


const Home = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className='faixaInicial'>
            <h1 className='tituloHome'>Ritmo & Melodia</h1>
            <p className='subtituloHome'>Ritmos que ecoam, vozes que emocionam. Venha explorar o melhor da música brasileira!</p>
        </div>
        <div>
            <form className='barraPesquisa' >
                <input className='inputPesquisa' type="text" name="query" placeholder="Faça sua pesquisa"></input>
                <button className='enviarPequisa' type="submit">Buscar</button>
            </form>
        </div>

        <div className='paginasHome'>
            <nav className='flex-conteiner-home'>
                <button className='flex-item-home' onClick={() => navigate('/musicas/mpb')}>
                    <img src={imagemMPB}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/axe')}>
                    <img src={imagemAxe}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/forro')}>
                    <img src={imagemForro}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>            
                <button className='flex-item-home' onClick={() => navigate('/musicas/funk')}>
                    <img src={imagemFunk}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/trap')}>
                    <img src={imagemTrap}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/rap')}>
                    <img src={imagemRap}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/reggae')}>
                    <img src={imagemReggae}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/samba')}>
                    <img src={imagemSamba}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/pagode')}>
                    <img src={imagemPagode}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/rock')}>
                    <img src={imagemRock}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/pop')}>
                    <img src={imagemPop}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
                <button className='flex-item-home' onClick={() => navigate('/musicas/sertanejo')}>
                    <img src={imagemSertanejo}
                        alt="Imagem do cantor Djavan"
                        width="403"
                        height="303">
                    </img>
                </button>
            </nav>
        </div>
            
        <Outlet/>
        </>
    )
  };

export default Home
