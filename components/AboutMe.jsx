"use client";
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import Badge from "./Badge";
import Image from "next/image";
import {
    User2,
    MailIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
    School,
} from "lucide-react";
import Socials from "./Socials";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Pramod Madhubhashana",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+94 767128037",
    },
    {
        icon: <MailIcon size={20} />,
        text: "wppMadhubhashana@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 29 June 2001",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "National Insitute Of Bussines Management ( NIBM )",
    },
    {
        icon: <School size={20} />,
        text: "H/ Ruhunu Vijayba National College",
    },
];

const qualificationData = [
    {
        title: "Education",
        data: [
            // {
            //     university: 'National Insitute Of Bussines Management ( NIBM )',
            //     qualification: 'Digree ',
            //     years: '2025-2026',
            // },
            {
                university: "National Insitute Of Bussines Management ( NIBM )",
                qualification: "Higher National Diploma Software Engineering",
                years: "2023-2024",
            },
            {
                university: "National Insitute Of Bussines Management ( NIBM )",
                qualification: "Diploma in Software Engineering",
                years: "2022-2023",
            },
        ],
    },
    {
        title: 'Experience',
        data: [
            {
                Company: 'ABC Comapny',
                role: 'Software Engineer',
                years: '20254-2025',
            },
            {
                Company: 'ABC Comapny',
                role: 'Mobile App Developer',
                years: '2025-2027',
            },
        ],
    },
];

const skillData = [
    {
        title: "Mobile App Development",
        Data: [
            {
                imagePath: "/assets/icons/icons8-flutter-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-dart-48.png",
            },
            {
                imagePath: "/assets/icons/kotlin.png",
            },
            {
                imagePath: "/assets/icons/icons8-react-native-64.png",
            },
            {
                imagePath: "/assets/icons/icons8-java-96.png",
            },
        ],
    },
    {
        title: "Web Development",
        Data: [
            {
                imagePath: "/assets/icons/icons8-html-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-bootstrap-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-css-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-tailwind-css-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-php-48.png",
            }
        ],
    },
    {
        title: "Tools",
        Data: [
            {
                imagePath: "/assets/icons/vscode.png",
            },
            {
                imagePath: "/assets/icons/icons8-figma-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-git-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-android-studio-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-mongo-db-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-firebase-48.png",
            },
            {
                imagePath: "/assets/icons/icons8-photoshop-48.png",
            },
        ],
    },
];

const AboutMe = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    return (
        <div className="shadow-2xl dark:bg-[#041120] py-4 container max-w-[1100px]">            
            <div className="flex flex-col">
                <div className="container flex justify-center pb-10">
                    <p className="text-2xl sm:text-4xl font-bold relative flex items-start gradient-text align-middle justify-center ">
                        About me
                    </p>
                </div>
                <div className="flex flex-wrap gap-5 justify-center lg:justify-between">
                    <div>
                        <Badge
                            icon={<RiBriefcase4Fill />}
                            endCountNumber={1}
                            badgeText="Years of experience"
                            containerStyle="relative"
                        />
                    </div>
                    <div>
                        <Badge
                            icon={<RiTodoFill />}
                            endCountNumber={1}
                            endCountText="k"
                            badgeText="Finished Project"
                            containerStyle="relative"
                        />
                    </div>
                    <div>
                        <Badge
                            icon={<RiTeamFill />}
                            endCountNumber={5}
                            endCountText="k"
                            badgeText="Happy Clients"
                            containerStyle="relative"
                        />
                    </div>
                </div>
                <div className="flex pt-20 justify-center">
                    <div className=" flex justify-center flex-col lg:flex-row w-full lg:justify-start">
                        <div className="flex justify-center">
                            <div className="w-[20rem] md:w-[24rem] md:min-w-[24rem] flex justify-center">
                                <Image
                                    src="/assets/about/about.png"
                                    width={350}
                                    height={400}
                                    className="bg-gradient-to-r from-blue-500 to-[#07D2FB] custom-rounded2 w-auto h-auto sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] flex"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col pl-10 w-full items-center">
                            <div className="flex justify-center pt-10 lg:pt-0 flex-col">
                                <div className="w-[12rem] sm:w-[16rem] h-[2.5rem] bg-gradient-to-r from-blue-500 to-[#07D2FB] rounded-2xl flex justify-center items-center border-[3px]">
                                    <p className="uppercase text-sm sm:text-[16px] font-bold text-white">Personal Information</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col text-center pt-5">
                                    <p className="break-words overflow-x-auto text-xl font-bold">
                                        Unmatched Service Quality for Over 1 Years
                                    </p>
                                    <p className="subtitle pt-2">                                        
                                    Proficient in Android and web development, with a focus on creating impactful software solutions. Continuously enhancing skills and exploring latest technologies
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="pt-5 text-[16px]">
                                    {infoData.map((item, index) => {
                                        return (
                                            <div className="flex items-center gap-x-4 mx-auto text-[14px] sm:text-[16px] " key={index}>
                                                <div className="text-blue-600">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex justify-center flex-col">
                                <div className="flex justify-center pt-10">
                                    <Socials containerStyles='flex flex-row gap-x-4' iconsStyle='text-foreground text-[25px] sm:text-[30px] hover:text-primary transition-all' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full pt-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col pt-5">
                            <div className="flex justify-center">
                                <div className="w-[12rem] sm:w-[16rem] h-[2.5rem] bg-gradient-to-r from-blue-500 to-[#07D2FB] rounded-2xl flex justify-center items-center border-[3px]">
                                    <p className="uppercase text-sm sm:text-[16px] font-bold text-white">Qualification</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-5">
                            <div className="flex justify-center">
                                <p className="font-bold text-center text-[16px] sm:text-xl">My Awesome Journey</p>
                            </div>
                        </div>
                        <div className="pt-14 w-full">
                            <div className="flex flex-col lg:flex-row w-full">
                                <div className="w-full">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="flex  flex-col lg:flex-row lg:gap-x-24">
                                            <div>
                                                <div className="flex flex-row gap-x-1 text-primary">
                                                    <div><Briefcase /></div>
                                                    <div> <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'Education').title}
                                                    </h4></div>
                                                </div>
                                                <div className="pt-5">
                                                    <div>
                                                        {getData(qualificationData, 'Education').data.map((item, index) => {
                                                            const { university, qualification, years } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group " key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-blue-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-base sm:text-lg lg:text-xl leading-none my-2">{qualification}</div>
                                                                        <div className="text-sm  lg:text-lg leading-none  text-muted-foreground mb-2">{university}</div>
                                                                        <div className="text-sm lg:text-lg font-medium mb-4">{years}</div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ">
                                                <div>
                                                    <div className="flex flex-row gap-x-1 text-primary">
                                                        <div><Briefcase /></div>
                                                        <div> <h4 className="capitalize font-medium">
                                                            {getData(qualificationData, 'Experience').title}
                                                        </h4></div>
                                                    </div>
                                                </div>
                                                <div className="pt-5">
                                                    {getData(qualificationData, 'Experience').data.map((item, index) => {
                                                        const { Company, role, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group " key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-blue-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    {/* <div className="font-semibold text-base sm:text-lg leading-none my-2">{Company}</div>
                                                                    <div className="text-sm  lg:text-lg leading-none  text-muted-foreground mb-2">{role}</div>
                                                                    <div className="text-sm lg:text-lg font-medium mb-4">{years}</div> */}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-700 absolute left-[-65rem] dark:left-[-70rem] top-[21.65rem]-z-10 h-[30.25rem] w-[68.25rem] rounded-full blur-[10rem] dark:bg-[#07D2FB]"></div>
                <div className="flex flex-col justify-center w-full pt-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col pt-5">
                            <div className="flex justify-center">
                                <div className="w-[12rem] sm:w-[16rem] h-[2.5rem] bg-gradient-to-r from-blue-500 to-[#07D2FB] rounded-2xl flex justify-center items-center border-[3px]">
                                    <p className="uppercase text-sm sm:text-[16px] font-bold text-white">Skills</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-5">
                            <div className="flex justify-center">
                                <p className="font-bold text-center text-[16px] sm:text-xl">Tools I Use Every day</p>
                            </div>
                        </div>
                        <div className="pt-5  w-full">
                            <div className="flex flex-col lg:flex-row w-full">
                                <div className="w-full">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="flex  flex-col lg:flex-row lg:gap-x-40">
                                            <div>
                                                <div className="flex flex-row gap-x-1 text-primary">
                                                    <div className="border-b border-border pt-5 mb-4 flex justify-center">
                                                        <p className="text-[16px] sm:text-xl font-semibold mb-2">Skills</p>
                                                    </div>
                                                </div>
                                                <div className="pt-5">
                                                    <div className="text-[16px] sm:text-xl">
                                                        {getData(skillData, 'Mobile App Development').title}
                                                    </div>
                                                    <div className="flex flex-row py-5 gap-x-3">
                                                        {getData(skillData, 'Mobile App Development').Data.map((item, index) => {
                                                            const { imagePath } = item;
                                                            return (
                                                                <div key={index}>
                                                                    <Image src={imagePath} width={48} height={48} alt="" priority />
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <div className="text-[16px] sm:text-xl">
                                                        {getData(skillData, 'Web Development').title}
                                                    </div>
                                                    <div className="flex flex-row py-5 gap-x-3">
                                                        {getData(skillData, 'Web Development').Data.map((item, index) => {
                                                            const { imagePath } = item;
                                                            return (
                                                                <div key={index}>
                                                                    <Image src={imagePath} width={48} height={48} alt="" priority />
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ">
                                                <div>
                                                    <div className="flex flex-row gap-x-1 text-primary">
                                                        <div className="border-b border-border pt-5 mb-4 flex justify-center">
                                                            <p className="text-[16px] sm:text-xl font-semibold mb-2">Tools</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pt-5 flex flex-row gap-x-3">
                                                    {getData(skillData, 'Tools').Data.map((item, index) => {
                                                        const { imagePath } = item;
                                                        return (
                                                            <div key={index}>
                                                                <Image src={imagePath} width={48} height={48} alt="" priority />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>


    );
};

export default AboutMe;


