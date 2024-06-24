'use client';
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { reviewData } from "@/ReviewData/Reviews";

const Reviews = () => {
  return (
    <div className="flex flex-col pt-10 sm:pt-16 mb-12 xl:mb-24">
      <div className="container mx-auto">
        <div className="container flex justify-center ">
          <p className="text-2xl sm:text-4xl font-bold relative bg-gradient-to-r from-blue-600 to-[#07D2FB] bg-clip-text text-transparent align-middle ">
            Reviews
          </p>
        </div>
        <div className="pt-10">
          <Swiper slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true
            }}
            className="h-auto"
          >
            {reviewData.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card className='p-8 min-h-[300px]'>
                    <CardHeader className='p-0 mb-10'>
                      <div className="flex items-center gap-x-4">
                        <Image src={person.avater}
                          width={30}
                          height={30}
                          alt=""
                          priority
                        />
                        <div className="flex flex-col overflow-hidden">
                          <CardTitle className='text-xl overflow-hidden ' >{person.name}</CardTitle>
                          <p>{person.email}</p>

                        </div>
                      </div>
                    </CardHeader>
                    <CardDescription className='text-lg text-muted-foreground'>
                      {person.review}
                    </CardDescription>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Reviews