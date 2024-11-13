import React from 'react'

import '../../css/Cadastro.css'

const Cadastrar = () => {
  return (
    <>
    <div className='painelCadastro'>
      <form>
        <h1 className="tituloCadastro">Faça seu Cadastro</h1>
        <p>
          <input
            placeholder='Nome'>
          </input>
        </p>
        <p>
          <input
            placeholder='Informe seu E-mail'
          ></input>
        </p>
        <p>
          <input
            placeholder='Confirme seu e-mail'></input>
        </p>
      </form>
    </div>
    </>

  )
}

export default Cadastrar
