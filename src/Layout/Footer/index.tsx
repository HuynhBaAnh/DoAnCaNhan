
import Title from '../../Component/Title'
import UlLi from '../../Component/Footer-ul'
import { FaAngleRight, FaFacebook, FaMailBulk, FaMapMarked, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <>
            <div className="h-0.5 bg-orange-500"></div>
            <footer className="bg-slate-900 ">
                <div className="container mx-auto grid grid-cols-4 ">
                    <div className="col-span-4 md:col-span-1 text-center">
                        <Link to='/'>
                            <Title title='HOTELIER' size='28pt' fontWeigh='800' color='rgb(248, 217, 195)' textShadow='-5px 5px 6px rgb(217 119 6 )' />
                        </Link>
                    </div>
                    <div className="col-span-4 md:col-span-1 ">
                        <div className="text-center">
                            <Title title='CONTACT' size='14pt' fontWeigh='750' color='rgb(217 119 6 )' />
                        </div>
                        <ul className="grid justify-center">
                            <UlLi icon={<FaMapMarked className="w-5 h-5" />} title='HO CHI MINH CITY' />
                            <UlLi icon={<FaPhoneAlt className="w-5 h-5" />} title='+012 345 67890' />
                            <UlLi icon={<FaMailBulk className="w-5 h-5" />} title='info@example.com' />
                        </ul>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <div className="text-center">
                            <Title title='SERVICES' size='14pt' fontWeigh='750' color='rgb(217 119 6 )' />
                        </div>
                        <ul className="grid justify-center">
                            <UlLi icon={<FaAngleRight className="w-5 h-5" />} title='Food & Drink' />
                            <UlLi icon={<FaAngleRight className="w-5 h-5" />} title='Spa & Fitness' />
                        </ul>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <div className="text-center">
                            <Title title='COMPANY ' size='14pt' fontWeigh='750' color='rgb(217 119 6 )' />
                        </div>
                        <ul className="grid justify-center">
                            <UlLi icon={<FaFacebook className="w-5 h-5 ml-9" />} title='https://www.facebook.com/anhhuynh0311' />
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}