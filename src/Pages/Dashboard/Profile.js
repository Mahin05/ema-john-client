import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const Profile = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
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
            <h2 className="text-2xl">Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className='purchase-form'>
            <label>Review</label>
                <input {...register("review")} name="review" type="number" class="feedback-input" placeholder="Your Review" />
                <label>Description</label>
                <textarea {...register("description")} className='purchase-textArea'  rows={2} name="description" class="feedback-input" placeholder="Your Feedback"></textarea>
                <input className='purchase-submit' type="submit" value="Review" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;