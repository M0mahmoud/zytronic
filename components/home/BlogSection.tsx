import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function BlogSection() {
  const posts = [
    {
      title: "Luxury Hotel Amenities Facilities You Should Know",
      image: "/rooms/room-1.png",
      date: "Dec 15, 2024",
      author: "John Doe",
      description:
        "Discover the most romantic hotel rooms in the city, perfect for a getaway with your loved one.",
      tag: "Romantic",
    },
    {
      title: "Luxury Hotel Amenities Facilities You Should Know",
      image: "/rooms/room-2.png",
      date: "Dec 12, 2024",
      author: "John Doe",
      description:
        "Discover the most romantic hotel rooms in the city, perfect for a getaway with your loved one.",
      tag: "Romantic",
    },
    {
      title: "Luxury Hotel Amenities Facilities You Should Know",
      image: "/rooms/room-3.png",
      date: "Dec 10, 2024",
      author: "John Doe",
      description:
        "Discover the most romantic hotel rooms in the city, perfect for a getaway with your loved one.",
      tag: "Romantic",
    },
  ];

  return (
    <section className='py-20 bg-gray-100'>
      <div className='container max-w-7xl mx-auto px-4'>
        <SectionHeader
          subtitle='ABOUT FIXYLAND'
          title={
            <>
              Get More Update For
              <br />
              Playland
            </>
          }
          description='Stay updated with the latest news, offers, and insights from our luxury hotel.'
        />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {posts.map((post, index) => (
            <div key={index} className='overflow-hidden'>
              <div className='relative'>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className='w-full h-48 object-cover rounded-xl'
                  width={500}
                  height={300}
                  loading='lazy'
                />
                <div className='absolute top-2 left-4 bg-emerald-500 rounded-xl'>
                  <p className='text-white text-xs font-semibold px-2 py-1'>
                    {post.tag}
                  </p>
                </div>
              </div>
              <div className='py-4'>
                <div className='flex gap-2 items-center'>
                  <p className='text-sm text-gray-600 flex items-center'>
                    <Calendar className='size-4 text-emerald-500 inline me-1' />
                    {post.date}
                  </p>
                  <span className='text-emerald-500'>&#x2015;</span>
                  <p className='text-sm text-gray-600 flex items-center'>
                    <User className='size-4 text-emerald-500 inline me-1' />
                    {post.author}
                  </p>
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  {post.title}
                </h3>
                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                  {post.description}
                </p>
                <Button
                  variant='outline'
                  className='border-emerald-600 text-white hover:bg-emerald-600 hover:text-white bg-emerald-600 cursor-pointer'
                >
                  Read More
                  <ArrowUpRight className='size-4 ms-2' />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
