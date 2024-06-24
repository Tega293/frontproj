"use client"
import React, { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false },
    [Autoplay()])
  

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla z-[1px]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <Image src='/slide1.avif' alt='recipe' width={1000} height={300}/>
        </div>
        <div className="embla__slide">
            <Image src='/slide2.avif' alt='recipe' width={1000} height={300}/>
        </div>
        <div className="embla__slide">
            <Image src='/slide3.avif' alt='recipe' width={1000} height={300}/>
        </div>
        <div className="embla__slide">
            <Image src='/slide4.avif' alt='recipe' width={1000} height={300}/>
        </div>
        
      </div>
    </div>
  )
}
