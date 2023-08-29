"use client";

import { IBook } from "@/interfaces";
import React, { FC, createContext, useContext,useEffect,useState } from "react";
import axios from "axios";


 const BookContext = createContext<IBook[]>([]);
 
  export function BookProvider({children}:any) {
    const [books,setBooks] = useState<IBook[]>([]);
    const [searchBook,setSearchBooks] = useState<IBook[]>([]);

      // const searchBooksByTitle = async (title :String) => {
      //   const {data}= await  axios.get(`http://localhost:3001/api/v1/books/search?title=${title}`);
      //   setSearchBooks(data);
      // }

     useEffect(()=>{ 
       const dataResponse = async () => {
       const {data} = await  axios.get('http://localhost:3001/api/v1/books');
        console.log('hello'+data);
       setBooks(data);
      
       }
       dataResponse();

     },[])
  

   

   return (
    <BookContext.Provider value={books}>
     {children}
    </BookContext.Provider>
     )

    
  }

export function useBooks(){
  return useContext(BookContext);
}