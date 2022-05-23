import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bannerImage from '../../assets/images/product-jpeg-500x500.jpg';
  import { faTools} from '@fortawesome/free-solid-svg-icons'


const Banner = () => {
    return (
        <div  style={{'margin-bottom':'15%'}}  className='max-w-7xl mx-auto px-12'>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">ISLAM'S TOOLS SHOP <FontAwesomeIcon icon={faTools}/></h1>
                    <p class="py-6">Islam's tools shop is a renowned tools shop in the city. You can get all your needed tools here at reasonable price. To know more take a look at our website</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;