import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    }, [])
    return (

       

        <div>

            <div className='text-center'>
                <h3 className="text-3xl">Our services</h3>
                <h3 className="text-5xl">Services Area</h3>
            </div>

            <div className='grid grid-cols-3 gap-y-2 mb-2'>
               {
                services.map(service =><ServiceCard key = {service._id} service={service}></ServiceCard>)
               }
            </div>
            
        </div>
    );
};

export default Services;