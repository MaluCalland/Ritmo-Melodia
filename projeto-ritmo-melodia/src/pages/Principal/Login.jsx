import { FaUser, FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Login.css";

const Login =  () => {

  const [username, setUsername] = useState("");  // Gerencia o valor do email
  const [password, setPassword] = useState("");  // Gerencia o valor da senha

  const navigate = useNavigate();  // Navegação entre páginas

  // Função para enviar o formulário
  const handleSubmit = async (event) => {
    event.preventDefault();  // Evita que a página seja recarregada ao enviar o formulário
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Faça seu Login</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={username}  // Vincula o valor do input ao estado
            onChange={(e) => setUsername(e.target.value)}  // Atualiza o estado ao digitar
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}  // Vincula o valor do input ao estado
            onChange={(e) => setPassword(e.target.value)}  // Atualiza o estado ao digitar
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <p>
            <a href="#">Esqueceu a senha?</a>
          </p>
        </div>

        <p><button type="submit">Entrar</button></p>

        <div className="signup-link">
          <p>Não tem uma conta?</p>
          <p>
            <button className="flex-item" onClick={() => navigate("/cadastrar")}>CADASTRAR</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;