import React, {useState, useEffect} from 'react'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar' id='hero'>
                <div className='navbar-container'>
                    <a href='/#' onClick={closeMobileMenu}>
                        <img height="120px" src={require("../assets/images/MNpx2.png")} className='img1' alt='MN'/>
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/#' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#tech' className='nav-links' onClick={closeMobileMenu}>
                                Technologies
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </a>
                        </li> 
                        {!button && 
                        <li className='nav-item'>
                            <a target="_blank" href='https://www.linkedin.com/in/martin-nastevski/' className='btn-ln' rel="noreferrer"><i className='fab fa-linkedin' /></a>
                        </li>} 
                    </ul>
                    {button && <a target="_blank" href='https://www.linkedin.com/in/martin-nastevski/' className='btn-ln' rel="noreferrer"><i className='fab fa-linkedin' /></a>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
