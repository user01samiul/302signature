"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Al-Mansoori",
    location: "Dubai",
    rating: 5,
    comment:
      "The Florasis collection is absolutely stunning. The packaging alone is worth every dirham, but the product quality is exceptional. My makeup has never looked better!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Aisha Khan",
    location: "Abu Dhabi",
    rating: 4,
    comment:
      "I was skeptical about ordering cosmetics online, but 302 Signature exceeded my expectations. The Zeesea palette arrived perfectly packaged and is even more beautiful in person.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    name: "Fatima Ahmed",
    location: "Sharjah",
    rating: 5,
    comment:
      "Paese products have transformed my skincare routine. My complexion has never been so radiant. The customer service at 302 Signature is also top-notch!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 4,
    name: "Layla Hassan",
    location: "Riyadh",
    rating: 5,
    comment:
      "The delivery was faster than expected and the products were authentic. Will definitely be ordering again soon!",
    avatar: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0); // 0 = no direction, 1 = right, -1 = left

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-rose-600 font-semibold tracking-wider uppercase text-sm">
            Customer Love
          </span>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-gray-600 mt-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
           {` Don't just take our word for it - hear from our satisfied customers`}
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-rose-100/30 mix-blend-multiply filter blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-100/30 mix-blend-multiply filter blur-3xl animate-float-medium"></div>
            
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative z-10"
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonials[currentTestimonial].rating
                          ? "text-amber-400 fill-current"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-center text-gray-700 font-medium mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].comment}
                </blockquote>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 relative">
                    <Image
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl group"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-rose-600 transition-colors" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl group"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700 group-hover:text-rose-600 transition-colors" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-rose-600 w-6" 
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}