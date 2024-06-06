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

  const mobileScreen = useMediaQuery('(max-width: 950px)');

  return (
    <div className="bg-black w-screen h-[80px] justify-center flex z-50 ovcerflow-x-hidden">
      <div className="flex text-white max-w-[1200px] w-[100%] justify-between items-center mx-[100px]">
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
                <Button onClick={() => navigate('/signup')} className="border-[1px] rounded-[10px] hover:text-black hover:bg-white">Sign In</Button>
              </section>
            </section>
          </>
        }
        
       
      </div>
    </div>
  )
}

export default Navbar;