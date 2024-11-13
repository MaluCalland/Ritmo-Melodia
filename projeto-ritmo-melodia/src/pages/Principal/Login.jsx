import { FaUser, FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");  // Gerencia o valor do email
  const [password, setPassword] = useState("");  // Gerencia o valor da senha

  const navigate = useNavigate();  // Navegação entre páginas

  // Verifica se o usuário está autenticado ao carregar o componente
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Se o token já existir, redireciona o usuário para a página de playlists
    if (token) {
      navigate("/playlists");
    }
  }, [navigate]);  // Executa apenas uma vez ao montar o componente

  // Função para enviar o formulário
  const handleSubmit = async (event) => {
    event.preventDefault();  // Evita que a página seja recarregada ao enviar o formulário

    try {
      // Envia os dados de login para o backend via POST
      const response = await fetch("http://localhost:5173/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Se o login for bem-sucedido
      if (response.ok) {
        const data = await response.json();
        
        // Armazenando o token (se necessário)
        localStorage.setItem("token", data.token);

        // Navega para a página de playlists após o login
        navigate("/playlists");

      } else if (response.status === 401) {
        // Caso as credenciais estejam erradas
        alert("Credenciais inválidas. Tente novamente.");
      } else {
        // Caso ocorra outro erro
        alert("Erro ao fazer login. Tente novamente mais tarde.");
      }
      
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

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