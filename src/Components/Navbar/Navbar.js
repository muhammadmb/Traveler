import React, { useState, useEffect } from 'react';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMoblieMenu}
                    >
                        TVL <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link
                                to="/home"
                                className="nav-links"
                                onClick={closeMoblieMenu}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/services"
                                className="nav-links"
                                onClick={closeMoblieMenu}
                            >
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-links"
                                onClick={closeMoblieMenu}
                            >
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/sign-up"
                                className="nav-links-mobile"
                                onClick={closeMoblieMenu}
                            >
                                Sign Up
                            </Link>
                        </li>

                    </ul>

                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar
