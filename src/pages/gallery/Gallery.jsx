import Header from "../../components/Header"
import HeaderImage from '../../gym-asset/images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {

  const galleryLength=15;
  const images = [];

  for(let i=1; i<=galleryLength; i++){
    images.push(require(`../../gym-asset/images/gallery${i}.jpg`))
  }

  return (
    <div>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolores soluta quidem incidunt amet autem error. Beatae consectetur velit dolores.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image,index)=>{
              return (<article key={index}>
                <img src={image} alt={`gallery image ${index+1}`} />
              </article>);
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Gallery