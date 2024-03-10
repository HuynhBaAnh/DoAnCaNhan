import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './form.module.scss';
import { useNavigate } from 'react-router-dom';

const form = yup.object({
    adult: yup.number().required(),
    child: yup.number().required(),
    checkIn: yup.date().required(),
    checkOut: yup.date()
        .required()
        .min(yup.ref('checkIn')),
}).required();

interface typeForm {
    adult: number;
    child: number;
    checkIn: Date;
    checkOut: Date;
}

export default function FormBooking() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(form),
    });

    const onSubmit = (data: typeForm) => {
        console.log(data);
        navigate('/rooms'); // Chuyển hướng tới trang "/rooms"
    };

    return (
        <form className="grid grid-cols-8 gap-0.5 md:px-14" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-8 md:col-span-2 mx-1 ">
                <label className={styles.label} htmlFor="checkIn">Check in:</label>
                <input type="date" id="checkIn" {...register("checkIn")} placeholder='' className={styles.input} />
            </div>
            <div className="col-span-8 md:col-span-2 mx-1 relative">
                <label className={styles.label} htmlFor="checkOut">Check out:</label>
                <input type="date" id="checkOut" {...register("checkOut")} placeholder='Check out' className={`${styles.input} ${errors.checkOut && styles.error}`} />
            </div>
            <div className="col-span-8 md:col-span-1 mx-1">
                <label className={styles.label} htmlFor="Adult">Adult:</label>
                <input type="text" placeholder='Adult' {...register("adult")} id='Adult' className={styles.input} />
            </div>
            <div className="col-span-8 md:col-span-1 mx-1">
                <label className={styles.label} htmlFor="Child">Child:</label>
                <input type="text" placeholder='Child' {...register("child")} id='Child' className={styles.input} />
            </div>
            {/* Thêm các trường nhập khác vào đây */}
            <div className="col-span-8 md:col-span-2 mx-1">
                <button type="submit" className={`bg-orange-500 my-3 md:my-6 ${styles.button}`}>BOOK NOW</button>
            </div>
        </form>
    );
}
