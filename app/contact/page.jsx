'use client';
import Socials from "@/components/Socials";
import {
  User2,
  MailIcon,
  PhoneCall,
  User,
  ArrowRightIcon,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import { } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  }
];

const contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d0164e20-a989-4b9f-893c-a68a6cdb6313");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      event.target.reset();
    }
    else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="container max-w-[1100px] justify-center items-center flex flex-col h-auto ">
      <div className="flex flex-col justify-between items-center lg:flex-row w-full">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-blue-500 text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-blue-500"></span>
            <div>Say Hello 👋</div>
          </div>
          <div className="pt-15 ">
            <div className="pt-10">
              <h1 className="text-5xl font-bold max-w-md mb-8">Let's Work Together</h1>
            </div>
            <div>
              <p className="text-[20px] text-muted-foreground max-w-[480px]">
                Connect with me via WhatsApp, LinkedIn, Facebook, Instagram, Twitter, and GitHub for inquiries and collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Image src='/assets/contact/ContactUs.png' width={500} height={500} alt="" priority />
        </div>
      </div>
      <div className="w-full flex justify-center flex-col lg:flex-row lg:justify-between pt-20 sm:pt-5">
        <div className="justify-center flex flex-col items-center">
          <div className="text-[16px]">
            {infoData.map((item, index) => {
              return (
                <div className="flex items-center gap-x-4 mx-auto pb-5 text-[14px] sm:text-[16px]" key={index}>
                  <div className="text-blue-600">{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              );
            })}
          </div>
          <div className="flex pt-5">
            <Socials containerStyles='flex flex-row gap-x-5' iconsStyle='text-foreground text-[25px] sm:text-[30px] hover:text-primary transition-all' />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full">
          <div className="pt-5 lg:pt-0 w-[500px]">
            <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
              <div className="relative flex items-center">
                <Input type='text' name="name" placeholder='Name' required />
                <User className="absolute right-6" size={20} />
              </div>
              <div className="relative flex items-center">
                <Input type="email" name="email" placeholder='Email' required />
                <MailIcon className="absolute right-6" size={20} />
              </div>
              <div className="relative flex items-center">
                <Textarea name="message" placeholder='Type Your Message Here.' className='h-[180px]' required />
                <MessageSquare className="absolute right-6 top-4" size={20} />
              </div>
              <div className="flex justify-center">
                <Button type="submit" className='text-[16px] bg-gradient-to-r from-blue-500 to-[#07D2FB] text-white gap-x-2 max-w-[250px] w-[250px]'>Let's Talk <ArrowRightIcon size={18} /></Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
