'use client';
import { CustomFilter, Hero, SearchBar } from '@/components'
import BookList from '@/components/BookList';
import { BookProvider, useBooks } from '@/context/booksContext';
import Image from 'next/image';
import useSWR from 'swr';


export default function Home() {
  const books = useBooks();
  console.log(books);
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id= 'discover'>
        <div className='home__text-container'>
           <h1 className='text-4xl font-extrabold'>
             Catalogo de Libros
           </h1>
           <p>explora los libros que te podrían gustar</p>
        </div>
        <div className='home__filters'>
          <SearchBar/>
           <div className='home__filter-container'>
            <CustomFilter />
            <CustomFilter/>

           </div>
        </div>
        <BookProvider>
          <BookList/>
        </BookProvider>
        <div>

        </div>

      </div>
    </main>
  )
}
