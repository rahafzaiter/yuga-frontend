import React from 'react';
import  UserGreeting from './UserGreeting'
import GuestGreeting from '../components/GuestGreeting'

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    
    if(isLoggedIn){
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

export default Greeting