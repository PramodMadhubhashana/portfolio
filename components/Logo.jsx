import { Great_Vibes } from 'next/font/google';
import Link from 'next/link';

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-greatvibes',
});



const Logo = () => {
  return (
    <Link href='/'>
        <p className={greatVibes.className}>PRAMOD</p>
    </Link>
  )
}

export default Logo