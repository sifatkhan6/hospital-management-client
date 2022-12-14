import React from 'react';
import cardio from '../../assets/images/cardio2.png';
import cavity from '../../assets/images/cavity.png';
import nurology from '../../assets/images/nurology.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Cardiology',
            description: '',
            img: cardio
        },
        {
            _id: 2,
            name: 'Anesthesiology',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Nurology',
            description: '',
            img: nurology
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-2xl font-bold uppercase mb-4'>Our Services</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;