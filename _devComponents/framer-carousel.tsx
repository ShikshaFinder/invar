'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=880&auto=format&fit=crop',
    title: 'Sore Throat & Cough Relief Spray',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=880&auto=format&fit=crop',
    title: 'SallyPro Protein – Mango Flavour',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1458044312882-49825b80c883?q=80&w=880&auto=format&fit=crop',
    title: 'SallyPro Protein – Chocolate Flavour',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=880&auto=format&fit=crop',
    title: 'SallyPro D Diabesity Formula',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=880&auto=format&fit=crop',
    title: 'SallyPro C Cardiac Protein',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1466786784937-3e682c802b14?q=80&w=880&auto=format&fit=crop',
    title: 'Ingredient Spotlight – Honey & Botanicals',
  },
];

export function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className='lg:p-10 sm:p-4 p-2 max-w-4xl mx-auto'>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div className='flex' style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className='shrink-0 w-full h-[500px]'>
                <img
                  src={item.url}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-lg select-none pointer-events-none'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 rounded-xl border border-white/30'>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
