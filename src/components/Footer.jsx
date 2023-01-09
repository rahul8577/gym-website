import {Link} from 'react-router-dom'
import logo from '../gym-asset/images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
    <div className="container footer__container">
        <article>
            <Link to='/' className='logo'>
                <img src={logo} alt="footer-logo" />
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, in. Aperiam facere officia repellendus inventore expedita quidem odit, dignissimos aliquid laudantium, sequi, earum voluptatibus maxime.
            </p>
            <div className="footer__socials">
                <a href="http://linkedin.com" target='_blank'   > <FaLinkedin/> </a>
                <a href="http://facebook.com" target='_blank' rel='noreferrar noopener'> <FaFacebook/> </a>
                <a href="http://twitter.com" target='_blank' rel='noreferrar noopener'> <AiOutlineTwitter/> </a>
                <a href="http://instagram.com" target='_blank' rel='noreferrar noopener'> <AiOutlineInstagram/> </a>
            </div>
        </article>
        <article>
            <h4>PermaLinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to='./contact'>Contact</Link>
        </article>
        <article>
            <h4>Insight</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to='./s'>FAQs</Link>
        </article>
        <article>
            <h4>Get In touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
        </article>
    </div>
    <div className="footer__copyright">
            <small>2023 Worldwide Gym &copy; All right reserved </small>
        </div>
   </footer>
  )
}

export default Footer