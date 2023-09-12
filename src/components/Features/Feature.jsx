import { ArrowRightCircleIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import React from 'react';
const Feature = ({feature}) => {
    // console.log(feature);
    const {name, published_in, image, description, features,} = feature;
    console.log(features)
    return (
        <div className='m-5 border rounded-lg'>
        <div className="card p-4 w-full h-96 bg-base-100 shadow-xl">
        <figure><img className='w-full h-full' src={image} alt="Shoes" /></figure>
        <div className="card">
          <h2 className="card-title font-bold text-black my-4">Features</h2>
          <div className='border-b-2 border-indigo-500 my-2 pb-3'>
          {
            features.map((feature, idx) => <li className='font-normal'> {feature}</li> )
          }
          </div>
          
          <div className="flex justify-between items-center">
           <div>
           <h2 className="card-title font-bold text-black mt-4">{name}</h2>
           <div className='flex gap-2 my-4'>

           <CalendarDaysIcon className='h-6 w-6 text-blue-500'></CalendarDaysIcon>
           <p className='font-medium'>
              {published_in}</p>
           </div>
           </div>
            <button className="">
            <ArrowRightCircleIcon className='h-6 w-6 text-black'></ArrowRightCircleIcon>
            </button>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default Feature;