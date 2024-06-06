import RockClimbing from '@/assets/RockClimbing.jpg';
import Navbar from '@/component/Navbar';
import Blochaus from '@/assets/Blochaus.jpeg';
const Dashboard = () => {

  return (
    <div className='w-full h-full flex flex-col items-center overflow-x-hidden'>
      <Navbar />

      {/* main */}
      <section className="w-full h-screen bg-black relative">
        <div className="absolute inset-0 bg-cover bg-center mt-[80px] z-0"
          style={{
            backgroundImage: `url(${RockClimbing})`,
            opacity: 0.8
          }}
        />

        <div className="h-full mx-[100px] flex flex-col justify-center">
          <section className="max-w-[1200px] mx-auto flex text-white text-[50px] opacity-90">
            Keep pushing past your limits
          </section>
        </div>
        
      </section>

      <section className="w-full h-screen bg-black">
        My name is
      </section>

      <section className="w-full h-screen bg-black">
        <div className="w-full h-full bg-cover bg-center  z-0"
          style={{
            backgroundImage: `url(${Blochaus})`,
            opacity: 0.8
          }}
        />
      </section>
    </div>
  )
}

export default Dashboard;