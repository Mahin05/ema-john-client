import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import useInventories from '../../hooks/useInventories';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [inventories, setInventories] = useInventories()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://infinite-island-68376.herokuapp.com/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            const url = `https://infinite-island-68376.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className="text-2xl">My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tool Name</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.userName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.toolName}</td>
                                    <td>
                                        {(order.pricePerunit && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs">Pay</button></Link>}
                                        {/* {(order.pricePerunit && order.paid) && <span class="text-success">Paid</span>} */}
                                        {(order.pricePerunit && order.paid) && <div>
                                            <p><span class="text-success">Paid</span></p>
                                            <p>Transaction ID: <span class="text-success">{order.transactionId}</span></p>
                                            </div>}
                                    </td>
                                    <td>{(order.pricePerunit && !order.paid) && <button onClick={() => handleDelete(order._id)} class="btn btn-xs">Cancel</button>}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;