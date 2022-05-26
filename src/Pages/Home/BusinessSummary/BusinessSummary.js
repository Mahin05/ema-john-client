import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faDollar, faComments,faTools  } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import CountUp from 'react-countup';
import './BusinessSummary.css'

const BusinessSummary = () => {
    return (
        <div className='summary'>
            <h1 className="text-3xl text-center bs-text-style">BUSINESS SUMMARY</h1>
        <div className='max-w-7xl mx-auto max-w-7xl mx-auto px-12 bs-sum'>
            <div className='text-center each-sum'>
                <FontAwesomeIcon className='font-a' icon={faPeopleGroup}></FontAwesomeIcon> <br />
                <CountUp className='count-up'  end={100} duration={5} suffix="+" />
                <h2 className="text-3xl font-bold h2-style">Customers</h2>
            </div>
            <div className='text-center each-sum'>
                <FontAwesomeIcon className='font-a'   icon={faDollar}></FontAwesomeIcon> <br />
                <CountUp className='count-up'  end={120} duration={5} suffix="M+" />
                <h2 className="text-3xl font-bold h2-style">Annual Revenue</h2>
            </div>
            <div className='text-center each-sum'>
                <FontAwesomeIcon className='font-a'   icon={faComments}></FontAwesomeIcon> <br />
                <CountUp className='count-up'  end={33} duration={5} suffix="K+" />
                <h2 className="text-3xl font-bold  h2-style">Reviews</h2>
            </div>
            <div className='text-center each-sum'>
                <FontAwesomeIcon className='font-a'   icon={faTools}></FontAwesomeIcon> <br />
                <CountUp className='count-up' end={50} duration={5} suffix="+" />
                <h2 className="text-3xl font-bold h2-style">Tools</h2>
            </div>
        </div>
        </div>
    );
};

export default BusinessSummary;