"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Building2,
  Send,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-[#111] text-white py-16 pb-10'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-6'>
              <Building2 className='w-8 h-8 text-emerald-600' />
              <span className='text-white font-bold text-xl'>Fixyland</span>
            </div>
            <p className='text-gray-400 mb-6 text-sm leading-relaxed'>
              Lorem ipsum tempor ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <div className='flex space-x-4'>
              <div className='w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors'>
                <Facebook className='w-4 h-4' />
              </div>
              <div className='w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors'>
                <Twitter className='w-4 h-4' />
              </div>
              <div className='w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors'>
                <Instagram className='w-4 h-4' />
              </div>
              <div className='w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-emerald-600 cursor-pointer transition-colors'>
                <Youtube className='w-4 h-4' />
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-6 justify-evenly  lg:col-span-2'>
            <div>
              <h3 className='text-lg font-semibold mb-6 text-white'>EXPLORE</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white text-sm'
                  >
                    About Hotel
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white text-sm'
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white text-sm'
                  >
                    Hotel Staff
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white text-sm'
                  >
                    Latest News
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white text-sm'
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-6 text-white'>CONTACT</h3>
              <div className='space-y-4 text-gray-400 text-sm'>
                <p>
                  9631 Sabrina Park, 115 Devon Isle,
                  <br />
                  Louisiana, USA
                </p>
                <a
                  className='text-white block font-medium'
                  href='tel:+19676543210'
                >
                  (+1) 967 654 3210
                </a>

                <a className='text-white block' href='mailto:info@acmain.com'>
                  info@acmain.com
                </a>
              </div>
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='bg-black rounded-2xl flex flex-col gap-4 justify-center p-6 py-12'>
              <h3 className='text-lg font-semibold mb-6 text-white text-center'>
                NEWSLETTER
              </h3>
              <form
                className='flex flex-col gap-5'
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className='flex'>
                  <input
                    type='email'
                    placeholder='Ex: info@acmain.com'
                    className='flex-1 py-2 bg-transparent border-b border-gray-200 text-white text-sm border-0 focus-within:border-none focus-within:border-b focus:border-none focus:border-b focus-within:outline-none focus:outline-none'
                  />
                  <button className='px-4 py-2 bg-transparent rounded-r transition-colors -ms-9 cursor-pointer'>
                    <Send className='w-4 h-4 text-white' />
                  </button>
                </div>

                <div className='flex items-start space-x-2'>
                  <input
                    type='checkbox'
                    id='terms'
                    className='mt-0.5 w-4 h-4  rounded-full'
                  />
                  <label htmlFor='terms' className='text-gray-400 text-sm'>
                    I agree to all terms and policies
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
          <p>&copy; Copyright 2025 Fixyland. All Rights Reserved.</p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a href='#' className='hover:text-white'>
              Terms and Conditions
            </a>
            <a href='#' className='hover:text-white'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
