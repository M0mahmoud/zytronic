import { Instagram } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className='bg-white pt-16 pb-0'>
      <div className='mx-auto'>
        <div className='relative overflow-hidden h-[320px] max-h-[320px]'>
          <div className='w-full h-full items-center grid grid-cols-5 relative select-none'>
            <div className='absolute inset-0 bg-black/35 pointer-events-none' />
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={`/rooms/room-${index + 1}.png`}
                alt={`Hero Image ${index + 1}`}
                width={350}
                height={350}
                className='w-80 h-80 object-cover'
                loading='lazy'
              />
            ))}
          </div>

          <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            <div className='bg-white/80  rounded-xl p-12 text-center shadow-xl pointer-events-auto'>
              <Instagram className='w-12 h-12 text-emerald-500 mx-auto mb-4' />
              <p className='text-lg font-bold text-emerald-500'>Follow Our</p>
              <p className='text-lg font-bold text-emerald-500'>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
