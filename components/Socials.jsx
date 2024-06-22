'use client';
import Link from "next/link";
import {  RiLinkedinFill,RiGithubFill,RiFacebookFill, RiInstagramFill, RiWhatsappFill, RiTwitterXFill} from "react-icons/ri";


const icons =[
  {
    path: 'www.linkedin.com/in/pramod-madhubhashana',
    name : <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/PramodMadhubhashana',
    name : <RiGithubFill/>
  },
  {
    path: 'https://www.instagram.com/pramod_madhubhashana?igsh=ZGUzMzM3NWJiOQ==',
    name : <RiInstagramFill/>
  },
  {
    path: 'https://www.facebook.com/profile.php?id=100070207129104&mibextid=ZbWKwL',
    name : <RiFacebookFill/>
  },
  {
    path: 'https://x.com/P_madhubhashana?s=09',
    name : <RiTwitterXFill/>
  },
  {
    path: 'https://wa.me/+94767128037?',
    name : <RiWhatsappFill/>
  }
];

const Socials = ({containerStyles, iconsStyle}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>{
        return(
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyle}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials