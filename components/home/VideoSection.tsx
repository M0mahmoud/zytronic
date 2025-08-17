"use client";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto'>
        <div className='relative overflow-hidden h-[400px] max-h-[400px]'>
          <div className='w-full h-full'>
            <video
              ref={videoRef}
              src='/ve.mp4'
              className='w-full h-full object-cover'
              poster='/hero.jpg'
              controls={isPlaying}
            />
          </div>

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className='absolute inset-0 flex items-center justify-center'
              aria-label='Play video'
            >
              <div className='bg-white/30 p-4 rounded-full'>
                <div className='w-16 h-16  bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110'>
                  <Play className='sm:w-8 sm:h-8 text-black fill-current' />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
