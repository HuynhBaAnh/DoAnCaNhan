import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './form.module.scss';
import { useNavigate } from 'react-router-dom';


const schema = yup.object({
    checkIn: yup.object({
        month: yup.string().required(),
        day: yup.string().required(),
    }),
    checkOut: yup.object({
        month: yup.string().required(),
        day: yup.string().required(),
    }).required(),
    room: yup.number().required(),
}).required();

interface CheckIn {
    month: string;
    day: string;
}

interface CheckOut {
    month: string;
    day: string;
}


interface typeForm {
    checkIn: CheckIn;
    checkOut: CheckOut;
    room: number;
}

export default function FormBooking() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = (data: typeForm) => {
        console.log(data);

        navigate('/rooms');
    };

    return (
        <form className="grid grid-cols-8 gap-0.5" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-8 md:col-span-2 mx-1">
                <label className={styles.label} htmlFor="checkIn">Check in</label>
                <input type="hidden" id="checkIn" {...register("checkIn.day")} className={styles.input} />
                <input type="hidden" id="checkIn" {...register("checkIn.month")} className={styles.input} />

            </div>
            <div className="col-span-8 md:col-span-2 mx-1 relative">
                <label className={styles.label} htmlFor="checkOut">Check out</label>
                <input type="hidden" id="checkOut" {...register("checkOut")} className={`${styles.input} ${errors.checkOut && styles.error}`} />

            </div>
            <div className="col-span-8 md:col-span-2 mx-1">
                <button type="submit" className={`bg-black my-3 md:my-6 ${styles.button}`}>Book Now</button>
            </div>
        </form >
    );
}
