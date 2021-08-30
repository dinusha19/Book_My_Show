import React from 'react';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

//components
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//Config
import TempPosters from "../Config/TempPosters.config";


const Movie = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:w-2/3 ml-20">
                <div className="flex flex-col gap-3 items-start">
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>
                        Language is not a barrier at BookMyShow.
                        We speak and understand the language of cinema.
                        So, if English movie is what you are into, we keep you up-to-date about all the new and now showing Hollywood movies near your location.
                        Check out all the current movies and book your tickets then and there.
                    </p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-200 p-3 border-yellow-100 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                <p className="text-gray-600">Get 50% off up to INR 150 on all Visa Card</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-200 p-3 border-yellow-100 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">Get Rs.75 off on 3 movies you buy/rent on scream</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
                    <div className="flex flex-wrap gap-4">
                        <Cast
                            image="https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/original/original-henry-cavill-43-jpg-3efbd12a.jpg"
                            castName="Ben Affleck"
                            role="Batman"
                        />
                        <Cast
                            image="https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/original/original-henry-cavill-43-jpg-3efbd12a.jpg"
                            castName="Henry Cavil"
                            role="Superman"
                        />
                        <Cast
                            image="https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/original/original-henry-cavill-43-jpg-3efbd12a.jpg"
                            castName="Gal Gadot"
                            role="Wonder woman"
                        />
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        images={TempPosters}
                        title="You might also like"
                        isDark={false} />
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        images={TempPosters}
                        title="BMS XCLSIVE"
                        isDark={false} />
                </div>
            </div>
        </>
    )
};

export default Movie;