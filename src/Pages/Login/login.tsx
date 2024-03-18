import React from 'react'
import styles from './login.module.scss'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';


const form = yup.object({
    username: yup.string().required("The email address or mobile number you entered isn't connected to an account. Find your account and log in."),
    password: yup.string().required(),
}).required();

interface typeForm {
    username: string;
    password: string;
}
export default function Login() {
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
            <div className="py-10">
                <Link to="/" className='w-full flex justify-center pb-5'>
                    <img src="public/logo-dark.png" alt="" className='lg:w-1/12 w-1/4' />
                </Link>
                <section className="grid grid-cols-5 gap-2 container mx-auto">
                    <div className={`hidden lg:flex col-span-5 lg:col-span-3 w-full ${styles.left}`}>
                    </div>
                    <div className="col-span-5 lg:col-span-2  w-full flex justify-center items-center pb-12">
                        <form action="" onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
                            <input type="text" id='username' {...register("username")} placeholder='User Name' className={styles.input} />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                            <input type="password" id="password" placeholder='Password' {...register("password")} className={styles.input} />
                            <button className={`bg-orange-500 ${styles.button}`}>Log in</button>
                            <div className="h-px bg-orange-500"></div>
                            <div className='w-full flex justify-center p-4'>
                                <img src="public/signature.png" alt="" />
                            </div>
                        </form>
                    </div>
                    <div className={`lg:hidden flex col-span-5 lg:col-span-3 w-full ${styles.left}`}>
                    </div>
                </section>
            </div>
        </>

    )
}