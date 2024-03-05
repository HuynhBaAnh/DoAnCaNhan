import { FaAngleDown } from "react-icons/fa";

export const navigationMenu = [
    { id: 1, name: 'HOME', icon: null, url: '/' },
    { id: 2, name: 'ABOUT', url: '/about' },
    {
        id: 3, name: 'SERVICES', url: '/services', icon: <FaAngleDown />, child: [
            { id: 4, name: 'FOOD', url: '/food&drink' },
            { id: 5, name: 'SPA & FITNESS', url: '/spa&fitness' },
        ]
    },
    { id: 6, name: 'CONTACT', url: '/contact' },

];