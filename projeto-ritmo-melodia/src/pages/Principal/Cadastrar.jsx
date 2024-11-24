import React, { useState } from 'react';
import '../../css/Cadastro.css';  // Estilos do seu formulário

const Cadastrar = () => {
  // Estados para armazenar os valores dos campos de entrada
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Função para manipular o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validações
    if (email !== confirmEmail) {
      setError('Os e-mails não coincidem.');
      return;
    }
  
    if (password.length < 6) {
      setError('A senha precisa ter no mínimo 6 caracteres.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5173/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
  
      const data = await response.json(); // Pega a resposta JSON
  
      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
      } else {
        // Exibe a mensagem de erro do backend
        setError(data.message || 'Erro ao cadastrar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setError('Erro ao cadastrar. Tente novamente mais tarde.');
    }
  };
  
  return (
    <div className="painelCadastro">
      <form onSubmit={handleSubmit}>
        <h1 className="tituloCadastro">Faça seu Cadastro</h1>

        {error && <p className="error">{error}</p>}

        <p>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="email"
            placeholder="Informe seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="email"
            placeholder="Confirme seu E-mail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Crie sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p>
          <button type="submit">Salvar</button>
        </p>
      </form>
    </div>
  );
};

export default Cadastrar;