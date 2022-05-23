import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Tool from '../Tool/Tool';
import './Tools.css'

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://infinite-island-68376.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div  className='max-w-7xl mx-auto px-12'>
            {/* {
                tools.length === 0 ? <Loading></Loading> : ''
            } */}
            <div id='tool'>
                <h2 className='tools-title'>Tools</h2>
                <div className="tools-container">
                    {
                        tools.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>
                {/* <NavLink className='mt-3'><button className='mng-tool'>Buy Now</button></NavLink> */}
            </div>
        </div>
    );
};

export default Tools;