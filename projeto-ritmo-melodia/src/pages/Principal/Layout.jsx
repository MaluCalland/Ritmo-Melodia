import React from 'react'

import { Outlet, useNavigate  } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();
    
    return (
        <>
        <div className='paginasHome'>
            <nav className='flex-conteiner'>
                <button className='flex-item' onClick={() => navigate("/")}><strong>HOME</strong></button>
                <button className='flex-item' onClick={() => navigate("/login")}><strong>LOGIN</strong></button>
                <button className='flex-item' onClick={() => navigate("/playlist")}><strong>PLAYLIST</strong></button>
                <button className='flex-item' onClick={() => navigate("/sobre-nos")}><strong>SOBRE NÓS</strong></button>
            </nav>
        </div>

        <Outlet />
        </>
    )
};

export default Layout;
