import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from 'react-icons/ri';
import Socials from "./Socials";
import Image from "next/image";

const Hero = () => {
    return (
        <div className='py-8 xl:py-15  xl:pt-10 container max-w-[1100px]'>
            <div className='mx-auto flex flex-col'>
                <div className="bg-blue-700 absolute left-[-65rem] dark:left-[-70rem]  top-[21.65rem]-z-10 h-[31.25rem] w-[68.25rem] rounded-full blur-[10rem] dark:bg-[#07D2FB]"></div>
                <div className='flex flex-wrap justify-center'>
                    <div className="flex flex-col max-w-[600px]  mx-auto xl:mx-0  md:mx-0 text-center xl:text-left md:text-left px-1 pb-4">
                        {/* Text */}
                        <div className="text-sm uppercase font-semibold mb-4 text-blue-700 tracking-[4px]">Mobile Developer / Web Developer</div>
                        <div>
                            <p className="text-[36px] font-bold">Hello, My name is <br /></p><p className=" h1 bg-gradient-to-r from-primary to-[#07D2FB] bg-clip-text text-transparent align-middle justify-center flex-auto">Pramod Madhubhashana</p>
                        </div>
                        <p className="subtitle max-w-[490px]  ">
                        A Software Engineering undergraduate at the National Institute of Business Management, focuses on Android and web development, aiming to create impactful software solutions through continuous learning and innovation.
                        </p>
                        <div className="flex justify-center flex-col md:flex-row gap-x-3 gap-y-3 mx-auto pt-10 xl:mx-0 mb-12">
                            <Link href='/contact'>
                                <Button className='bg-gradient-to-r from-blue-500 to-[#07D2FB] text-white gap-x-2'>Contact Me <Send size={18} /></Button>
                            </Link>
                            <Button className=" bg-gradient-to-r from-blue-500 to-[#07D2FB] text-white gap-x-2">Download CV <Download size={18} /></Button>
                        </div>
                        <div className="flex justify-center">
                            <Socials containerStyles='flex gap-x-6 mx-auto relative pb-1' iconsStyle='text-foreground text-[30px] hover:text-primary transition-all' />
                        </div>
                    </div>
                    <div>
                        <div className="justify-end  flex pt-5">
                            <div className="font-bold text-2xl text-blue-600 dark:text-[#07D2FB] blur-[0.05rem] absolute justify-start">+</div>
                            <div className="m-0">
                                {/* <Image src='/assets/hero/developer.png' width={400} height={400} className="bg-gradient-to-r from-blue-500 to-[#07D2FB] custom-rounded  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[26rem] flex align-bottom" /> */}
                                <Image src='/assets/hero/Untitled.png' width={420} height={420}/>
                            </div>
                        </div>
                        <div className="bg-blue-600 dark:bg-[#07D2FB] w-[1rem] h-[1rem] rounded-full blur-[0.1rem] align-middle justify-center">
                            <div className=" bg-blue-600 dark:bg-[#07D2FB] w-[6rem] h-[6rem] rounded-full blur-[4rem] "></div>
                        </div>
                    </div>

                </div>
                <div className='flex  bottom-10 justify-center animate-bounce pt-20'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </div>
    );
};

export default Hero