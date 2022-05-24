import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'


const Tool = ({ tool }) => {
    const { _id, name, minimunOrderQuantity, availableQuantity, pricePerUnit, image, description } = tool;
    const navigate = useNavigate();
    const navigateToToolDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card w-50 bg-base-100 mx-5 my-5 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h3>Price (Per Unit): ${pricePerUnit}</h3>
                <h3>Minimum Order Quantity: {minimunOrderQuantity} Pieces</h3>
                <h3>Avaialble Quanity: {availableQuantity} Pieces</h3>
                <p>{description}</p>
                <div class="card-actions">
                    <button onClick={()=>navigateToToolDetail(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;