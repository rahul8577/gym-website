import Header from "../../components/Header";
import './about.css'
import HeaderImage from '../../gym-asset/images/header_bg_1.jpg'
import StoryImage from '../../gym-asset/images/about1.jpg'
import VisionImage from '../../gym-asset/images/about2.jpg'
import MissionImage from '../../gym-asset/images/about3.jpg'

const About = () => {
    return (
        <>
            <Header title="About us" image={HeaderImage} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere cumque nesciunt placeat dolor aliquid iure eius aliquam, natus ullam?
            </Header>
            <section className="about_story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Out Story image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis laborum doloribus placeat cupiditate harum amet! Nisi quas enim laboriosam, libero atque nam facere exercitationem optio sequi explicabo, numquam totam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur itaque, nostrum enim eaque dolores alias laboriosam quo incidunt officiis, distinctio neque? 
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum neque aspernatur ipsum temporibus sequi .</p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">              
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis laborum doloribus placeat cupiditate harum amet! Nisi quas enim laboriosam, libero atque nam facere exercitationem optio sequi explicabo, numquam totam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur itaque, nostrum enim eaque dolores alias laboriosam quo incidunt officiis, distinctio neque? 
                        </p>
                        
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Out Story image" />
                    </div>
                </div>
            </section>

            <section className="about_mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Out Story image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis laborum doloribus placeat cupiditate harum amet! Nisi quas enim laboriosam, libero atque nam facere exercitationem optio sequi explicabo, numquam totam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur itaque, nostrum enim eaque dolores alias laboriosam quo incidunt officiis, distinctio neque? 
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum neque aspernatur ipsum temporibus sequi .</p>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default About;