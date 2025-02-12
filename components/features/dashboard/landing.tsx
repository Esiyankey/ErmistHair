"use client";

import { LiaAngleRightSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { wigsArivals, wigsData, Testimonial } from "../../data/wigs.js";
import { useState, useEffect, useRef } from "react";
import {
  FaAngleRight,
  FaRegHeart,
  FaAngleLeft,
} from "react-icons/fa6";

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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IoIosStarOutline } from "react-icons/io";
import  {Footer}  from "../../layout/footer";


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

interface wigArivals {
  name: string;
  price: number;
  imageUrl: string;
}

interface Testimonial {
  id: number;
  author: string;
  avatar: string;
  position: string;
  content: string;
  rating: number;
}
export const Landing = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [wigs, setWigs] = useState(wigsData);
  const [wigArrival, setWigArrival] = useState<wigArivals[]>(wigsArivals);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [filteredWigs, setFilteredWigs] = useState(wigsData); // Store filtered data
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [startIndex, setStartIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts,setCounts] = useState<{[key:string]:number}>({});



  const handleCount =(id:number)=>{
    setCounts(prevCounts =>(
      {
        ...prevCounts,
        [id]:(prevCounts[id]||0)+1
      }
    ) )
  }

  const getTotalCount = () => {
    return Object.values(counts).reduce((total, count) => total + count, 0);
  };
  
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % wigs.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + wigs.length) % wigs.length);
  };

  const nextTestimonialSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonialSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleWigs = () => {
    return wigArrival
      .slice(startIndex, startIndex + 4)
      .concat(
        wigArrival.slice(0, Math.max(4 - (wigArrival.length - startIndex), 0))
      );
  };

  const buttons = [
    {
      name: "All",
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
    {
      name: "Frontal",
      id: 4,
    },
    {
      name: "Closure",
      id: 5,
    },
  ];

  useEffect(() => {
    setWigArrival(wigsArivals);
    setTestimonials(Testimonial);

    let newFilteredWigs: typeof wigsData = [];
    if (activeButton === 1) {
      newFilteredWigs = wigs;
    } else if (activeButton === 2) {
      newFilteredWigs = wigs.filter((wig) => wig.category === "invisible");
    } else if (activeButton === 3) {
      newFilteredWigs = wigs.filter((wig) => wig.category === "glueless");
    }
    setFilteredWigs(newFilteredWigs); // Update the filtered state
    setWigs(wigsData); // Reset the wigs state
  }, [activeButton]);

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
                <div className="relative flex h-full items-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-2xl space-y-4 ml-6 md:ml-32 leading-loose">
                      <h1 className="animate-fade-up font-serif leading-normal  text-5xl font-bold tracking-tighter text-[#4A1625] opacity-90 sm:text-6xl md:text-7xl">
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
                <div className="hidden xl:block ">
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
        <CarouselPrevious className="left-4 " />
        <CarouselNext className="right-4 " />
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

      <div className="xl:max-w-7xl md:max-w-2xl w-full mx-auto">
        <div className="my-8 mx-4 max-w-7xl  md:mx-auto  md:ml-4">
          <h3 className="text-4xl font-bold mb-4 ">Collections</h3>
          <p className="text-sm text-gray-500 my-6">
            Unleash a new version of yourself with our stunning collection of
            high quality female wigs.
            <br />
            Dont miss out the chance to transform your style at unbeatable
            prices.{" "}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 my-10 mr-2">
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

            <Button
              variant={"outline"}
              size={"lg"}
              className="md:mr-4 hidden md:flex"
            >
              View More
            </Button>
          </div>
        </div>

        <div className="md:my-12 my-6 grid grid-cols-1 justify-center place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredWigs.map((wig) => {
            return (
              <Card className="md:w-72 w-80" key={wig.id}>
                <CardHeader className="overflow-hidden h-60">
                  <Image
                    src={wig.image}
                    alt="image here"
                    width={240}
                    height={250}
                    className="bg-cover w-full "
                  />
                </CardHeader>
                <CardContent className="">
                  <div className="flex justify-between items-center">
                    <h1 className="">{wig.name}</h1>
                    <h1>
                      $<span>{wig.price}</span>
                    </h1>
                  </div>
                  <div className="grid grid-cols-2  gap-2 my-4 text-sm">
                    <p>{wig.length}inches</p>
                    <p className=" text-end">{wig.type}</p>
                    <p>{wig.color}</p>
                    <p className="text-end">{wig.material}</p>
                  </div>
                  <div className=" my-4 flex justify-between items-center">
                    <button
                      className="flex items-center text-black  transition-colors"
                      onClick={()=>handleCount(wig.id)}
                    >
                      <FaShoppingCart className="h-4 w-4 mr-1 text-pink-600" />
                      <span className="text-xs">Add to Cart</span>
                      <div className="h-6 w-6 border rounded-full ml-2 flex justify-center items-center"> {counts[wig.id]||0}</div>
                    </button>

                    <Link href={`/order/${wig.id}`}>
                    <Button
                      size="sm"
                      className=" bg-pink-600"
                      onClick={() => {}}
                    >
                      {" "}
                      Order
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div>
          <div className="relative max-w-[1400px] mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-medium text-gray-800">
                Recent Arrivals
              </h2>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="hidden md:flex h-8 w-8 border border-gray-300"
                >
                  <FaAngleLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="hidden md:flex h-8 w-8 border border-gray-300"
                >
                  <FaAngleRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out">
                {/* Mobile View */}
                <div className="md:hidden w-full">
                  <div className="relative">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={
                          wigArrival[startIndex].imageUrl || "/placeholder.svg"
                        }
                        alt={wigArrival[startIndex].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm">
                        <FaRegHeart className="h-5 w-5 fill-red-500 stroke-red-500" />
                      </button>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        {wigArrival[startIndex].name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        ${wigArrival[startIndex].price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-5 gap-6">
                  {getVisibleWigs().map((wig, index) => (
                    <div key={index} className="relative">
                      <div className="relative aspect-[3/4] w-full ">
                        <Image
                          src={wig.imageUrl || "/placeholder.svg"}
                          alt={wig.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm">
                          <FaRegHeart className="h-5 w-5 fill-red-500 stroke-red-500" />
                        </button>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-sm font-medium text-gray-900">
                          {wig.name}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          ${wig.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Buttons */}
              <div className="md:hidden flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="transform -translate-x-1/2 bg-white/80 backdrop-blur-sm h-8 w-8 border border-gray-300"
                >
                  <FaAngleLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="transform translate-x-1/2 bg-white/80 backdrop-blur-sm h-8 w-8 border border-gray-300"
                >
                  <FaAngleRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-8">
            Nothing less than excellent
          </h2>

          <div className="flex items-center justify-center gap-2 mb-2">
            <Image
              src="/images/hero-hair-image.png"
              alt="Trustpilot"
              width={100}
              height={30}
              className="h-7 w-auto"
            />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <IoIosStarOutline
                  key={i}
                  className="w-5 h-5 fill-[#00b67a] text-[#00b67a]"
                />
              ))}
            </div>
          </div>

          <p className="mb-12 text-gray-600">
            Reviews 4,317 <span className="text-[#00b67a]">Excellent</span>
          </p>

          <div className="relative">
            <button
              onClick={prevTestimonialSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full -translate-x-1/2"
              aria-label="Previous testimonial"
            >
              <FaAngleLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4 md:px-8"
                  >
                    <div className="max-w-xl mx-auto">
                      <div className="flex gap-0.5 justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <IoIosStarOutline
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(testimonial.rating)
                                ? "fill-[#00b67a] text-[#00b67a]"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-lg mb-6">
                        {testimonial.content}
                      </blockquote>

                      <div className="flex items-center justify-center gap-3">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="text-left">
                          <div className="font-semibold">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonialSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full translate-x-1/2"
              aria-label="Next testimonial"
            >
              <FaAngleRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
