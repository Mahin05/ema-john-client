import React from 'react';

const MyPortFolio = () => {
    return (
        <div className='max-w-7xl mx-auto px-12 my-12'>
            <h1 className="text-3xl text-center">My Portfolio</h1>
            <div>
                <h1 className="text-2xl">Name: <span>Mohammad Minhajul Islam</span></h1>
                <h1 className="text-2xl">Email: <span><a href='#'>mahin.islam05@gmail.com</a></span></h1>
                <h1 className="text-2xl">Education: <span>Bachelor of Science in Computer Science & Engineering Deprtment <br /> BGC Trust University Bangladesh</span></h1>
                <h1 className="text-2xl">Skills: <br /> 
                <li>Frontend: HTML5, CSS3, Bootstrap, Tailwind CSS, Javascript/ES6, React JS</li>
                <li>Backend: Node JS, Express JS, MongoDB</li>
                <li>Pyhon, Django, Flask, PHP, Laravel, Mysql</li>
                <li>Git and GitHub, Chrome Dev Tool, Firebase, Heroku, Netlify</li>
                <li>MS Office</li>
                </h1>
                <h1 className="text-2xl">Projects: 
                <li><a className='text-blue-400' href='https://islams-vehicle-corporati-6cfe1.web.app/'>ISLAMS VEHICLE CORPORATION</a></li>
                <li><a className='text-blue-400' href='https://photographer-mahin-8c586.web.app/'>PHOTOGRAPHER MAHIN</a></li>
                <li><a className='text-blue-400' href='https://online-phone-shop.netlify.app/'>PHONE SHOP</a></li>
                </h1>


            </div>
        </div>
    );
};

export default MyPortFolio;