import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

const Cta = () => {
    return (
        <div className='shadow-2xl w-full items-center justify-center flex flex-col pb-2 h-auto sm:h-[250px] dark:bg-[#041120]'>
            <div className='container flex flex-col justify-center items-center'>
                <div>
                    <p className="text-2xl sm:text-4xl font-bold relative max-w-xl text-center gradient-text align-middle ">
                        Prepared to turn your into reality? I'm here to help.
                    </p>
                </div>
                <div className='pt-10'>
                    <Link href='/contact' passHref>
                        <Button className='text-sm sm:text-[16px] bg-gradient-to-r from-blue-500 to-[#07D2FB] text-white gap-x-2'>Contact Me <Send size={18} /></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cta