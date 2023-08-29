'use client';
import React, { useState } from 'react'
import { SearchEditorial } from '.';
import Image from 'next/image';


const SearchButton = ({otherClasses}:{otherClasses:string}) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
       <Image src="/magnifying-glass.svg" alt='magnifying' width={40} height={40} />
    </button>
)

export const SearchBar = () => {
    const [editorial,setEditorial] = useState('');
    const [title,setTitle] = useState('');
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if(title === '') return alert('Please fill in the search bar');
    }
    
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        {/* <div className='searchbar__item'>
            <SearchEditorial 
            setEditorial = {setEditorial}
            editorial = {editorial}/>
          <SearchButton otherClasses= "sm:hidden" />
        </div> */}
        <div className='searchbar__item'>
           <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Busca por Nombre'
            className='searchbar__input'
           />
           <SearchButton otherClasses='sm:hidden' />
        </div>
    </form>
  )
}
