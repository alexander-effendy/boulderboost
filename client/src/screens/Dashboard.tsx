import RockClimbing from '@/assets/RockClimbing.jpg';
import Navbar from '@/component/Navbar';

const Dashboard = () => {

  return (
    <div className='w-full h-full flex flex-col items-center overflow-x-hidden'>
      <Navbar />

      {/* main */}
      <section className="w-full h-screen bg-black mt-[-80px] relative">
        <div className="absolute inset-0 bg-cover bg-center mt-[80px]"
          style={{
            backgroundImage: `url(${RockClimbing})`,
            // opacity: 0.7
          }}
        />
        
      </section>

      <section className="w-screen h-screen">
            s
      </section>
    </div>
  )
}

export default Dashboard;