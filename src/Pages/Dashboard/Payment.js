import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1tsABKjCWfVuWLcF9komdxxLeLvTlWLGY22rEWpE5ZSicZEtloyTsNd2k2cY9NhB9XXGASpk6LinCIod2SDZem00Hd6bqOYC');

const Payment = () => {
    const { id } = useParams();
    const url = `https://infinite-island-68376.herokuapp.com/order/${id}`
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <div>
         <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
             <div class="card-body">
                 <p className="text-success font-bold">Hello, {order.userName}</p>
                 <h2 class="card-title">Please Pay for {order.toolName}</h2>
                 {/* <p>Your Appointment: <span className='text-orange-700'>{order.date}</span> at {order.slot}</p> */}
                 <p>Please pay: ${order.pricePerunit}</p>
             </div>
         </div>
         <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
             <div class="card-body">
                 <Elements stripe={stripePromise}>
                     <CheckoutForm order={order} />
                 </Elements>
             </div>
         </div>
     </div>
     </div>
    );
};

export default Payment;