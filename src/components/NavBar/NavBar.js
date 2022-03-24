import React from 'react'
import './NavBar.css';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <header className='main-header' >
            <ul className='NavBar'  >
            <img 
                src="logo192.png"
                className="img-header"
            />
            <li><Button>Home</Button></li>
            <li><Button>Productos</Button></li>
            <li><Button>Nosotros</Button></li>
            <li><Button>Contacto</Button></li>
            <CartWidget />
            </ul>
        </header>
        )
    }
    export default NavBar;