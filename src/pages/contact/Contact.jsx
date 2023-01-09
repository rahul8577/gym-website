import Header from "../../components/Header"
import HeaderImage from '../../gym-asset/images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minima alias id quo doloribus odio atque soluta explicabo magnam! Corporis accusamus enim ab accusantium fuga, aspernatur ex sint maxime cumque.  
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/ernest_archiever" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+917485965874" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact