import React from 'react';

const Join = () => {
    return (
        <section className="text-center px-5 pb-5">
            <h1 className="text-3xl bg-clip-text text-black">
                Sumate al movimiento
            </h1>
            <p className="m-4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie fames adipiscing lorem nunc, phasellus est. Diam arcu nisl, urna in consectetur ac. consectetur ac g lorem nunc.
            </p>
            <div className="p-4 shadow-md rounded-md text-left" style={{maxWidth: 400}}>
                <label className="block mb-4">
                    <span className="text-gray-700">Nombre</span>
                    <input className="form-input mt-1 block w-full shadow-md rounded-md p-2" placeholder="Decinos tu nombre" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Correo electrónico</span>
                    <input className="form-input mt-1 block w-full shadow-md rounded-md p-2" placeholder="usuario@ejemplo.com" />
                </label>
                <label className="block mt-4">
                    <span className="text-gray-700">Universidad</span>
                    <select className="form-select mt-1 block w-full shadow-md rounded-md p-2">
                    <option>Universidad de Buenos Aires (UBA)</option>
                    <option>Universidad Argentina de la Empresa (UADE) </option>
                    </select>
                </label>
                <div className="flex mt-6">
                    <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Enviarme emails ocasionales sobre eventos</span>
                    </label>
                </div>
                <div className="items-center container flex flex-col gap-5 mx-auto">
                    <button className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">Unirme</button>
                </div>
            </div>
        </section>
    );
};

export default Join;