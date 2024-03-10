import React from 'react'
import { navigationMenu } from '../../Pages/PageHome/navigation';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Menu() {
    //click menu
    const [clickID, setClickID] = React.useState<number | null>(null);
    const handeOnClickID = (itemID: number) => {
        setClickID(clickID == itemID ? null : itemID);
    };

    const [click, setClick] = React.useState(false);
    const handOnClick = () => {
        setClick(!click);
    };
    return (
        <>
            <nav className="bg-slate-200 p-1/2" >
                <div className="container mx-auto justify-between grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3">
                    <div className="grid lg:hidden col-span-1 items-center justify-start pl-5 ">
                        <FaAlignJustify className="w-7 h-7 text-black " onClick={handOnClick} />
                    </div>
                    <div className="flex items-center justify-start col-span-2 ">
                        <Link to='/'>
                            <img src="public/logo-dark.png" alt="" />
                        </Link>
                    </div>

                    <ul className={`items-center col-span-3 lg:col-span-3 xl:col-span-1 lg:grid grid-cols-4 ${click ? 'flex-col' : 'hidden'}  `}>
                        {navigationMenu.map((item) => (
                            <li key={item.id} className="grid grid-cols-2 lg:flex text-black font-medium text-xl relative py-3 lg:py-8 lg:col-span-1 lg:justify-center lg:border-none border-slate-100 border-solid rounded m-1 ">
                                <Link to={item.url} className="col-span-1 px-4 lg:px-0.5">
                                    {item.name}
                                </Link>
                                {item.child && item.child.length > 0 ? (
                                    <span className="lg:flex grid items-center lg:pl-0.5 text-lg col-span-1 justify-end " onClick={() => handeOnClickID(item.id)}
                                        style={clickID === item.id ? { transform: "scaleY(-1)", transition: "0.5s" } : { transition: "0.5s" }}>
                                        {item.icon}
                                    </span>
                                ) : null}
                                {item.child && item.child.length > 0 ? (

                                    <div className={` hidden text-black lg:z-20 bg-slate-200 lg:w-44 py-2 font-medium  lg:top-full lg:absolute container mx-auto col-span-2 mt-4 lg:mt-1`}
                                        style={{ display: clickID === item.id ? 'block' : 'none', transition: '0.5s' }}
                                    >
                                        {item.child.map((child) => (
                                            <Link to={child.url} key={child.id} className="flex flex-col px-6 my-3 text-base">
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                    <div>
                    </div>
                </div>
            </nav>
            <div className="h-0.5 bg-orange-500"></div>
        </>
    )
}