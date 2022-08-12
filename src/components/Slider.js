
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import slider1 from "../Assets/slider1.png"
import slider2 from "../Assets/slider2.jpg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Slider=()=>{
    return(
      < Carousel div className="carousel-inner" showArrows={true} autoPlay={true} infiniteLoop={true} >
    <div className="carousel-item active" >
      <img   src={slider1} className="d-block w-100" alt="/"/>
    </div>
    <div className="carousel-item active" >
      <img   src={slider2} className="d-block w-100" alt="/"/>
    </div>
    </Carousel>

   
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