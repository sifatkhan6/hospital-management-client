import React from 'react';
import hospital from '../../assets/images/hospital.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={hospital} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Your New Life Starts Here</h1>
                    <p className="py-6">Don't worry, we all will fight against your disease. Our Doctors & Medical Staffs always promise you to give the best treatment & service. You will recover soon.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;