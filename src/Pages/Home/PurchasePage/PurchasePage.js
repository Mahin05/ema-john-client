import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Button from './Button';
import './PurchasePage.css'

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    // console.log(tool.name);
    // console.log(tool.minimunOrderQuantity);
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId])

    // const handleAddressChange = event => {
    //     console.log(event.target.value)
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     // console.log(address,rest);
    //     console.log(newUser);
    //     setUser(newUser);
    // }
    const [error, setError] = useState('');
    const handleMinimumQuantity = event => {
        console.log(event.target.value);
        const minimumQuantity = event.target.value;
        const databaseMinimumQuantity = tool.minimunOrderQuantity;
        const databaseAvailableQuantity = tool.availableQuantity;
        if (minimumQuantity < databaseMinimumQuantity || minimumQuantity === '') {
            // toast.error('Please select more then minimum order');
            setError('Please place your orders between available & minimum order quantity!', true);
        }
        else if (minimumQuantity > databaseAvailableQuantity) {
            setError('Please place your orders between available & minimum order quantity!', true);
        }
        else {
            setError('');
        }
    }

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            userName:user.displayName,
            email:user.email,
            phone:event.target.phone.value,
            address:event.target.address.value,
            toolName:event.target.toolName.value,
            orderQuantity:event.target.orderQuantity.value
        }
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(result => {
            toast('Item added successfully!!')
            console.log(result);
        })
    }

    const onSubmit = (data,event) => {
        const toolName = event.target.toolName.value;
        console.log(data);
        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data,toolName)
        })
            .then(res => res.json())
            .then(result => {
                toast('Item added successfully!!')
                console.log(result);
            })
    }


    // const handleDelivered = event => {
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     const { quantity, ...rest } = tool;
    //     // const newQnty = parseInt(event.target.value);
    //     const subQuantity = parseInt(tool.quantity) - 1;
    //     if (subQuantity >= 0) {
    //         const updatedQuantity = { quantity: subQuantity, ...rest };
    //         console.log(quantity, rest);
    //         console.log(updatedQuantity);
    //         setTool(updatedQuantity);
    //         // send data 
    //         const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${toolId}`
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(updatedQuantity)
    //         })
    //             .then(res => res.json())
    //             .then(result => {
    //                 alert('Quantity Delivered Successfully!!')
    //                 console.log(result);
    //                 event.target.reset();
    //             })
    //     }
    //     else {
    //         alert('Stocked out!!')
    //     }
    // }
    // const handleRestock = event => {
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     const { quantity, ...rest } = tool;
    //     const newQuantity = parseInt(event.target.quantity.value);
    //     const addedQuantity = parseInt(tool.quantity) + newQuantity;
    //     const updatedQuantity = { quantity: addedQuantity, ...rest };
    //     console.log(quantity, rest);
    //     console.log(updatedQuantity);
    //     setTool(updatedQuantity);
    //     // send data 
    //     const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${toolId}`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             alert('Quantity Added Successfully!!')
    //             console.log(result);
    //             event.target.reset();
    //         })

    // }

    return (
        <div>
            <form  onSubmit={handleOrder} className='purchase-form'>
                <label>Name</label>
                <input name="displayName" {...register("displayName")} type="text" class="feedback-input" value={user.displayName} placeholder="Your Name" readOnly />
                <label>Email</label>
                <input name="email" {...register("email")} type="email" class="feedback-input" value={user.email} placeholder="Email" readOnly />
                <label>Phone</label>
                <input name="phone" {...register("phone")}  type="number" class="feedback-input" placeholder="Your Phone" required />
                <label>Address</label>
                <textarea className='purchase-textArea' rows={2} name="address" {...register("address")}  class="feedback-input" placeholder="Your Address"></textarea>
                <label>Tool</label>
                <input name="toolName" {...register("toolName")} type="text" class="feedback-input" value={tool.name} placeholder={tool.name} readOnly />
                <label>Price(per unit)</label>
                <input name="pricePerunit" type="text" class="feedback-input" value={tool.pricePerUnit} placeholder="Your Phone" readOnly />
                <label>Available quantity</label>
                <input name="availableQuantity" type="text" class="feedback-input" value={tool.availableQuantity} placeholder="Your Phone" readOnly />
                <label>Your order quantity</label>
                <input name="orderQuantity" {...register("orderQuantity")} onChange={handleMinimumQuantity} type="number" class="feedback-input" placeholder={tool.minimunOrderQuantity} />
                {error ? <input disabled className='purchase-submit' type="submit" value="Place Order" /> :
                    <input className='purchase-submit' type="submit" value="Place Order" />}
                <div className='text-red-500 text-3xl my-5'>
                {error}
                </div>
            </form>

        </div>
    );
};

export default PurchasePage;