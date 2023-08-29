import { useBooks } from '@/context/booksContext'
import React from 'react'
import { BookCard } from '.';

const BookList = () => {
    const books = useBooks();
    console.log('hello',books);
  return (
    <div>
        <h2>Lista de Libros</h2>
         {
           books.length>0
           ? (
           <section>
            <div className='home__cars-wrapper'>
               {books?.map((book)=>(
                 <BookCard book={book} />
               ))}
            </div>
           </section>
           ):
           (
             <div>
                <h2>Oops, no result</h2>
             </div>
           )
           
         }
    </div>
  )
}

export default BookList