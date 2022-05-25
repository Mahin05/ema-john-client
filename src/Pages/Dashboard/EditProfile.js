import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EditProfile = () => {

    const [user] = useAuthState(auth);
    console.log(user.education)
    const email = user.email;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/userInfo/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Profile Edited!');
                console.log(result);
            })
    }
    return (
        <div>
            <h2 className="text-2xl">Edit Your Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='purchase-form'>
                <label>Name</label>
                <input name="name" type="text" class="feedback-input" value={user.displayName} placeholder="Your Name" readOnly />
                <label>Email</label>
                <input name="email" type="email" class="feedback-input" value={user.email} placeholder="Email" readOnly />
                <label>Education</label>
                <input {...register("education")} name="education" type="text" class="feedback-input" placeholder="Your Education" />
                <label>Description</label>
                {<textarea {...register("address")} className='purchase-textArea' rows={2} name="address" class="feedback-input" placeholder="Your Address"></textarea>}
                <label>Phone</label>
                <input {...register("phone")} name="phone" type="number" class="feedback-input" placeholder="Your Phone Number" />
                <label>Linked-In</label>
                <input {...register("linkedIn")} name="linkedIn" type="text" class="feedback-input" placeholder="Your Linked-In Profile Link" />
                <input className='purchase-submit' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EditProfile;