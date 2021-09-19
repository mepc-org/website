import React from 'react';

const Hero = () => {
    return (
        <section className="text-center">
            <h1 className="mt-20 text-3xl mb-2 bg-clip-text text-black">
                Título de la bajada
            </h1>
            <div 
                style={{ height: '250px' }} 
                className="relative md:container mx-auto bg-gray-100">
            </div>
            <div className="m-8 text-left">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt enim quis in sollicitudin lectus morbi consequat egestas. Id cras dui 
                </p>
            </div>
        </section>
    );
};

export default Hero;