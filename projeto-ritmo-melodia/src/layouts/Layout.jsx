import React from 'react'
import "../css/Layout.css"
import { Outlet, useNavigate  } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();
    
    return (
        <>
        <div className='paginasHome-menu'>
            <nav className='flex-conteiner-menu'>
                <button className='flex-item-menu' onClick={() => navigate("/")}><strong>HOME</strong></button>
                <button className='flex-item-menu' onClick={() => navigate("/login")}><strong>LOGIN</strong></button>
                <button className='flex-item-menu' onClick={() => navigate("/playlist")}><strong>PLAYLIST</strong></button>
                <button className='flex-item-menu' onClick={() => navigate("/sobre-nos")}><strong>SOBRE NÓS</strong></button>
            </nav>
        </div>

        <Outlet />
        </>
    )
};

export default Layout;
