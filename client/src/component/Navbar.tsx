import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black w-screen h-[80px] justify-center flex z-50 ovcerflow-x-hidden">
      <div className="flex text-white max-w-[1200px] w-[100%] justify-between items-center">
        <Button className="text-2xl">BoulderBoost</Button>
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
       
      </div>
    </div>
  )
}

export default Navbar;