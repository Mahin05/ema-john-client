import React from 'react';

const Contact = () => {
    return (
        <div  className='bg-base-200 py-14'>
          <div className='text-center pb-14 text-white'>
            <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
              Contact Us
            </p>
            <h1 className='text-4xl text-black'>Stay connected with us</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-5'>
            <input
              style={{'width':'80%'}}
              type='text'
              placeholder='Email Address'
              className='input w-full max-w-md'
            />
            <input
            style={{'width':'80%'}}
              type='text'
              placeholder='Subject'
              className='input w-full max-w-md'
            />
            <textarea
            style={{'width':'80%'}}
              className='textarea w-full max-w-md'
              placeholder='Your message'
              rows={6}
            ></textarea>
            <button class="btn btn-outline">Button</button>
          </div>
        </div>
    );
};

export default Contact;