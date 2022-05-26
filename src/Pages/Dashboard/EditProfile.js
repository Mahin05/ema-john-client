import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EditProfile = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])

    const [updatedInfo, setUpdatedInfo] = useState([]);

    const handleUpdate = event => {
        event.preventDefault();
        const update = {
            education:event.target.education.value,
            address:event.target.address.value,
            phone:event.target.phone.value,
            linkedIn:event.target.linkedIn.value,
        }
        fetch(`http://localhost:5000/update?email=${user.email}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(result => {
            toast('Information updated successfully!!')
            console.log(result);
        })
    }

    // const handleDelivered = event => {
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     const { quantity, ...rest } = inventory;
    //     // const newQnty = parseInt(event.target.value);
    //     const subQuantity = parseInt(inventory.quantity) - 1;
    //     if (subQuantity >= 0) {
    //         const updatedQuantity = { quantity: subQuantity, ...rest };
    //         console.log(quantity, rest);
    //         console.log(updatedQuantity);
    //         setInventory(updatedQuantity);
    //         // send data 
    //         const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${inventoryId}`
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
    return (
        <div>
            <h2 className="text-2xl">Edit Your Profile:{appointments.length}</h2>
            {
                appointments.map(a => <form onClick={handleUpdate} className='purchase-form'>
                    <label>Name</label>
                    <input name="name" type="text" class="feedback-input" value={user.displayName} placeholder="Your Name" readOnly />
                    <label>Email</label>
                    <input name="email" type="email" class="feedback-input" value={user.email} placeholder="Email" readOnly />
                    <label>Education</label>
                    <input name="education" type="text" class="feedback-input" placeholder={a.education}  />
                    <label>Description</label>
                    {<textarea className='purchase-textArea' rows={2} name="address" placeholder={a.address} class="feedback-input" ></textarea>}
                    <label>Phone</label>
                    <input name="phone" type="number" placeholder={a.phone} class="feedback-input" />
                    <label>Linked-In</label>
                    <input name="linkedIn" type="text" placeholder={a.linkedIn} class="feedback-input"  />
                    <input className='purchase-submit' type="submit" value="Submit" />
                </form>)
            }
        </div>
    );
};

export default EditProfile;