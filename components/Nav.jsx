import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export const pageLink = [
    { path: '/', name: 'home', icons: '/assets/icons/icons8-home-50.png' },
    { path: '/projects', name: 'my projects', icons: '/assets/icons/icons8-project-50.png' },
    { path: '/contact', name: 'contact', icons: '/assets/icons/icons8-contact-50.png' }
];



const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return <nav className={`${containerStyles}`}>
        {pageLink.map((link, index) => {
            return (

                <Link href={link.path}
                    key={index}
                    className={`capitalize ${linkStyles}`}
                >
                    {link.path === path && (
                        <motion.span
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId="underline"
                            className={`${underlineStyles}`}
                        />
                    )}
                    <div className="flex flex-row gap-x-2 font-bold">
                        <Image src={link.icons} width={20} height={20}  className="dark:invert"/>                        
                        {link.name}
                    </div>
                </Link>                
            )
        })}
    </nav>
}

export default Nav;