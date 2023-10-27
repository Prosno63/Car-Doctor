import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const CheckOut = () => {

    const service = useLoaderData();
    const { _id,title, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            email,
            date,
            img,
            serviceName: title,
            serviceID: _id,
            price: price

        } 

        console.log(order)
        fetch('http://localhost:5000/orders',{

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <p className='text-center font-bold text-lg'> Booking Service Name: <span className=' text-red-600'>{title}</span></p>
                    <form onSubmit={handleOrder} className="card-body">
                       <div className='grid lg:grid-cols-3 gap-2'>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={price}  className="input input-bordered" required />
                        </div>
                       </div>
                        <div className="form-control mt-6">
                            
                            <input   className="btn btn-primary btn-block" type="submit" value="Oder Confirm" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;