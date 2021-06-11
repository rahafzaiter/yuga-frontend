import React,{useState,useEffect} from 'react';
import '/home/rahafzaiter/Desktop/SE FACTORY (SUCCESS)/Final Project/Yuga/FrontEnd-Trial/frontend_tr/src/Customer/SeachBar.css';

//Filters :
import Select from '@material-ui/core/Select';

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