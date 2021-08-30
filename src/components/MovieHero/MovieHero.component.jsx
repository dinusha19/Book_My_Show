import React from 'react';
import MovieInfo from './MovieInfo.component';


const MovieHero = () => {
    return (
        <>
        <div>
            <div className="relative md:hidden w-full" style={{height:"calc(180vw)"}}>
                <div className="absolute z-20 bottom-4 left-4">
                    <MovieInfo/>
                </div>
                <div className="w-full h-56 bg-opacity-50 absolute bottom-0 bg-black z-10"/>
                    <img src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/3/22/original/ZSJL.jpg" 
                    alt="Poster" className="w-full h-full"/>
            </div>
            <div className="relative hidden md:block lg:hidden w-full" style={{height:"calc(100vw)"}}>
            <div className="w-full h-56 bg-opacity-50 absolute bottom-0 bg-black z-10"/>
            <div className="absolute z-20 bottom-4 ">
                    <MovieInfo/>
                </div>
            <img src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/3/22/original/ZSJL.jpg" 
                    alt="Poster" className="w-full h-full"/>
            </div>
            <div className="relative hidden lg:block w-full" style={{height:"30rem"}}>
                <div className="absolute h-full z-10 w-full" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                
                <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                <div className="w-64 h-96">
                    <img src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/3/22/original/ZSJL.jpg" 
                    alt="Poster" className="w-full h-full rounded-xl"/>
                </div>
                <div>
                    <MovieInfo/>
                </div>
                </div>

                <img src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/3/22/original/ZSJL.jpg"
                 alt="Poster" className="w-full h-full"/>
            </div>
        </div>
            
        </>
    )
};

export default MovieHero;
