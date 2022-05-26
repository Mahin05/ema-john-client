import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://infinite-island-68376.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            const url = `https://infinite-island-68376.herokuapp.com/cancel/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allOrder.filter(order => order._id !== id)
                    setAllOrder(remaining);
                })
        }
    }
    const [shipped,setShipped] = useState();
    const handleShipped = id =>{
        const shipped="shipped";
        const proceed = window.confirm('Are you sure want to Ship?');
        if (proceed) {
            const url = `https://infinite-island-68376.herokuapp.com/shipped/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(shipped)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allOrder.filter(order => order._id !== id)
                    setAllOrder(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className="text-2xl">My Orders:{allOrder.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tool Name</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.userName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.toolName}</td>
                                    <td>
                                        {(order.pricePerunit && !order.paid) && <Link to={``}><button disabled class="btn btn-xs">Unpaid</button></Link>}
                                        {/* {(order.pricePerunit && order.paid) && <span class="text-success">Paid</span>} */}
                                        {(order.pricePerunit && order.paid) && <div>
                                            <p><span class="text-success">Paid</span></p>
                                            <p>Transaction ID: <span class="text-success">{order.transactionId}</span></p>
                                        </div>}
                                    </td>
                                    <td>{(order.pricePerunit && order.paid) && <Link to={``}><button disabled class="btn btn-xs">Pending</button></Link>}</td>
                                    <td>{(order.pricePerunit && !order.paid) && <Link to={``}><button onClick={() => handleDelete(order._id)} class="btn btn-xs">Cancel</button></Link>}
                                    {(order.pricePerunit && order.paid) && <Link to={``}><button value="shipped" onClick={() => handleShipped(order._id)} class="btn btn-xs">Shipment</button></Link>}
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;