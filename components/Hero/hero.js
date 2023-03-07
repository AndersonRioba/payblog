import React from 'react';

export default function Hero() {
    return (
        <div className="flex w-full h-full items-center justify-center p-20 bg-gray-100">
            <div className="flex-col ">
                <h1 className="text-4xl font-bold">Heading Title</h1>
                <p className="text-lg">Description Subheading</p>
                <div className="mt-4">
                    <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}