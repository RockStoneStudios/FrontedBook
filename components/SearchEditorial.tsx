'use client';

import { ISearchEditorial } from '@/interfaces'
import React, { FC ,useState,Fragment} from 'react';
import { Combobox,Transition } from '@headlessui/react';
import Image from 'next/image';
import { editoriales } from '@/constants';

export const SearchEditorial:FC<ISearchEditorial> = ({editorial,setEditorial}:ISearchEditorial) => {
  const [query,setQuery] =  useState('');

  const filteredEditoriales = query === '' ?
    editoriales : editoriales.filter((item)=>(
       item.toLowerCase().replace(/\s+/g,'').includes(query.toLowerCase().replace(/\s+/g, ''))
    ))
    return (
    <div className='search-manufacturer'>
        <Combobox value={editorial} onChange={setEditorial}>
            <div className='relative w-full'>
              <Combobox.Button className='absolute top-[8px]'>
                <Image 
                  src='/libro.jpg'
                  height={28}
                  width={28}
                  className='ml-4'
                  alt='logo'
                />
              </Combobox.Button>
              <Combobox.Input 
               className= 'search-manufacturer__input'
               placeholder='Grupo Santillana'
               displayValue={(editorial : string)=> editorial}
               onChange={(e) => setQuery(e.target.value)}
              />
              <Transition 
               leave='transition ease-in duration-100'
               leaveFrom='opacity-100'
               leaveTo='opacity-0'
               afterLeave={()=> setQuery('')}
               as={Fragment}>

            <Combobox.Options>
                {
                    filteredEditoriales.length === 0 &&
                    query !== "" ? (
                        <Combobox.Option
                         value={query}
                         className= "search-manufacturer__option"
                        >
                          Create "{query}"
                        </Combobox.Option>
                    ):
                    (
                    filteredEditoriales.map((item)=>(
                        <Combobox.Option 
                          className={({active}) =>`
                            relative search-manufacturer__option
                            ${active ? 'bg-primary-blue text-white'
                            : 'text-gray-900'}
                          `}
                          value={item}
                         key={item}>
                         {({selected,active})=> (
                            <>
                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                {item}
                            </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                            </>
                         )}
                        </Combobox.Option>
                    ))
                    )
                }
            </Combobox.Options>
              </Transition>
            </div>
        </Combobox>

    </div>
  )
}
