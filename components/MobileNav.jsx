import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const sheetClose = () =>{
    SetIsOpen(false);
  }
  return (
    <Sheet open={isOpen} onOpenChange={SetIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" onClick={()=>SetIsOpen(true)}></AlignJustify>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="w-full gap-y-4">
            <div>
              <Logo onClickCloseSheet={sheetClose}/>
            </div>
            <div className="flex flex-col pt-10 justify-start items-start">
              <Nav containerStyles='flex flex-col gap-y-5 justify-start items-start' linkStyles='text-xl' onclicklinks={sheetClose} />
            </div>
          </div>
          <div>
            <Socials containerStyles='flex flex-row gap-x-5 text-xl' onClickSocialial={sheetClose}/>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav