import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/userInfo/${email}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Informations Added!');
                console.log(result);
            })
    }
    return (
        <div>
            <h2 className="text-2xl">Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='purchase-form'>
                <label>Name</label>
                <input name="name" type="text" class="feedback-input" value={user.displayName} placeholder="Your Name" readOnly />
                <label>Email</label>
                <input name="email" type="email" class="feedback-input" value={user.email} placeholder="Email" readOnly />
                <label>Education</label>
                <input {...register("education")} name="education" type="text" class="feedback-input" placeholder="Your Education" />
                <label>Description</label>
                <textarea {...register("address")} className='purchase-textArea' rows={2} name="address" class="feedback-input" placeholder="Your Address"></textarea>
                <label>Phone</label>
                <input {...register("phone")} name="phone" type="number" class="feedback-input" placeholder="Your Phone Number" />
                <label>Linked-In</label>
                <input {...register("linkedIn")} name="linkedIn" type="text" class="feedback-input" placeholder="Your Linked-In Profile Link" />
                <input className='purchase-submit' type="submit" value="Submit" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;