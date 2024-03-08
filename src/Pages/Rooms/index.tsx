import React from 'react'
import Title from '../../Component/Title'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'


export default function Room() {
    return (
        <>
            <section>
                <div className="bg-gray-200 relative">
                    <div className="container mx-auto pb-24 py-3">
                        <Title title='Our Rooms' size='25pt' fontWeigh='500' letterSpacing='1px' />
                        <p className="pt-2">
                            <Title title='Rooms And Suites Inspira
                 & tionration Destinations you can travel to now.' letterSpacing='2px' size='12pt' fontWeigh='300' />
                        </p>
                        <div className="bg-white border-white p-4 absolute z-10 bottom-0 left-3/4">
                            <p className="flex">
                                <Link to='/'>
                                    <Title title='Home' fontWeigh='500' size='13pt' />
                                </Link>
                                <span className="flex items-center">
                                    <FaAngleRight className='pt-0.5' />
                                    <Title title='Our Rooms' size='13pt' />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto">

                </div>
            </section>
        </>



    )
}