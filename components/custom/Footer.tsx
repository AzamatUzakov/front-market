
import { FiTwitter } from "react-icons/fi";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="mb-[100px] lg:mb-[40px] mt-20 pt-2 pl-2 pr-2 pb-3 lg:px-4">
            <div className="w-full flex justify-center gap-7  h-7 md:justify-around">
                <p className="text-[14px] md:text-[18px] text-[#61828A] md:w-[50%] md:text-center">
                    Contact Us
                </p>
                <p className="text-[14px] md:text-[18px]  text-[#61828A] md:w-[50%] md:text-center">
                    Privacy Policy
                </p>
                <p className="text-[14px] md:text-[18px]  text-[#61828A] md:w-[50%] md:text-center">
                    Terms of Service
                </p>
            </div>
            <div className="flex justify-center items-center gap-5 md:gap-15 mt-6 mb-6 xl:mt-8 xl:mb-8">
                <div>
                    <FiTwitter className="text-[25px]  w-8 text-[#61828A]" />
                </div>

                <div>
                    <LiaFacebook className="text-[35px]  w-8 text-[#61828A]" />
                </div>

                <div>
                    <FaInstagram className="text-[25px] w-8 text-[#61828A]" />
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-[14px] md:text-[16px] text-[#61828A]">
                    @2025 Clothes Store. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
