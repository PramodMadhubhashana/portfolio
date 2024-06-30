import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({onClickCloseSheet}) => {
  return (
    <div>
      <Link href='/' onClick={onClickCloseSheet}>
        <Image src='/assets/logo/LogoBlackpng.png' className='dark:invert' width={60} height={60} />
      </Link>
    </div>
  )
}

export default Logo