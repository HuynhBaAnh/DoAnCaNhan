import React from 'react'
import Title from '../../Component/Title'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'


export default function Food() {
    return (
        <>
            <section>
                <div className=" bg-white">
                    <div className="container mx-auto pb-24 py-3 relative">
                        <Title title='Our Restaurant' size='25pt' fontWeigh='500' letterSpacing='1px' />
                        <p className="pt-2">
                            <Title title='Rooms And Suites Inspira
                 & tionration Destinations you can travel to now.' letterSpacing='2px' size='12pt' fontWeigh='300' />
                        </p>
                        <div className="bg-gray-200 p-4 absolute z-10 bottom-0 left-3/4">
                            <p className="flex">
                                <Link to='/'>
                                    <Title title='Home' fontWeigh='500' size='13pt' />
                                </Link>
                                <span className="flex items-center">
                                    <FaAngleRight className='pt-0.5' />
                                    <Title title='Restaurant' size='13pt' />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200">
                <div className="container mx-auto px-2 py-7 transition duration-300 ease-in-out transform hover:scale-105">
                    <div className='grid grid-cols-5 items-center bg-white p-5 rounded-2xl'>
                        <div className="col-span-5 md:col-span-2 flex justify-start md:justify-center">
                            <img src="public/food3.jpg" alt="" className="w-full sm:w-4/5 lg:w-1/2 rounded-2xl" />
                        </div>
                        <div className="col-span-5 md:col-span-3 text-center ">
                            <Title title='The Hotelier is not simply a place, it is a lifestyle.' fontWeigh='350' size='18pt' />
                            <br />
                            <Title title='Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                              nulla pariatur. excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia
                               deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                             voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' size='12pt' fontWeigh='250' />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-2 py-7 transition duration-300 ease-in-out transform hover:scale-105">
                    <div className='grid grid-cols-5 items-center bg-white p-5 rounded-2xl '>
                        <div className="col-span-5 md:col-span-3 text-center">
                            <Title title='The Hotelier is not simply a place, it is a lifestyle.' fontWeigh='350' size='18pt' />
                            <br />
                            <Title title='Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                              nulla pariatur. excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia
                               deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                             voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' size='12pt' fontWeigh='250' />
                        </div>
                        <div className="col-span-5 md:col-span-2 flex justify-center md:justify-end">
                            <img src="public/food2.jpg" alt="" className="w-full sm:w-4/5 lg:w-1/2 rounded-2xl" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-2 py-7 transition duration-300 ease-in-out transform hover:scale-105">
                    <div className='grid grid-cols-5 items-center bg-white p-5 rounded-2xl'>
                        <div className="col-span-5 md:col-span-2 justify-start md:justify-center">
                            <img src="public/food4.jpg" alt="" className="w-full sm:w-4/5 lg:w-1/2 rounded-2xl" />
                        </div>
                        <div className="col-span-5 md:col-span-3 text-center ">
                            <Title title='The Hotelier is not simply a place, it is a lifestyle.' fontWeigh='350' size='18pt' />
                            <br />
                            <Title title='Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                              nulla pariatur. excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia
                               deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                             voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' size='12pt' fontWeigh='250' />
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}