import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


import EventDetail from '../eventCards/EventDetail';
import Footer from '../footer/Footer';

const Details = () => {
    
    const [Detail, setDetail] = useState({});

    const { id } = useParams()
   // console.log(id)

    const Details = useLoaderData();
  //  console.log(Details);


    useEffect(() => {
        const findDetail = Details?.find((Detail) => Detail.id == id)
      
           
        setDetail(findDetail);

    }, [id, Details]);

    
    return (

        <div>
             
        <EventDetail Detail={Detail}></EventDetail>
        <Footer></Footer>
        </div>

       
    );
};

export default Details;

