'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchMegaProjects from "@/Mega/Mega";

export async function getStaticProps() {
    try {
        const projects = await fetchMegaProjects(); // Make sure fetchMegaProjects returns a valid array
        return {
            props: {
                projects: projects || [], // Ensure projects is not undefined
            },
            revalidate: 1,
        };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return {
            props: {
                projects: [], // Return empty array or handle error case
            },
            revalidate: 1,
        };
    }
}

const Works = ({projects}) => {
    if (!projects || projects.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>No projects found.</p>
            </div>
        );
    }
    return (
        <div className="flex flex-col container max-w-[1100px] relative pt-10">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <div className="xl:mx-0 text-center xl:text-left flex flex-col justify-center">
                        <div className="container flex justify-center ">
                            <p className="section-title bg-gradient-to-r from-blue-600 to-[#07D2FB] bg-clip-text text-transparent align-middle ">
                                Latest Project
                            </p>
                        </div>
                        <div className="pt-5 text-center">
                            <p>Explore my latest project, where I applied my skills in mobile and web development to create impactful software solutions.</p>
                        </div>
                        <div className="py-10 justify-center flex">
                            <Link href='/project'>
                                <Button className='bg-gradient-to-r from-blue-500 to-[#07D2FB] text-white gap-x-2'>All Project</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xl:max-w-[1100px] right-0 top-0">
                    <Swiper className="h-auto " slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default Works