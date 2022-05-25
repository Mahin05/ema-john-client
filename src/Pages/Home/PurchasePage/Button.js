import React from 'react';

const Button = () => {
    return (
        <div>
            <input className='bg-primary' type="submit" value="Place Order" />
           {/* <form>
                <input type="text" name='name' value={user.name} placeholder='name' /> <br />
                <input type="email" name='email' value={user.email} placeholder='email' /> <br />
                <input type="text" name='service' value={tool.name} placeholder='service' /> <br />
                <input type="text" name='minimumQuantity' onChange={handleMinimumQuantity} placeholder={tool.minimunOrderQuantity} /> <br />
                <input type="text" name='availableQuantity' value={tool.availableQuantity} placeholder='address' /> <br />
                <input type="text" name='phone' value={user.phone} placeholder='phone' /> <br />
                {
                    error ? <input disabled className='bg-primary' type="submit" value="Place Order" /> :
                        <input className='bg-primary' type="submit" value="Place Order" />

                }
                {error}
            </form> */}
        </div>
    );
};

export default Button;

