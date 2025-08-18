import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section className='py-20 bg-[#E9F0EC]'>
      <div className='container max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-center gap-12 lg:gap-24 flex-col-reverse md:flex-row'>
          <div className='relative w-full lg:w-[700px] max-w-[700px] h-full lg:h-[560px]'>
            <Image
              src='/placeholder.svg'
              alt='Luxury Hotel Lobby'
              className='rounded-lg shadow-md w-full h-full object-cover'
              width={700}
              height={560}
            />
            {/* Experience Badge */}
            <div className='absolute bottom-[40%] md:-right-[10%] bg-white rounded-full shadow-lg hidden md:block'>
              <div className='relative w-24 h-24'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <svg
                    className='w-full h-full -rotate-90'
                    viewBox='0 0 100 100'
                  >
                    <path
                      id='circle'
                      d='M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0'
                      fill='none'
                    />
                    <text className='text-[6px] fill-gray-700 font-medium'>
                      <textPath href='#circle' startOffset='0%'>
                        20 YEARS OF EXPERIENCE • HOTEL BUSINESS •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <p className='text-sm text-emerald-600 font-semibold mb-4 tracking-wide bg-white rounded-xl p-2 w-fit'>
              ABOUT FIXYLAND
            </p>

            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              World Class Luxury Hotel
              <br />
              and Resort Near City
            </h2>

            <p className='text-gray-600 mb-8 leading-relaxed'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-3 h-3 text-white' />
                </div>
                <span className='text-gray-700'>
                  24+ Hours Emergency Service
                </span>
              </div>

              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-3 h-3 text-white' />
                </div>
                <span className='text-gray-700'>
                  It is a Long Established fact
                </span>
              </div>

              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-3 h-3 text-white' />
                </div>
                <span className='text-gray-700'>Comfortable Atmosphere</span>
              </div>

              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-3 h-3 text-white' />
                </div>
                <span className='text-gray-700'>
                  Flexible and Cost-Effective
                </span>
              </div>

              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-3 h-3 text-white' />
                </div>
                <span className='text-gray-700'>Something by accident</span>
              </div>

              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-3 h-3 text-white' />
                </div>
                <span className='text-gray-700'>
                  Get Free Consultation Anytime
                </span>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='relative w-12 h-12'>
                <Image
                  src='/user.svg'
                  alt='Robert L. Robinson'
                  className='w-full h-full rounded-full object-cover'
                  fill
                />
              </div>

              <div>
                <p className='font-semibold text-gray-900'>
                  Robert L. Robinson
                </p>
                <p className='text-sm text-gray-600'>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
