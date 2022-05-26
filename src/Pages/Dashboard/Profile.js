import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    // const email = user.email;

    const addUserInfo = event => {
        event.preventDefault();
        const informations = {
            name:user.displayName,
            email:user.email,
            education:event.target.education.value,
            address:event.target.address.value,
            phone:event.target.phone.value,
            linkedIn:event.target.linkedIn.value
        }
        fetch('https://infinite-island-68376.herokuapp.com/userInfo',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(informations)
        })
        .then(res => res.json())
        .then(result => {
            toast('Information added successfully!!')
            console.log(result);
        })
    }

    return (
        <div>
            <h2 className="text-3xl">Profile</h2>
            <h2 className="text-2xl">Add/Edit Your Profile</h2>
            <form onSubmit={addUserInfo}  className='purchase-form'>
                <label>Name</label>
                <input name="name" type="text" class="feedback-input" value={user.displayName} placeholder="Your Name" readOnly />
                <label>Email</label>
                <input name="email" type="email" class="feedback-input" value={user.email} placeholder="Email" readOnly />
                <label>Education</label>
                <input  name="education" type="text" class="feedback-input" placeholder={user.education} />
                <label>Description</label>
                <textarea  className='purchase-textArea' rows={2} name="address" class="feedback-input" placeholder="Your Address"></textarea>
                <label>Phone</label>
                <input name="phone" type="number" class="feedback-input" placeholder="Your Phone Number" />
                <label>Linked-In</label>
                <input  name="linkedIn" type="text" class="feedback-input" placeholder="Your Linked-In Profile Link" />
                <input className='purchase-submit' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Profile;