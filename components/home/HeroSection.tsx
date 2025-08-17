import { Calendar, Users, Bed, ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className='relative h-dvh flex flex-col'>
      {/* TODO */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-b from-black from-0% to-[60px] to-white'
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
      >
        <div className='absolute inset-0 bg-black/45'></div>
      </div>

      <div className='relative z-10 flex-1 flex items-center justify-center w-full h-full'>
        <div className='text-center text-white max-w-4xl mx-auto px-4'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            Book With Best
            <br />
            <span className='text-yellow-400'>Luxury Hotel</span>
          </h1>
          <p className='text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet mauris nunc. Duis egestas ac ante sed tristique.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='h-12 py-2 bg-yellow-500  text-black font-semibold px-8 rounded-md cursor-pointer flex items-center justify-center gap-4'>
              Explore More <ArrowUpRight />
            </button>
            <button className='h-12 py-2 border-2 border-white text-black px-8 bg-white rounded-md cursor-pointer flex items-center justify-center gap-4'>
              Our Services <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      <div className='relative z-10 bg-emerald-600 py-6 lg:max-w-[90%] ms-auto rounded-s-md'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-6 gap-4 items-end'>
            <div className='space-y-2'>
              <label className='text-white text-sm font-medium'>Check In</label>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Select Date'
                  className='w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500'
                />
                <Calendar className='absolute right-3 top-3 w-5 h-5 text-gray-500' />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-white text-sm font-medium'>
                Check Out
              </label>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Select Date'
                  className='w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500'
                />
                <Calendar className='absolute right-3 top-3 w-5 h-5 text-gray-500' />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-white text-sm font-medium'>Room</label>
              <div className='relative'>
                <select className='w-full px-4 py-3 rounded-md bg-white text-gray-800 appearance-none'>
                  <option>Room 1</option>
                  <option>Room 2</option>
                  <option>Room 3</option>
                </select>
                <Bed className='absolute right-3 top-3 w-5 h-5 text-gray-500 pointer-events-none' />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-white text-sm font-medium'>Adults</label>
              <div className='relative'>
                <select className='w-full px-4 py-3 rounded-md bg-white text-gray-800 appearance-none'>
                  <option>Adults</option>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                </select>
                <Users className='absolute right-3 top-3 w-5 h-5 text-gray-500 pointer-events-none' />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-white text-sm font-medium'>Children</label>
              <div className='relative'>
                <select className='w-full px-4 py-3 rounded-md bg-white text-gray-800 appearance-none'>
                  <option>Children</option>
                  <option>0 Children</option>
                  <option>1 Child</option>
                  <option>2 Children</option>
                </select>
                <Users className='absolute right-3 top-3 w-5 h-5 text-gray-500 pointer-events-none' />
              </div>
            </div>

            <div>
              <button className='h-12 px-4 py-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md cursor-pointer'>
                Check Now <ArrowUpRight className='inline-block ml-2' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
