'use client';
import Image from 'next/image';
import { CustomButton } from '.';

export const Hero = () => {

    const handleScroll = () => {

    }
  return (
    <div className='hero'>
     <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            Busca Libros y Llevalos rapido y Facil!
        </h1>
        <p className='hero__subtitle'>Optimice su experiencia de alquiler de libros con nuestro sencillo proceso de reserva</p>
        <CustomButton
         title = "Explore Libros"
         handleClick = {handleScroll}
         containerStyles='bg-primary-blue text-white rounded-full mt-10'
        />
     </div>
     <div className='hero__image-container'>
        <div className='hero__image'>
          <Image 
           className='object-contain'
           src= '/book.png' alt='hero'  width={480} height={350} />
        </div>
          <div className='hero__image-overlay'></div>
     </div>
    </div>
  )
}

export default Hero;
