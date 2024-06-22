'use client';
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const reviewData = [
  {
    avater: '/assets/reviews/pngegg.png',
    name: 'Pramod Madhubhashana',
    email: 'abc@gmail.com',
    review: 'Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana'
  },
  {
    avater: '/assets/reviews/pngegg.png',
    name: 'Pramod Madhubhashana',
    email: 'abc@gmail.com',
    review: 'Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana'
  },
  {
    avater: '/assets/reviews/pngegg.png',
    name: 'Pramod Madhubhashana',
    email: 'abc@gmail.com',
    review: 'Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana'
  },
  {
    avater: '/assets/reviews/pngegg.png',
    name: 'Pramod Madhubhashana',
    email: 'abc@gmail.com',
    review: 'Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana Pramod Madhubhashana'
  }
];
const Reviews = () => {
  return (
    <div className="flex flex-col pt-16 mb-12 xl:mb-24">
      <div className="container mx-auto">
        <div className="container flex justify-center ">
          <p className="section-title bg-gradient-to-r from-blue-600 to-[#07D2FB] bg-clip-text text-transparent align-middle ">
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
                          width={70}
                          height={70}
                          alt=""
                          priority
                        />
                        <div className="flex flex-col">
                          <CardTitle >{person.name}</CardTitle>
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