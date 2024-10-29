import {FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";

import { Outlet, useNavigate  } from "react-router-dom";

// import "../css/Login.css"

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados:" + username + " - " + password);
  };

  return (
    <>

    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Faça seu Login</h1>
            <div className="input-field">
                <input 
                  type="email" 
                  placeholder='E-mail' 
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className='icon'/>
            </div>
            <div className="input-field">
                <input 
                  type="password"
                  placeholder='Senha'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className='icon'/>
            </div>

            <div className="recall-forget">
              <p><a href="a">Esqueceu a senha?</a></p>
            </div>

            <p><button>Entrar</button></p>

            <div className="signup-link">
              <p>
                Não tem uma conta? <nav><button className='flex-item' onClick={() => navigate("/cadastrar")}>CADASTRAR</button></nav>
              </p>
            </div>
        </form>

        <Outlet/>
    </div>

    </>
  )
}

export default Login