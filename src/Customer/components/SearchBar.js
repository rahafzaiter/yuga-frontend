import React,{useState,useEffect} from 'react';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/SeachBar.css';

//note that this component is a feature will be used in the future to make search 

//Filters :

export default function SearchBar(){

useEffect(()=>{

},[])
const getRecipes=async()=>{

}
return(
    <div className="SearchBar">
    <form  className="search-form">
    <input className="search-bar" type="text" defaultValue="search by name of the item"/>
    <button className="search-button" type="submit">Search</button>
    </form>
    </div>
);

}