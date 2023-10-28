import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingCard from '../BookingCard/BookingCard';

const Booking = () => {


    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    const url = `http://localhost:5000/orders?email=${user.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div>

            <div className='grid lg:grid-cols-3 gap-x-2'>
            {
                        booking.map(booked => <BookingCard
                        key={booked._id}
                        booked = {booked}
                        ></BookingCard>)
            }
            </div>
           
        </div>
    );
};

export default Booking;