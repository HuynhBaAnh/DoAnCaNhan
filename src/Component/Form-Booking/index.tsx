import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './form.module.scss'


const form = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required()
}).required();

interface typeForm {
    name: string;
    email: string;
    phone: string;
}
export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(form),
    });

    const onSubmit = (data: typeForm) => {
        console.log(data);
    };
    return (
        <>
            <form className="grid grid-cols-6 gap-0.5 md:px-14" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-6 md:col-span-2 mx-1 ">
                    <label className={styles.label} htmlFor="checkIn">Your Name</label>
                    <input type="text" id="checkIn" {...register("name")} placeholder='' className={styles.input} />
                </div>
                <div className="col-span-6 md:col-span-2 mx-1 relative">
                    <label className={styles.label} htmlFor="checkOut">Phone</label>
                    <input type="text" id="checkOut" {...register("phone")} placeholder='Check out' className={`${styles.input} ${errors.phone && styles.error}`} />
                </div>
                <div className="col-span-6 md:col-span-2 mx-1">
                    <label className={styles.label} htmlFor="Adult">Email</label>
                    <input type="text" placeholder='Adult' {...register("email")} id='Adult' className={styles.input} />
                </div>
                <div className="col-span-6 mx-1 w-full flex justify-center">
                    <button type="submit" className={`bg-orange-500 my-3 md:my-6 ${styles.button}`}>BOOK NOW</button>
                </div>
            </form>
        </>
    )
}