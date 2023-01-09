import { Link, NavLink } from 'react-router-dom'
import img from '../gym-asset/images/logo.png'
import { links } from '../gym-asset/data'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import './navbar.css';
import { useState } from 'react';

const NavBar = () => {

    const [prstate, changestate] = useState(true)
     
    return (
        <nav>
            <div className="container navbar__container">
                <Link to='/' className='logo' onClick={() => changestate(prstate=>!prstate)}>
                    <img src={img} alt="navbar logo" />
               
                </Link>
                <ul className= {`nav__links ${prstate? "hide__nav" : ""}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return <li key={index}  onClick={() => changestate(prstate=>!prstate)}><NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}>{name}</NavLink></li>
                        })
                    }
                </ul>
                <button onClick={() => changestate(prstate=>!prstate)} className="nav__toggle-btn" >
                    {
                        prstate ? < GoThreeBars /> : <MdOutlineClose/>
                    }
                    
                </button>
            </div>
        </nav>
    )
}

export default NavBar