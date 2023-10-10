import React from 'react';

import { useLoaderData } from 'react-router-dom';
import EventCard from './eventCards/EventCard';
import Footer from './footer/Footer';
import Slider from './slider/Slider';


const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Slider></Slider>
            <div className='py-10 px-10'>
                <div>
                <hr>
                </hr>
                <h1 className='font-bold text-center text-5xl my-7'>Upcoming Events </h1>
                <hr></hr>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {

                    data.map(adata => <EventCard key={adata.id} data={adata}></EventCard>)
                }
                

            </div>
           
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;