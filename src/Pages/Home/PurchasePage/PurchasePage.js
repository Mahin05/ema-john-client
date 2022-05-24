import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './PurchasePage.css'

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { toolId } = useParams();
    // const [inventory] = useInventoryDetail(inventoryId);
    // const { register, handleSubmit } = useForm();
    const [tool, setTool] = useState({});
    const minimunOrderQuantity = parseInt(tool.minimunOrderQuantity);
    // console.log(tool.minimunOrderQuantity);
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId])

    const handleMinimumQuantity = event => {
        console.log(minimunOrderQuantity);
        // const {miminimunOrderQuantity, ...rest} = tool;
        const orderQuantity = event.target.value;
        console.log(orderQuantity);
        if(orderQuantity < minimunOrderQuantity){
            const error = `Please Minimu order`
            toast(`You Must order ${minimunOrderQuantity} pieces`)
        }
        // const newTool = {miminimunOrderQuantity:orderQuantity,...rest}
        // console.log(newTool);
        // setTool(newTool);
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
            <form className='purchase-form'>
                <label>Name</label>
                <input name="name" type="text" class="feedback-input" value={user.displayName} placeholder="Your Name" readOnly />
                <label>Email</label>
                <input name="email" type="email" class="feedback-input" value={user.email}  placeholder="Email" readOnly />
                <label>Phone</label>
                <input name="phone" type="number" class="feedback-input" placeholder="Your Phone" />
                <label>Address</label>
                <textarea className='purchase-textArea'  rows={2} name="address" class="feedback-input" placeholder="Your Address"></textarea>
                <label>Tool</label>
                <input name="toolName" type="text" class="feedback-input" value={tool.name}  placeholder="Your Phone" readOnly/>
                <label>Details</label>
                <textarea className='purchase-textArea'   rows={2} name="toolDescription" class="feedback-input" value={tool.description}  placeholder="Your Address" readOnly></textarea>
                <label>Price(per unit)</label>
                <input name="pricePerunit" type="text" class="feedback-input" value={tool.pricePerUnit}  placeholder="Your Phone" readOnly/>
                <label>Available quantity</label>
                <input name="availableQuantity" type="text" class="feedback-input" value={tool.availableQuantity} placeholder="Your Phone" readOnly/>
                <label>Order quantity</label>
                <input name="orderQuantity" onChange={handleMinimumQuantity} type="number" class="feedback-input" placeholder={tool.minimunOrderQuantity} />
                <input className='purchase-submit' type="submit" value="SUBMIT" />
            </form>
            {/* <form>
                <img className='in-img' src={tool.img} alt="" />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={toolId} name="inventoryId" placeholder='inventoryId' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={tool.name} name="inventory" placeholder='service' required readOnly disabled /> <br />
                <FloatingLabel controlId="floatingTextarea2" label={tool.description}>
                    <Form.Control
                        as="textarea"
                        className='mb-2'
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        readOnly
                        disabled
                    />
                </FloatingLabel>
                <input className='w-100 mb-2' type="text" value={tool.price} name="price" placeholder='price' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={tool.supplierName} name="price" placeholder='price' required readOnly disabled /> <br />
                <input className='w-100 mb-2' value={tool.quantity} type="number" name="quantity" placeholder='quantity' required readOnly /> <br />
                <input className='w-100 mb-2' type="number" name="quantity" placeholder={tool.quantity ? 'Stock Available' : 'Sold'} required readOnly /> <br /> <br />
                <input className='btn btn-delivered' type="submit" value="Delivered" />
            </form> */}
            {/* <form onSubmit={handleRestock}>
                <h2 className='restock'>Restock the item</h2>
                <input className='w-100 mb-2' type="text" name="quantity" placeholder='quantity' required /> <br />
                <input className='btnn' type="submit" value="Restock" />
            </form> */}

            {/* <NavLink as={Link} to="/manageInventory" className='mt-3 '><button className='in-btn-style' >Manage Inventories</button></NavLink> */}
        </div>
    );
};

export default PurchasePage;