import { MeshProvider } from "@meshsdk/react";
import React from 'react';

export default function Hero() {
    return (
        <div className="w-full p-20 bg-gray-100 h-96">
            <div className="flex flex-col items-center justify-center">
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