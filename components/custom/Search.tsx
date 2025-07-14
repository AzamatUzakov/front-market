    import { Input } from "@/components/ui/input";
    import { CiSearch } from "react-icons/ci";
    import { IoSearchOutline } from "react-icons/io5";


    const Search: React.FC = () => {
        return (
            <div className="relative w-full mx-auto mt-2">
                <div className="relative">
                    <IoSearchOutline size={28} className="absolute left-3 top-1/5 transform-translate-y-1/2 text-[#61828A]" />

                    <Input className="w-full bg-[#F0F5F5] h-[45px] pl-12 rounded-[12px]" placeholder="Search" />
                </div>
            </div>
        );
    };

    export default Search;
