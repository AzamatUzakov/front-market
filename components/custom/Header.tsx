"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { FiMenu } from "react-icons/fi";
interface Props {

}

const Header: React.FC<Props> = () => {
    return (
        <>
            <header className="flex justify-between items-center px-2 py-2">
                <img className="w-[50px]" src="/dog.svg" alt="cat_logo" />

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
            </header>
        </>
    );
}

export default Header;