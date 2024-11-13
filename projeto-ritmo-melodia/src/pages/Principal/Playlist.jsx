import React, { useState } from 'react'
import '../../css/Playlist.css'
import PlaylistAxe from '../MixPlaylist/PlaylistAxe'

const Playlist = () => {

  //armazenar lista de itens
  const [itens, setItens] = useState([
    {id: 1, src: PlaylistAxe(), categoria: 'Axé'},
    {id: 2, nome: "Forró", categoria: 'Forró'},
    {id: 3, nome: "Funk", categoria: 'Funk'},
    {id: 4, nome: "MPB", categoria: 'MPB'},
    {id: 5, nome: "Pagode", categoria: 'Pagode'},
    {id: 6, nome: "Pop", categoria: 'Pop'},
    {id: 7, nome: "Rap", categoria: 'Rap'},
    {id: 8, nome: "Reggae", categoria: 'Reggae'},
    {id: 9, nome: "Rock", categoria: 'Rock'},
    {id: 10, nome: "Samba", categoria: 'Samba'},
    {id: 11, nome: "Sertanejo", categoria: 'Sertanejo'},
    {id: 12, nome: "Trap", categoria: 'Trap'},
  ]);

  // Estado para armazenar a categoria selecionada
  const [filtro, setFiltro] = useState('todas');

   // Função para filtrar os itens com base na categoria selecionada
  const itensFiltrados = filtro === 'todas'
  ? itens
  : itens.filter(item => item.categoria === filtro)

  return (
    <div>
      <h1 className='tituloPlaylist'>Filtro de Itens</h1>

      <div className='buttonCategoria'>
      {/* Radio buttons para escolher a categoria */}
      <button className='buttonItem'
          onClick={() => setFiltro('todas')}
          style={{ backgroundColor: filtro === 'todas' ? 'lightblue' : '' }}
        >
          Todas
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Axé')}
          style={{ backgroundColor: filtro === 'Axé' ? 'lightblue' : '' }}
        >
          Axé
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Forró')}
          style={{ backgroundColor: filtro === 'Forró' ? 'lightblue' : '' }}
        >
          Forró
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Funk')}
          style={{ backgroundColor: filtro === 'Funk' ? 'lightblue' : '' }}
        >
          Funk
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('MPB')}
          style={{ backgroundColor: filtro === 'MPB' ? 'lightblue' : '' }}
        >
          MPB
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Pagode')}
          style={{ backgroundColor: filtro === 'Pagode' ? 'lightblue' : '' }}
        >
          Pagode
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Pop')}
          style={{ backgroundColor: filtro === 'Pop' ? 'lightblue' : '' }}
        >
          Pop
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Reggae')}
          style={{ backgroundColor: filtro === 'Reggae' ? 'lightblue' : '' }}
        >
          Reggae
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Rock')}
          style={{ backgroundColor: filtro === 'Rock' ? 'lightblue' : '' }}
        >
          Rock
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Rap')}
          style={{ backgroundColor: filtro === 'Rap' ? 'lightblue' : '' }}
        >
          Rap
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Samba')}
          style={{ backgroundColor: filtro === 'Samba' ? 'lightblue' : '' }}
        >
          Samba
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Sertanejo')}
          style={{ backgroundColor: filtro === 'Sertanejo' ? 'lightblue' : '' }}
        >
          Sertanejo
        </button>
        <button className='buttonItem'
          onClick={() => setFiltro('Trap')}
          style={{ backgroundColor: filtro === 'Trap' ? 'lightblue' : '' }}
        >
          Trap
        </button>

      </div>
      {/* Exibindo os itens filtrados */}
      <ul>
        {itensFiltrados.map(item => (
          <li key={item.id}>{item.src}</li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
