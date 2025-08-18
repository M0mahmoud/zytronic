import {
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Building2,
  MoveUpRight,
} from "lucide-react";

export default function Header() {
  return (
    <div className='absolute inset-x-0 top-0 z-50 bg-emerald-600 md:bg-transparent'>
      <div className='text-white py-2 px-4 bg-emerald-600  hidden md:block'>
        <div className='container mx-auto max-w-6xl flex items-center justify-between text-sm'>
          <div className='items-center space-x-6 flex'>
            <div className='flex items-center gap-1'>
              <div className='size-1.5 rounded-full bg-yellow-400' />
              <span>7631 Sabrina Park, TN Devon 3rd, USA</span>
            </div>
            <div className='flex items-center gap-1'>
              <div className='size-1.5 rounded-full bg-yellow-400' />
              <span>info@domain.com</span>
            </div>
            <div className='flex items-center gap-1'>
              <div className='size-1.5 rounded-full bg-yellow-400' />
              <span>(+1) 987 654 3210</span>
            </div>
          </div>
          <div className='flex items-center space-x-3'>
            <Facebook className='w-4 h-4 hover:text-yellow-400 cursor-pointer' />
            <Twitter className='w-4 h-4 hover:text-yellow-400 cursor-pointer' />
            <Instagram className='w-4 h-4 hover:text-yellow-400 cursor-pointer' />
            <Linkedin className='w-4 h-4 hover:text-yellow-400 cursor-pointer' />
          </div>
        </div>
      </div>

      <header className='relative z-50'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Building2 className='w-8 h-8 text-white md:text-emerald-600 rounded flex items-center justify-center' />
              <span className='text-white font-bold text-xl'>Fixyland</span>
            </div>

            <nav className='hidden md:flex items-center space-x-8'>
              <div className='flex items-center space-x-1'>
                <a
                  href='#'
                  className='text-white hover:text-emerald-600 transition-colors'
                >
                  Home
                </a>
              </div>
              <div className='flex items-center space-x-1'>
                <a
                  href='#'
                  className='text-white hover:text-emerald-600 transition-colors'
                >
                  Pages
                </a>
              </div>
              <div className='flex items-center space-x-1'>
                <a
                  href='#'
                  className='text-white hover:text-emerald-600 transition-colors'
                >
                  Rooms & Suites
                </a>
              </div>
              <div className='flex items-center space-x-1'>
                <a
                  href='#'
                  className='text-white hover:text-emerald-600 transition-colors'
                >
                  Services
                </a>
              </div>
              <div className='flex items-center space-x-1'>
                <a
                  href='#'
                  className='text-white hover:text-emerald-600 transition-colors'
                >
                  Blog
                </a>
              </div>
              <a
                href='#'
                className='text-white hover:text-emerald-600 transition-colors'
              >
                Contact
              </a>
            </nav>

            <div className='items-center space-x-4 hidden md:flex'>
              <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 h-12 flex items-center gap-2 rounded-md cursor-pointer'>
                Book Your Stay <MoveUpRight className='w-4 h-4 text-black' />
              </button>
            </div>
            <div className='block md:hidden'>
              <Menu className='size-6 text-white cursor-pointer' />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
