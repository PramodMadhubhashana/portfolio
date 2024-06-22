import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="shadow-blue-700 dark:shadow-none shadow-2xl py-12 dark:bg-[#041120]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-center pt-10">
            <Socials containerStyles='flex flex-row gap-x-5' iconsStyle='text-foreground text-[30px] hover:text-primary transition-all' />
          </div>
          <div className="text-muted-foreground text-center pt-5">
            Copyright &copy; 2024 Pramod Madhubhashana. All rights reserved.
          </div>
        </div>
      </div>

    </footer>

  )
}

export default Footer;
