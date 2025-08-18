"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/Button";
import { Users, Bed, Bath, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ROOMS = [
  {
    id: 1,
    name: "Deluxe Rooms",
    price: 400,
    image: "/rooms/room-1.png",
    guests: 2,
    beds: 1,
    baths: 1,
    description:
      "These are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 2,
    name: "Junior Rooms",
    price: 600,
    image: "/rooms/room-2.png",
    guests: 2,
    beds: 1,
    baths: 1,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 3,
    name: "Family Rooms",
    price: 800,
    image: "/rooms/room-3.png",
    guests: 4,
    beds: 2,
    baths: 1,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 4,
    name: "Single Rooms",
    price: 300,
    image: "/rooms/room-4.png",
    guests: 1,
    beds: 1,
    baths: 1,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
  {
    id: 5,
    name: "Presidential Suite",
    price: 1200,
    image: "/rooms/room-5.png",
    guests: 6,
    beds: 3,
    baths: 2,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  },
];

export default function RoomsCarousel() {
  return (
    <section className='py-16 bg-[#E9F0EC]'>
      <div className='container max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='text-sm text-emerald-600 font-semibold mb-4 tracking-wide bg-white rounded-xl p-2 w-fit mx-auto'>
            ABOUT FIXYLAND
          </p>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            The Best Luxury Rooms And
            <br />
            Suites
          </h2>
        </div>

        {/* Carousel */}
        <div className='relative'>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className='w-full'
          >
            <CarouselContent className='-ml-2 md:-ml-4'>
              {ROOMS.map((room) => (
                <CarouselItem
                  key={room.id}
                  className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3'
                >
                  <div className='group overflow-hidden border-0'>
                    <div className='p-0'>
                      {/* Image Container */}
                      <div className='relative overflow-hidden'>
                        <Image
                          src={room.image}
                          alt={room.name}
                          className='w-full h-64 object-cover rounded-xl overflow-hidden'
                          width={350}
                          height={350}
                        />
                        {/* Price Badge */}
                        <p className='absolute top-4 left-4 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 text-sm font-semibold rounded-xl'>
                          ${room.price} / Night
                        </p>
                      </div>

                      {/* Content */}
                      <div className='py-6'>
                        <h3 className='text-xl font-semibold text-slate-900 mb-4'>
                          {room.name}
                        </h3>

                        {/* Amenities */}
                        <div className='flex items-center gap-6 mb-4'>
                          <div className='flex items-center gap-2 text-slate-600'>
                            <Users className='w-4 h-4 text-emerald-500' />
                            <span className='text-sm font-medium'>
                              {room.guests} Guests
                            </span>
                          </div>
                          <div className='flex items-center gap-2 text-slate-600'>
                            <Bed className='w-4 h-4 text-emerald-500' />
                            <span className='text-sm font-medium'>
                              {room.beds} Beds
                            </span>
                          </div>
                          <div className='flex items-center gap-2 text-slate-600'>
                            <Bath className='w-4 h-4 text-emerald-500' />
                            <span className='text-sm font-medium'>
                              {room.baths} Bath
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className='text-slate-600 text-sm leading-relaxed mb-4'>
                          {room.description}
                        </p>

                        {/* Read More Button */}
                        <Button
                          variant='ghost'
                          className='group/btn p-0 h-auto text-emerald-600 hover:text-emerald-700 font-medium border-b-2 border-emerald-600 rounded-none pb-1'
                        >
                          Read More
                          <ArrowUpRight className='w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className='hidden md:flex -left-4 lg:-left-12 bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 hover:text-slate-900' />
            <CarouselNext className='hidden md:flex -right-4 lg:-right-12 bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 hover:text-slate-900' />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
