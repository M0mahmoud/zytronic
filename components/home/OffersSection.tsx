import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function OffersSection() {
  return (
    <section className='py-20 bg-gray-100'>
      <div className='container max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <p className='text-sm text-emerald-600 font-semibold mb-4 tracking-wide bg-white rounded-xl p-2 w-fit text-center mx-auto'>
            ABOUT FIXYLAND
          </p>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Special Discount for Hotel &
            <br />
            Resort Booking
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {Array.from({ length: 2 }).map((_, index) => (
            <div className='overflow-hidden' key={index}>
              <div className='relative rounded-3xl overflow-hidden'>
                <Image
                  src='/offers.jpg'
                  alt='Resort Offer'
                  className='w-full h-72 object-cover rounded-3xl'
                  width={400}
                  height={400}
                />
                <div className='absolute inset-0 bg-black/45 flex items-end justify-start p-8 z-10'>
                  <div className='text-white'>
                    <h3 className='text-3xl font-bold mb-4'>
                      Get 25% Off on Resort <br />
                      Booking
                    </h3>
                    <Button className='bg-white hover:bg-gray-200 text-black font-semibold'>
                      Book Now{" "}
                      <ArrowUpRight className='w-4 h-4 ms-3 text-black' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
