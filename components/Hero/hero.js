import React from 'react'
import bg from '../../public/hero.jpg'

export default function Hero() {

    const style = {
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };

    return (
        <div className="flex w-full h-full items-center justify-center p-20 bg-gray-500 bg-opacity-50 bg-center bg-cover"  style={style}>
            <div className="flex-col flex items-center">
                <h1 className="text-5xl font-bold">Never Stop Exploring!</h1>
                <p className="text-lg">Description Subheading</p>
                <div className="mt-4">
                    <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
                        Connect
                    </button>
                </div>
            </div>
        </div>
    );
}