"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

import { Button } from "@/components/ui/button"
import Search from "./Search";
import SwitchTheme from "./SwitchTheme";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";



const Header: React.FC = () => {
    return (
        <>
            <header className="flex justify-between items-center gap-3 px-2 py-2 lg:px-4">
                <img className="w-[50px] md:w-[65px]" src="/dog.svg" alt="cat_logo" />

                <div className="lg:hidden">
                    <Sheet>
                    <SheetTrigger>
                        <FiMenu className="cursor-pointer" size={30} />
                    </SheetTrigger>
                    <SheetContent className="w-[70%]">
                        <SheetHeader className="relative flex flex-col gap-5">
                            <SheetTitle>Settings</SheetTitle>
                            <SheetDescription>Theme</SheetDescription>
                            <SheetDescription>Language</SheetDescription>
                            <SheetDescription>Contact US</SheetDescription>
                            <SheetDescription className="text-red-500 fixed bottom-10">

                                <Link href="/login">
                                    <Button className="hover:cursor-pointer">Login</Button>
                                </Link>

                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                </div>

                <div className="hidden lg:block w-[60%]">
                    <Search />
                </div>
                
                <div className="hidden lg:flex mt-2.5 items-center gap-3">

                    <div className="w-[45px] h-[45px] rounded-[8px] bg-[#F5F2F0] flex justify-center items-center  cursor-pointer">
                        <BsCart2 />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="w-[45px] h-[45px] rounded-[8px] bg-[#F5F2F0] flex justify-center items-center  cursor-pointer">
                                <img src="/earth.png" alt="earth" className="cursor-pointer" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="flex gap-3 items-center justify-center cursor-pointer">Ru <img className="w-5" src="/ru-flag.png" alt="" /></DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-3 items-center justify-center cursor-pointer">EN <img className="w-5" src="/en-flag.png" alt="" /></DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-3 items-center justify-center cursor-pointer">UZ <img className="w-5" src="/uz-flag.png" alt="" /></DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                    <SwitchTheme />

                    <DropdownMenu>
                        <DropdownMenuTrigger>    <Avatar className="w-[45px] h-[45px] rounded-[8px]  flex justify-center items-center  cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" className="rounded-4xl" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="flex gap-3 items-center justify-center cursor-pointer">Ru <img className="w-5" src="/ru-flag.png" alt="" /></DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-3 items-center justify-center cursor-pointer">EN <img className="w-5" src="/en-flag.png" alt="" /></DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-3 items-center justify-center cursor-pointer">UZ <img className="w-5" src="/uz-flag.png" alt="" /></DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </header >
        </>
    );
}

export default Header;