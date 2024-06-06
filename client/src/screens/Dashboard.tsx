import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-[10px]'>
      <div className="text-2xl">Hello this is dashboard!</div>
      <Button 
        className="hover:border-black hover:border-[1px] hover:text-black rounded-[10px] bg-black text-white w-[200px]" 
        onClick={() => navigate('/signup')}>
        Sign Up
      </Button>

        <Button onClick={() => {
          window.location.href = 'http://localhost:3000/auth/google';
        }}>Go to youtube</Button>
    </div>
  )
}

export default Dashboard;