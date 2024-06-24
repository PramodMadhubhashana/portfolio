import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-greatvibes',
});



const Logo = () => {
  return (
    <Link href='/'>      
        <Image src='/assets/logo/Screenshot 2024-06-23 232932.png' width={60} height={60}/>
    </Link>
  )
}

export default Logo