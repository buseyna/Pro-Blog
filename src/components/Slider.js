
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import slider1 from "../Assets/slider1.png"
import slider2 from "../Assets/slider2.jpg"


const Slider=()=>{
    return(
        <div>
           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slider1} className="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
  }
  
export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
      </div>
    </div>
  )
}


export default Slider