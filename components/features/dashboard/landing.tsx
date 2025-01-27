"use client";

import { LiaAngleRightSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: HeroSlide[] = [
  {
    image: "/public/images/hero-background-image.jpg",
    title: "New Season",
    subtitle: "New Colors!",
    description: "Fall Wig Collection",
  },
  {
    image: "/public/images/hero-background-image.jpg",
    title: "Premium Quality",
    subtitle: "Best Styles",
    description: "Winter Collection 2024",
  },
  {
    image: "/public/images/hero-background-image.jpg",
    title: "Special Offer",
    subtitle: "Limited Time",
    description: "Exclusive Designs",
  },
];

export const Landing = () => {
  const [activeButton, setActiveButton] = React.useState(1);
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const buttons = [
    {
      name: "Top Comfort",
      id: 1,
    },
    {
      name: "Invisible",
      id: 2,
    },
    {
      name: "Glueless",
      id: 3,
    },
  ];

  const handleOnclickButton = (index: number) => {
    setActiveButton(index);
  };
  return (
    <div>
      <div className="bg-pink-600 ">
        <div className="max-w-7xl text-white mx-auto h-12 px-4 sm:px-6 lg:px-8 flex gap-2 items-center">
          <FaHome className="text-sm" />
          <h5 className="text-sm">Home</h5>
          <LiaAngleRightSolid className="text-sm" />
          <h5 className="text-sm">services</h5>
        </div>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] flex justify-between items-center w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent" />
                </div>
                <div className="relative flex  h-full items-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-2xl space-y-4 ml-32 leading-loose">
                      <h1 className="animate-fade-up font-serif leading-none text-7xl font-bold tracking-tighter text-[#4A1625] opacity-90 sm:text-6xl md:text-7xl">
                        {slide.title}
                        <span className="block text-pink-600">
                          {slide.subtitle}
                        </span>
                      </h1>
                      <p className="animate-fade-up text-3xl font-medium text-gray-900 opacity-90 md:text-3xl">
                        {slide.description}
                      </p>
                      <div className="animate-fade-up">
                        <p className="text-xl font-medium text-pink-600">
                          AT UNMATCHED PRICES!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/hero-hair-image.png"
                    objectFit="cover"
                    alt="image here"
                    width={700}
                    height={800}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center space-y-8 text-center">
        <p className="text-sm">
          Embrace the season of change with our stunning Wig Collection!
          Discover bold, vibrant colors and styles inspired by <br /> beauty—at
          prices you wont find anywhere else. Whether youre looking for a fresh
          new look or a complete transformation,
          <br /> now is the perfect time to redefine your style.
        </p>
      </div>

      <div className="h-[2px] bg-gray-100 rounded-sm mx-auto max-w-7xl mb-3"></div>
      <div className="my-8 max-w-7xl  mx-auto">
        <h3 className="text-4xl font-bold mb-4 ">Collections</h3>
        <p className="text-sm text-gray-500 my-6">
          Unleash a new version of yourself with our stunning collection of high
          quality female wigs.
          <br />
          Dont miss out the chance to transform your style at unbeatable prices.{" "}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 my-10 ">
            {buttons.map((button) => {
              return (
                <Button
                  onClick={() => handleOnclickButton(button.id)}
                  className={
                    activeButton === button.id
                      ? "bg-pink-600 text-white text-sm"
                      : ""
                  }
                  key={button.id}
                  variant="outline"
                  size={"lg"}
                >
                  {button.name}
                </Button>
              );
            })}
          </div>
          <Button variant={"outline"} size={"lg"}>
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};
