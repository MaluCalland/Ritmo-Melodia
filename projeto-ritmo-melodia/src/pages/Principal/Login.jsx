import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../css/Login.css"; // Certifique-se de que o caminho está correto

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aqui você enviaria os dados para o backend
    try {
      const response = await fetch("https://api.exemplo.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Aqui você poderia armazenar o token, se necessário
        // localStorage.setItem("token", data.token);
        navigate("/playlists"); // Redirecionar para a página de playlists
      } else {
        alert("Login falhou. Verifique suas credenciais.");
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
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
          <p><button className="flex-item" onClick={() => navigate("/cadastrar")}>CADASTRAR</button></p>
        </div>
      </form>

      <Outlet />
    </div>
  );
};

export default Login;