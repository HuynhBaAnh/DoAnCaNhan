import React, { useEffect, useState } from 'react'
import Topic from '../../Component/Content-Topic'
import Title from '../../Component/Title'
import ReactPlayer from 'react-player';
import ServiceBlock from '../../Component/ServiceBlock';




export default function About() {
    const [videoUrl] = useState(localStorage.getItem('videoUrl') || 'public/(1491) Why Marriott, Hyatt And Other Hotel Giants Are Going All In On All-Inclusive Resorts _ Forbes - YouTube - Google Chrome 2024-03-05 11-25-20.mp4');

    const saveVideoUrlToLocalStorage = (url: string) => {
        localStorage.setItem('videoUrl', url);
    };

    useEffect(() => {
        // Lưu videoUrl vào localStorage mỗi khi nó thay đổi
        saveVideoUrlToLocalStorage(videoUrl);
    }, [videoUrl]);
    return (
        <>
            <section className="my-2">
                <div className="container mx-auto text-center relative ">
                    <div className="absolute z-10 w-full flex justify-center">
                        <img src="public/circle-text-two.png" alt="" />
                    </div>
                    <div>
                        <div className="p-4">
                            <Topic title='Welcome to ' />
                            <Topic title='HOTELIER' color='black' />
                        </div>
                        <div className={`text-center`}>
                            <Title title='5 STARS LUXURY HOTEL AND SERVICED RESIDENCE FOR LONG AND SHORT TERM STAY IN SAIGON'
                                size='20pt' fontWeigh='400' />
                            <Title title='The Hotelier is not simply a place, it is a lifestyle.' fontWeigh='350' size='18pt' />
                            <Title title='Phasellus vel accumsan odio. Sedghk ligula tellus, vestibulum eu est in, fermentum malesuada orci. Maecenas sagittis justo sit amesdrt felis tincidunt dictum. Suspendisse potenti. Sed vehicula leo non augue mollis, ac auctor magna bibendum. Pellente habitant morbi tristique senectus et netus et males fames ac turpis egestas. In eget fringilla masgdsa. Mkrgorbi vulputate augue id vulputate congue sollicitudi tristique.' size='12pt' fontWeigh='250' />
                        </div>
                    </div>
                    <div className="w-full flex justify-center m-3">
                        <img src="public/signature.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto flex justify-center">
                <div className="w-4/5">
                    <ReactPlayer
                        url={videoUrl}
                        width="400"
                        height="300"
                        loop={true}
                        playing={true}
                        muted={true}
                        controls={false}
                    />
                </div>
            </section>

            <section className="my-2">
                <div className="container mx-auto grid grid-cols-3 gap-3">
                    <div className="col-span-3 md:col-span-1">
                        <ServiceBlock
                            to='/food&drink'
                            title="Restaurant"
                            text="Nam ornare metus vel tempor tincidunt. Duis erat erat, sagittis nec euismod eu, hendrerit in justo. Nulla euismod, sapien ut viverra rutrum, leo velit."
                        />
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <ServiceBlock
                            title="Travel Fast"
                            to='/food&drink'
                            text="Nam ornare metus vel tempor tincidunt. Duis erat erat, sagittis nec euismod eu, hendrerit in justo. Nulla euismod, sapien ut viverra rutrum, leo velit."
                        />
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <ServiceBlock
                            to='/food&drink'
                            title="Premium"
                            text="Nam ornare metus vel tempor tincidunt. Duis erat erat, sagittis nec euismod eu, hendrerit in justo. Nulla euismod, sapien ut viverra rutrum, leo velit."
                        />
                    </div>
                </div>
            </section>


        </>
    )
}