import React from 'react';

//Componets
import MovieNavbar from "../components/Navbar/MovieNavbar.component";


const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar/>
    {props.children}
        </>
    )
};

export default  MovieLayout;

