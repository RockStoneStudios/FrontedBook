import { MouseEventHandler } from "react";

export interface ICustomButton{
    title : string;
    containerStyles? : string;
    handleClick ?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "reset" | undefined;
    rightIcon?: string;
}


export interface ISearchEditorial {
    editorial : string;
    setEditorial: (editorial:string) => void;
}


export interface IBook {
    id : number;
    title : string;
    genre : string;
    author : string;
    quantity : number;
    image : string;
}



export interface IBookDetailsProps {
    isOpen : boolean;
    closeModal : () => void;
    book : IBook
}




