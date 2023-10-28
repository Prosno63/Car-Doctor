import React from 'react';

const BookingCard = ({ booked }) => {

    const { customerName, serviceName, date, price, img } = booked
    return (
        <div className="hero bg-base-200 mb-2 rounded-lg">
            <div className="hero-content flex-col">
                {img && <img src={img} className="max-w-sm rounded-lg shadow-2xl" />}
                <div>
                    <h1 className="text-5xl font-bold">{serviceName}</h1>
                    <p className="py-6">Order placed by: {customerName}</p>
                    <p className="py-6">Date: {date}</p>
                    <p className="py-6">Price: ${price}</p>
                    
                    <button className="btn btn-primary mr-5">Pending</button>
                    <button className="btn btn-warning">Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;