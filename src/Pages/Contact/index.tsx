import React from 'react'
import Title from '../../Component/Title'
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaSquareYoutube } from 'react-icons/fa6'
import styles from './contact.module.scss'
import FormSupport from '../../Component/Form-Support'

export default function Contact() {
    return (
        <div className='bg-gray-200 py-3'>
            <section>

            </section>

            <section className="container mx-auto grid-cols-2 grid gap-3">
                <div className="col-span-2 md:col-span-1 bg-white  border-slate-500 rounded-md p-3">
                    <FormSupport />
                </div>
                <div className="col-span-2 md:col-span-1 bg-white  border-slate-500 rounded-md p-3">
                    <Title title="Leave A Comments" fontWeigh='550' size='16pt' />
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
                    <div className="pt-2">
                        <iframe
                            width='100%'
                            height="auto"
                            src="https://www.google.com/maps/place/38+Ch%C6%A1n+T%C3%A2m+2,+Ho%C3%A0+Minh,+Li%C3%AAn+Chi%E1%BB%83u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0639822,108.1564373,17z/data=!3m1!4b1!4m5!3m4!1s0x314219269e4db86b:0x4cdd296b2de82b0!8m2!3d16.0639771!4d108.1590122?entry=ttu"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}