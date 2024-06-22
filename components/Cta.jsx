import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

const Cta = () => {
    return (
        <div className='shadow-2xl w-full items-center justify-center flex flex-col h-[250px] dark:bg-[#041120]'>
            <div className='container flex flex-col justify-center items-center'>
                <div>
                    <p className="text-[30px] font-bold max-w-xl text-center section-title bg-gradient-to-r from-blue-600 to-[#07D2FB] bg-clip-text text-transparent align-middle ">
                        Prepared to turn your into reality? I'm here to help.
                    </p>
                </div>
                <div className='pt-10'>
                    <Link href='/contact'>
                        <Button className='bg-gradient-to-r from-blue-500 to-[#07D2FB] text-white gap-x-2'>Contact Me <Send size={18} /></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cta