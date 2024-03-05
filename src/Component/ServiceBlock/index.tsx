import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    text: string;
    to?: string
}

export default function ServiceBlock({ title, text, to }: Props) {
    return (
        <>
            <div className="bg-gray-100 border-2 border-gray-200 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-700 leading-relaxed">{text}</p>
                <div className="mt-4">
                    {to !== undefined && (
                        <Link to={to} className="text-orange-500 inline-flex items-center">
                            Read More +
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}