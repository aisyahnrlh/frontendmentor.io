import { useState } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import '../styles/Navbar.css';

function Navbar() {
    const [isHamburger, setIsHamburger] = useState(false)

    const toggleHamburgerMenu = () => {
        setIsHamburger(!isHamburger)
    }

    return (
        <header>
            <nav className="nav__desktop">
                <div className="navbar__left">
                    <Logo />
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </div>
                <ul className="navbar__right">
                    <li>Login</li>
                    <li><button className="cyan">Sign Up</button></li>
                </ul>
            </nav>
            <nav className="nav__phone" onClick={toggleHamburgerMenu}>
                <Logo />
                <div className="menu-wrapper">
                    <div className={isHamburger ? "hamburger animate" : "hamburger"}></div>
                </div>
            </nav>
            <ul className={isHamburger ? "hamburger__menu animate" : "hamburger__menu"}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <hr />
                <li>Login</li>
                <li><button className="cyan">Sign Up</button></li>
            </ul>
        </header>
    )
}

export default Navbar
