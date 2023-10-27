import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id,title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                
                <p className='text-xl font-bold'>{title}</p>
                <p className='text-red-700'>${price}</p>
                <Link to={`checkout/${_id}`}><button className='btn btn-primary text-center'>Check Out</button></Link>
            </div>
            
        </div>
    );
};

export default ServiceCard;