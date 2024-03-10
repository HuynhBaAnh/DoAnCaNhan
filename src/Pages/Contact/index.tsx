import React from 'react'
import Title from '../../Component/Title'
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaSquareYoutube } from 'react-icons/fa6'
import styles from './contact.module.scss'
import FormSupport from '../../Component/Form-Support'

export default function Contact() {
    return (
        <div className='py-3'>
            <section>
                <div className="border">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.310736446923!2d108.1578933759218!3d16.049357039
                        968093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421938d61a3ce5%3A0x29d80f3ebbdcb44a!2zxJDhuqFpIEjhu41jIER1e
                        SBUw6JuIEjDsmEgS2jDoW5oIE5hbQ!5e0!3m2!1svi!2s!4v1709651423677!5m2!1svi!2s"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            <section className="container mx-auto my-2 grid-cols-2 grid gap-3">

                <div className="col-span-2 md:col-span-1 bg-gray-100 rounded-md py-4 px-8">
                    <div className="w-full flex justify-center pb-4">
                        <Title title="Leave A Comments" fontWeigh='550' size='16pt' />
                    </div>
                    <div className='flex justify-start'>
                        <p className='w-24'>
                            <Title title='Address:' fontWeigh='400' size='14pt' />
                        </p>
                        <Title title='121 King Street, Melbourne Victoria 3000, Australia' size='12pt' fontWeigh='200' />

                    </div>

                    <div className='flex justify-start'>
                        <p className='w-24'>
                            <Title title='E-mail:' fontWeigh='400' size='14pt' />
                        </p>
                        <Title title='example@info.com' size='12pt' fontWeigh='200' />
                    </div>

                    <div className='flex justify-start'>
                        <p className='w-24'>
                            <Title title='Telephone:' fontWeigh='400' size='14pt' />
                        </p>
                        <Title title='(+99 000 111 222 55 00) (+99 000 111 222 55 22)' size='12pt' fontWeigh='200' />
                    </div>

                    <div className='flex justify-start'>
                        <p className='w-24'>
                            <Title title='Social:' fontWeigh='400' size='14pt' />
                        </p>
                        <div className='grid grid-cols-4 gap-3 w-36'>
                            <p className={`col-span-1 ${styles.hover}`}>
                                <a href=""><FaSquareFacebook className='w-full h-full' /></a>
                            </p>
                            <p className={`col-span-1 ${styles.hover}`}>
                                <a href=""><FaSquareInstagram className='w-full h-full' /></a>
                            </p>
                            <p className={`col-span-1 ${styles.hover}`}>
                                <a href=""> <FaSquareTwitter className='w-full h-full' /></a>
                            </p>
                            <p className={`col-span-1 ${styles.hover}`}>
                                <a href=""><FaSquareYoutube className='w-full h-full' /></a>
                            </p>

                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center h-1/2 py-5">
                        <img src="public/signature.png" alt="" className="w-1/2" />
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 grid justify-center  bg-gray-100 rounded-md py-4 px-1">
                    <div className="w-full flex justify-center pb-4">
                        <Title title="Contact with us" fontWeigh='550' size='16pt' />
                    </div>
                    <FormSupport />
                </div>
            </section>
        </div>
    )
}