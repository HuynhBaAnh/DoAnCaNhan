import React, { useState, useEffect } from 'react';
import Title from '../../Component/Title';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './room.module.scss'
import { FaXmark } from 'react-icons/fa6';
import * as yup from 'yup';
import FormBooking from '../../Component/Form-Booking';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface Room {
    id: number;
    number: number;
    type: string;
    price: number;
    images: string[];
    booking: Booking
}

interface Booking {
    status: "not_booked" | "booked";
    start_date: string | null;
    end_date: string | null;
    customer_id: number | null;
    adults: number;
    children: number;
}

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



export default function Room() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [bookingRoom, setBookingRoom] = useState(false);



    useEffect(() => {
        const getRooms = async () => {
            try {
                const response = await fetch('http://localhost:9000/categories');
                if (!response.ok) {
                    throw new Error('Failed to fetch rooms');
                }
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        getRooms();
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(form),
    });

    const onSubmit = (dataform: typeForm) => {
        sessionStorage.setItem('bookingData', JSON.stringify(dataform));
    };

    useEffect(() => {
        // Lấy dữ liệu từ localStorage
        const storedFormData = localStorage.getItem('bookingData');

        if (storedFormData) {
            // Chuyển dữ liệu từ chuỗi JSON thành đối tượng JavaScript
            const parsedFormData = JSON.parse(storedFormData);
            setValue('adult', parsedFormData.adult);
            setValue('child', parsedFormData.child);
            setValue('checkIn', parsedFormData.checkIn);
            setValue('checkOut', parsedFormData.checkOut);
        }
    }, []);

    //Kiểm tra:
    // const [isTest, setIsTest] = useState(false);
    // const Test = () => {
    //     rooms.map((id) => {
    //         if (id.booking.adults > dataf)
    //     })
    // }

    return (
        <div className={styles.room}>

            <section>
                <div className="bg-gray-200 relative">
                    <div className="container mx-auto pb-24 py-3">
                        <Title title='Our Rooms' size='25pt' fontWeigh='500' letterSpacing='1px' />
                        <p className="pt-2">
                            <Title title='Rooms And Suites Inspiration Destinations you can travel to now.' letterSpacing='2px' size='12pt' fontWeigh='300' />
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

            <div className={`w-11/12 lg:w-4/5  mx-auto bg-slate-500 y-3 `}>
                <div className='w-full flex justify-center'>
                    <Title title='Holly Hotel' size='25pt' fontWeigh='400' color='white' />
                </div>
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
            </div>

            <section>
                <div className="container mx-auto ">
                    <div className="grid grid-cols-6 gap-5">
                        {rooms.map((room) => {
                            // if (

                            // ) 
                            {
                                return (
                                    <div key={room.id} className="bg-white rounded-2xl p-5 col-span-3 md:col-span-2">
                                        <div className="w-full flex ">
                                            <Swiper
                                                modules={[Pagination, A11y]}
                                                spaceBetween={1}
                                                slidesPerView={1}
                                                loop={true}
                                                direction={'horizontal'}
                                                pagination={{ clickable: true }}
                                                className="swiper-container" // Đặt class cho Swiper để tùy chỉnh CSS
                                            >
                                                <SwiperSlide>
                                                    <img src={room.images[0]} alt="" className="object-cover w-full h-full rounded-2xl" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={room.images[1]} alt="" className="object-cover w-full h-full rounded-2xl" />
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <div className="text-center">
                                            <p>
                                                <b>{room.type}</b>
                                            </p>
                                            <p>
                                                {room.price}$
                                            </p>
                                        </div>
                                        <div className="flex items-center text-orange-500 cursor-pointer" onClick={() => {
                                            setBookingRoom(true)
                                        }}>
                                            <FaAngleDoubleRight className={`${styles.icon2}`} />
                                            <FaAngleDoubleRight className={`${styles.icon1}`} />
                                            <span className="pl-3"> <b>Booking Now</b></span>
                                        </div>
                                    </div>
                                )
                            }
                        })}

                    </div>

                </div>
            </section>

            {
                bookingRoom && (
                    <section className={`${styles.formInfor}`}>
                        <div className="absolute top-0 right-0 m-4 z-20 cursor-pointer">
                            <FaXmark onClick={() => {
                                setBookingRoom(false)
                            }} />
                        </div>

                        <FormBooking />
                    </section>
                )
            }
        </div>
    );
}
