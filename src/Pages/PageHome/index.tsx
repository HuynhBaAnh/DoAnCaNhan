import React from 'react';
import styles from './home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-datepicker/dist/react-datepicker.css';
import Topic from '../../Component/Content-Topic';
import Title from '../../Component/Title';
import Images from '../../Component/Imagess';
import { product } from './product';
import Form from '../../Component/Form-Booking';






export default function HomePage() {


    //bắt sự kiện slide thay đổi 
    const [changeSlide, setchangeSlide] = React.useState(true)
    const handleChange = () => {
        changeSlide === true ? setchangeSlide(false) : setchangeSlide(true)
    }



    return (
        <>
            <header className={` ${styles.header}`}>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    direction={'horizontal'}
                    pagination={{ clickable: true }}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    onSlideChange={() => { handleChange() }}
                >
                    <SwiperSlide><img src="public/1.avif" alt="" style={{ width: '100%' }} /></SwiperSlide>
                    <SwiperSlide><img src="public/2.avif" alt="" style={{ width: '100%' }} /></SwiperSlide>
                </Swiper>

                <div className={`w-11/12 lg:w-4/5 mx-auto sm:top-full ${styles.form}`}>
                    <Form />
                </div>
            </header>

            <div className={`container mx-auto mt-2 md:mt-12 `}>
                <div className="pt-4">
                    <Topic title='Welcome to ' />
                    <Topic title='HOTELIER' color='black' />
                    <div className={`grid grid-cols-2 items-center`}>
                        <div className={`col-span-2 md:col-span-1 `}>
                            <div className={`text-center`}>
                                <Title title='5 STARS LUXURY HOTEL AND SERVICED RESIDENCE FOR LONG AND SHORT TERM STAY IN SAIGON'
                                    size='20pt' fontWeigh='400' />
                                <Title title='The Hotelier is not simply a place, it is a lifestyle.' fontWeigh='350' size='18pt' />
                                <Title title='Located in the heart of Ho Chi Minh City in the leafy and historic District 3, The Hotelier Saigon
                         is a stylish and sophisticated 5 stars all-suite hotel and serviced residence with
                          its impeccable facilities and services. It is designed for you to live life the way you want.' size='12pt' fontWeigh='250' />
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 gap-1 col-span-2 md:col-span-1 `}>
                            <div className="grid col-span-1 justify-items-end">
                                <Images src='public/about-1.jpg' width='210px' />
                                <Images src='public/about-2.jpg' width='180px' paddingt='5px' />
                            </div>

                            <div className=" grid col-span-1 justify-start ">
                                <Images src='public/about-3.jpg' width='170px' paddingb='2px' />
                                <Images src='public/about-4.jpg' width='220px' />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Topic title='Explore Our ' />
                    <Topic title='ROOMS' color='black' />
                    <div className='p-2'>
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {product.map((slideContent) => (
                                <SwiperSlide key={slideContent.id} virtualIndex={slideContent.id}>
                                    <Images src={slideContent.url} marginLeft='5px' marginBottom='10px' />
                                    <Title title={slideContent.topic} size='13pt' fontWeigh='450' />
                                    <Title title={slideContent.title} size='11pt' fontWeigh='250' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className={`container mx-auto mt-2 md:mt-12 mb-3`}>
                <Topic title='OUR FEATURED ' />
                <Topic title='RESTAURANT' color='black' />
                <div className={`grid grid-cols-2 gap-4 items-center`}>
                    <div className={`col-span-2 md:col-span-1 `}>
                        <div className={`text-center`}>
                            <Title title='Le Café Restaurant & Bar'
                                size='20pt' fontWeigh='400' />
                            <Title title='Located on the ground floor, Le Café Restaurant & Bar is open from 6:30 to 22:00 every day. It features a breakfast buffet and a la carte menu serving up Mediterranean and Asian cuisine. You can also watch the chefs at work in the open kitchen.' size='12pt' fontWeigh='250' />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-1 col-span-2 md:col-span-1 p-2 `}>
                        <div className="grid col-span-1 justify-items-end">
                            <Images src='public/about-1.jpg' width='210px' />
                            <Images src='public/about-2.jpg' width='180px' paddingt='5px' />
                        </div>

                        <div className=" grid col-span-1 justify-start items-center ">
                            <Images src='public/about-3.jpg' width='170px' paddingb='2px' />

                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}
