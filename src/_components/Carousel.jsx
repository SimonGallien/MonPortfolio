import { useState } from 'react'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0) // Suivi de l'index actuel de la slide

  // Aller à la diapositive suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }

  // Aller à la diapositive précédente
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    )
  }

  return (
    <div className="carousel w-full flex justify-center mb-12">
      {pictures.map((slide, index) => 
        index === currentIndex && (
          <div key={index} id="slide1" className="carousel-item relative w-full md:w-3/4 h-80 sm:h-[480px] xl:w-2/3">
            <img
                src={slide}
                alt={`slide ${index + 1}`}
                className="w-full object-cover h-full rounded-xl"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <span onClick={prevSlide} className="btn btn-circle">❮</span>
              <span onClick={nextSlide} className="btn btn-circle">❯</span>
            </div>
          </div>
        ))}
      
    </div>
  )
}

export default Carousel
