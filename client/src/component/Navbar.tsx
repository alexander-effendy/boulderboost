import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import MenuIcon from '@mui/icons-material/Menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const navigate = useNavigate();

  const mobileScreen = useMediaQuery('(max-width: 1020px)');

  return (
    <div className="fixed top-0 bg-black opacity-80 w-full h-[80px] justify-center flex z-50 overflow-x-hidden">
      <div className={`flex text-white opacity-100 max-w-[1200px] w-[100%] justify-between items-center ${mobileScreen ? 'mx-[20px]' : 'mx-[100px]'}`}>
        <Button className="text-2xl">BoulderBoost</Button>
        {mobileScreen ?
            <Sheet>
            <SheetTrigger asChild>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col pt-[100px] text-white">
              <Button>Training</Button>
              <Button>Techniques</Button>
              <Button>Boards</Button>
              <Button>Sydney Gyms</Button>
              <Button>About Me</Button>
              <Button>Sign In</Button>
            </SheetContent>
          </Sheet>
          :
          <>
            <section className="flex items-center gap-5">
              <Button>Training</Button>
              <Button>Techniques</Button>
              <Button>Boards</Button>
              <Button>Sydney Gyms</Button>
              <Button>About Me</Button>
              <div className="h-[25px] border-r-[1px] border-white mx-5"></div>

              <section className="flex gap-5">
                <Button onClick={() => navigate('/signup')} className="h-[35px] border-[1px] text-black bg-white hover:text-white hover:bg-black">Sign In</Button>
              </section>
              <section className="flex gap-5">
                <Button onClick={() => navigate('/signup')} className="h-[35px] border-[1px] text-white bg-black hover:border-blue-500">FAQs</Button>
              </section>
            </section>
          </>
        }
        
       
      </div>
    </div>
  )
}

export default Navbar;