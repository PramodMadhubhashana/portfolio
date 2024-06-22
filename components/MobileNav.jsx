import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"></AlignJustify>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="w-full gap-y-4">
            <div>
              <Logo />
            </div>
            <div className="flex flex-col pt-10 justify-start items-start">
              <Nav containerStyles='flex flex-col gap-y-5 justify-start items-start' linkStyles='text-xl' />
            </div>
          </div>
          <div>
            <Socials containerStyles='flex flex-row gap-x-5 text-xl' />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav