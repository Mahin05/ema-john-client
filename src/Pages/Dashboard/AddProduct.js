import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        const url = `https://infinite-island-68376.herokuapp.com/tools`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Item added successfully!!')
                console.log(result);
            })
    }
    return (
        <div>
            <h2 className="text-2xl">Add Tool</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='purchase-form'>
                <label>Tool Name</label>
                <input name="name"  {...register("name")} type="text" class="feedback-input" placeholder="Product Name" />
                <label>Details</label>
                <textarea className='purchase-textArea'   rows={2}  {...register("description")} name="description" class="feedback-input"  placeholder="Product Details" ></textarea>
                <label>Price(per unit)</label>
                <input name="pricePerUnit"  {...register("pricePerUnit")} type="text" class="feedback-input"  placeholder="Price" />
                <label>Quantity</label>
                <input name="availableQuantity"  {...register("availableQuantity")} type="number" class="feedback-input" placeholder="Quantity" />
                <label>Minimum Order Quantity</label>
                <input name="minimunOrderQuantity"  {...register("minimunOrderQuantity")}  type="number" class="feedback-input" placeholder="Minimum order quantity" />
                <label>Image Link</label>
                <input name="image"  {...register("image")}  type="text" class="feedback-input" placeholder="Input Image Url" />
                <input className='purchase-submit' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;