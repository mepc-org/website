import React from 'react';

const About = () => {
    return (
        <section id="about" className="container relative flex flex-wrap items-center w-full px-5 pt-10 pb-5 mx-auto mt-12 mb-12 md:mt-24">
            <div className="w-full px-4 mb-16 ml-auto mr-auto md:w-6/12 ">
            <h3 className="text-3xl bg-clip-text text-black mb-2 text-center title md:text-left">
                ¿Quiénes somos?
            </h3>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-700 sm:text-center md:text-left">
            Somos una organización independiente de estudiantes y graduades, que tenemos como fin promover el pensamiento crítico y la psicología científica, formarnos entre los integrantes en temas afines y reclamar por una formación actualizada, plural y científica.
            </p>
            </div>
            <div className="mx-auto md:w-4/12">
                <iframe
                    className="w-full h-full shadow-lg md:max-w-sm lg:min-w-0 sm:min-w-full"
                    src="https://www.youtube.com/embed/ieSG5JVLOow"
                    width="800" 
                    height="500"
                />
            </div>
        </section>
    );
};

export default About;