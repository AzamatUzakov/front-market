"use client"

import { BsCart2 } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";


interface Props {

}
const navItems = [
    {
        label: "Home",
        href: "/",
        icon: GoHome

    },
    {
        label: "Search",
        href: "/shop",
        icon: CiSearch,

    },
    {
        label: "Cart",
        href: "/basket",
        icon: BsCart2,

    },
    {
        label: "Profile",
        href: "/profile",
        icon: PiUserLight,

    },
];

const Navigation: React.FC<Props> = () => {
    const pathName = usePathname()



    return (
        
        <>
            <nav>
                <div className="flex w-full justify-between gap-1 items-center  bg-white px-2 py-2">
                    {navItems.map((item, index) => {
                        const isAct = pathName === item.href;

                        return (
                            <Link key={index} href={item.href} className="w-full">
                                <div className={`flex flex-col items-center animate w-full text-3 font-medium  ${isAct ? "text-black bg-gray-300" : "text-[#61828A]"}  pt-1 pb-1 rounded-xl`}>

                                    <item.icon className={`mb-1 ${isAct ? "text-black" : "text-[#61828A]"}`} color="" size={30} />{item.label}</div>

                            </Link>)
                    })}
                </div>

            </nav>

        </>

    );
}

export default Navigation;