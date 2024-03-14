import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './formSupport.module.scss';


const form = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    mail: yup.string().required(),
    opinion: yup.string(),
}).required();


interface typeForm {
    name: string;
    phone: string;
    mail: string;
    opinion?: string;
}

export default function FormSupport() {
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
        <form className="grid grid-cols-2 gap-0.5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-2 mx-1">
                <label className={styles.label} htmlFor="name">Your Name:</label>
                <input type="text" id="name" {...register("name")} className={styles.input} />
            </div>

            <div className="col-span-2 mx-1 relative">
                <label className={styles.label} htmlFor="mail">Your E-mail:</label>
                <input type="text" id="mail" {...register("mail")} className={`${styles.input} ${errors.mail && styles.error}`} />

            </div>

            <div className="col-span-2 mx-1">
                <label className={styles.label} htmlFor="phone">Your Phone Number:</label>
                <input type="text" placeholder='Your Phone Number' {...register("phone")} id='phone' className={styles.input} />
            </div>

            <div className="col-span-2 mx-1">
                <label className={styles.label} htmlFor="opinion">Opinion:</label>
                <textarea className={`${styles.textarea}`} {...register("opinion")} id="opinion" name="message" cols={60} rows={6} ></textarea>
            </div>

            <div className="col-span-2 mx-1 w-full flex justify-center">
                <button type="submit" className={`bg-orange-500 my-3 ${styles.button}`}>Contact</button>
            </div>
        </form >
    );
}
