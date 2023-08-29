"use client"
import {FC, useState} from 'react';
import Image from 'next/image';
import { IBook } from '@/interfaces';
import { BookDetail, CustomButton } from '.';

interface BookCardProps {
    book : IBook
}

const BookCard  = ({book}:BookCardProps) => {
    const {title,genre,author,image,quantity} = book;
    const [isOpen,setIsOpen] = useState(false);
  return (
    
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {title} 
        </h2>
      </div>

    
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={image} alt='car model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        {/* <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div> */}

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <BookDetail isOpen={isOpen} closeModal={()=> setIsOpen(false)} book={book}/>
    </div>
  )
}

export default BookCard;