import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Pages/Home/PurchasePage/PurchasePage.css'
const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://infinite-island-68376.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Thanks for your review!');
                console.log(result);
            })
    }
    return (
        <div>
            <h2 className="text-2xl">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className='purchase-form'>
            <label>Review</label>
                <input {...register("review")} name="review" type="text" class="feedback-input" placeholder="Your Review" />
                <label>Description</label>
                <textarea {...register("description")} className='purchase-textArea'  rows={2} name="description" class="feedback-input" placeholder="Your Feedback"></textarea>
                <input className='purchase-submit' type="submit" value="Review" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Review;