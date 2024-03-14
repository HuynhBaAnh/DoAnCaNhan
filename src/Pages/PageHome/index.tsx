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
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function HomePage() {


    //bắt sự kiện slide thay đổi 
    const [changeSlide, setchangeSlide] = React.useState(true)
    const handleChange = () => {
        changeSlide === true ? setchangeSlide(false) : setchangeSlide(true)
    }



    return (
        <div className="bg-slate-200 ">
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

            </header>

            <div className={`pt-4 `}>
                <div className=" container mx-auto mt-2 md:mt-12">
                    <Topic title='Welcome to ' />
                    <Topic title='HOTELIER' color='black' />
                    <div className={`grid grid-cols-2 gap-5 items-center`}>
                        <div className={`col-span-2 md:col-span-1 relative bg-white rounded-2xl p-8`}>
                            <div className="absolute z-10 w-full h-full flex justify-center items-center">
                                <img className={`${styles.cỉrcle}`} src="public/circle-text-two.png" alt="" width="25%" />
                            </div>
                            <div className={`text-center`}>
                                <Title title='5 STARS LUXURY HOTEL AND SERVICED RESIDENCE FOR LONG AND SHORT TERM STAY IN SAIGON'
                                    size='20pt' fontWeigh='400' />
                                <br />
                                <Title title='The Hotelier is not simply a place, it is a lifestyle.' fontWeigh='350' size='18pt' />
                                <br />
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
            </div>

            <div className="pt-4">
                <div className='p-2 container mx-auto'>
                    <Topic title='Explore Our ' />
                    <Topic title='ROOMS' color='black' />
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
                                <div className="w-full bg-white h-2/3 p-2 rounded-2xl">
                                    <img src={slideContent.url} alt="" className="rounded-2xl mb-1 w-full" />
                                    <Title title={slideContent.topic} size='13pt' fontWeigh='450' />
                                    <br />
                                    <Title title={slideContent.title} size='11pt' fontWeigh='250' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className={`container mx-auto mt-2 md:mt-12 pb-3`}>
                <Topic title='OUR FEATURED ' />
                <Topic title='RESTAURANT' color='black' />
                <div className={`bg-white rounded-2xl grid grid-cols-2 gap-10 relative items-center`}>
                    <div className={`col-span-2 md:col-span-1 pr-2 `}>
                        <div className="bg-slate-200 rounded-t-2xl border-white p-3 absolute z-10 -bottom-2 left-3">
                            <p className="flex">
                                <Link to='/food&drink' className="flex items-center">
                                    <FaAngleRight className='pt-0.5 text-orange-600' />
                                    <Title title='Our Rooms' size='13pt' color='rgb(234 88 12)' fontWeigh='500' />
                                </Link>
                            </p>
                        </div>

                        <div className={`text-center`}>
                            <Title title='Le Café Restaurant & Bar'
                                size='20pt' fontWeigh='400' />
                            <br />
                            <Title title='Located on the ground floor, Le Café Restaurant & Bar is open from 6:30 to 22:00 every day. It features a breakfast buffet and a la carte menu serving up Mediterranean and Asian cuisine. You can also watch the chefs at work in the open kitchen.' size='12pt' fontWeigh='250' />
                        </div>
                    </div>
                    <div className={`col-span-2 md:col-span-1 p-2 `}>
                        <div className="w-full flex lg:justify-end justify-center">
                            <img src="public/food1.jpg" alt="" width="85%" className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
