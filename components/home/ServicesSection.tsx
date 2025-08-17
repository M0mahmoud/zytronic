import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-sm text-emerald-600 font-semibold mb-4 tracking-wide bg-white rounded-md p-2 w-fit shadow'>
              ABOUT FIXYLAND
            </p>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Get The Best Hotel
              <br />
              Playland Services
            </h2>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              We provide comprehensive services to ensure your stay is
              comfortable, convenient, and memorable. From dining to recreation,
              we have everything you need for the perfect getaway.
            </p>
            <Button className='text-white bg-emerald-600 px-6 py-2 rounded font-semibold transition-colors hover:bg-emerald-500'>
              Claim Offer <ArrowUpRight className='inline-block ml-2' />
            </Button>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-emerald-600 text-white p-6 rounded-xl col-span-1 row-span-1'>
              <div className='p-0 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-center w-16 h-16  mb-4'>
                  <Image
                    src='/services/fitness.png'
                    alt='Fitness Center'
                    width={32}
                    height={32}
                    className='w-full h-full object-contain invert'
                  />
                </div>
                <h3 className='text-xl font-semibold mb-3'>Fitness Center</h3>
                <p className='text-white/90 text-sm leading-relaxed'>
                  orem ipsum dolor sit conse ctetur adipiscing elit conse ctetur
                  adipiscing
                </p>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
              <div className='p-0 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-center w-16 h-16 mb-4'>
                  <Image
                    src='/services/jacuzzi.png'
                    alt='Jacuzzi'
                    width={32}
                    height={32}
                    className='w-full h-full object-contain'
                  />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  Jacuzzi
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  orem ipsum dolor sit conse ctetur adipiscing elit conse ctetur
                  adipiscing
                </p>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
              <div className='p-0 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-center w-16 h-16 mb-4'>
                  <Image
                    src='/services/swimming.png'
                    alt='Swimming Pool'
                    width={32}
                    height={32}
                    className='w-full h-full object-contain'
                  />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  Swimming Pool
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  orem ipsum dolor sit conse ctetur adipiscing elit conse ctetur
                  adipiscing
                </p>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl hover:shadow-lg transition-shadow'>
              <div className='p-0 flex flex-col items-start justify-start'>
                <div className='flex items-center justify-center w-16 h-16 mb-4'>
                  <Image
                    src='/services/spa.png'
                    alt='SPA Treatments'
                    width={32}
                    height={32}
                    className='w-full h-full object-contain'
                  />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  SPA Treatments
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  orem ipsum dolor sit conse ctetur adipiscing elit conse ctetur
                  adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mt-6 pt-8 '>
          <p className='text-gray-500 text-sm'>
            Call us Today: (+1) 967 654 3210
            <span className='mx-4'>OR</span>
            Email us: info@acmain.com
          </p>
        </div>
      </div>
    </section>
  );
}
