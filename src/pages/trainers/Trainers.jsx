import Header from '../../components/Header'
import HeaderImage from '../../gym-asset/images/header_bg_5.jpg'
import {trainers} from '../../gym-asset/data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import './trainers.css'
import Trainer  from '../../components/Trainer'

const Trainers = () => {
  return (
    <div>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae commodi explicabo optio, fuga ratione dolores temporibus qui quam debitis veniam!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id,image,name,job,socials})=>{
                return (<Trainer key={id} image={image} name={name} job={job} socials={
                  [
                    {icon:<BsInstagram/>,link:socials[0]},
                    {icon:<AiOutlineTwitter/>,link:socials[1]},
                    {icon:<FaFacebookF/>,link:socials[2]},
                    {icon:<FaLinkedinIn/>,link:socials[3]}
                  ]
                } />);
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Trainers