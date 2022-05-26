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
        const url = `https://infinite-island-68376.herokuapp.com/purchase/${toolId}`;
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
        const minimumQuantity = parseInt(event.target.value);
        const databaseMinimumQuantity = parseInt(tool.minimunOrderQuantity);
        const databaseAvailableQuantity = parseInt(tool.availableQuantity);
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
            orderQuantity:event.target.orderQuantity.value,
            pricePerunit:event.target.pricePerunit.value
        }
        fetch('https://infinite-island-68376.herokuapp.com/order',{
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
                <input name="orderQuantity" {...register("orderQuantity")} onChange={handleMinimumQuantity} type="text" class="feedback-input" placeholder={tool.minimunOrderQuantity} />
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