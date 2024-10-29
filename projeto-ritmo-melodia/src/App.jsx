import ReactDOM from "react-dom/client";

//importnado pacote de rotas do react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importando css
import "./App.css"

//importando funcionalidades das paginas "centrais": home, layout, duvidas, login (cadastro)
import Layout from "./pages/Principal/Layout";
import Home from "./pages/Principal/Home";
import Login from "./pages/Principal/Login";
import Playlist from "./pages/Principal/Playlist";
import Cadastrar from "./pages/Principal/Cadastrar";
import Duvidas from "./pages/Principal/Duvidas";
import NoPage from "./pages/Principal/NoPage";

//imortando as funções das paginas de cada estilo musical
import MPB from "./pages/Musicas/MPB";
import Axe from "./pages/Musicas/Axe";
import Forro from "./pages/Musicas/Forro";
import Pop from "./pages/Musicas/Pop";
import Funk from "./pages/Musicas/Funk";
import Reggae from "./pages/Musicas/Reggae";
import Samba from "./pages/Musicas/Samba";
import Sertanejo from "./pages/Musicas/Sertanejo";
import Trap from "./pages/Musicas/Trap";
import Rap from "./pages/Musicas/Rap";
import Pagode from "./pages/Musicas/Pagode";
import Rock from "./pages/Musicas/Rock";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="cadastro" element={<Cadastrar />} />
          <Route path="duvidas" element={<Duvidas />} />
          <Route path="musicas/mpb" element={<MPB />} />
          <Route path="musicas/axe" element={<Axe />} />
          <Route path="musicas/forro" element={<Forro />} />
          <Route path="musicas/pop" element={<Pop />} />
          <Route path="musicas/funk" element={<Funk  />} />
          <Route path="musicas/reggae" element={<Reggae />} />
          <Route path="musicas/samba" element={<Samba />} />
          <Route path="musicas/sertanejo" element={<Sertanejo />} />
          <Route path="musicas/trap" element={<Trap />} />
          <Route path="musicas/rap" element={<Rap />} />
          <Route path="musicas/pagode" element={<Pagode />} />
          <Route path="musicas/rock" element={<Rock />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;