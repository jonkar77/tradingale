'use client'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring';


const Topline = () => {
    const prices = [
        { instrument: 'Nifty', price: 15000 },
        { instrument: 'SP500', price: 4500 },
        { instrument: 'BTCUSD', price: 45000 },
        { instrument: 'INRUSD', price: 0.014 },
        { instrument: 'GBPUSD', price: 1.35 },
        { instrument: 'FTSE', price: 7000 },
        { instrument: 'IndiaVIX', price: 20 },
      ];
    
      const [index, setIndex] = useState(1);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % prices.length);
        }, 10000); // Change price every 3 seconds
    
        return () => clearInterval(interval);
      }, [prices.length]);
    
      const animatedProps = useSpring({
        transform: `translateX(${index * 100}%)`,
        config: { duration: 10000 },
        //run this on loop
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(100%)' },
        reset: true,
        loop: true,
    
      });
    
      const getRandomPrice = (currentPrice: number) => {
        const randomChange = Math.random() * 10 - 5; // Random change between -5 and 5
        return parseFloat((currentPrice + randomChange).toFixed(2));
      };
  return (
    <div>
        <div className="relative h-10 bg-black overflow-hidden">
          <animated.div
            className="absolute top-0 left-0 h-full  text-white flex items-center justify-center text-lg font-semibold"
            style={animatedProps}
          >
            {prices.map((price, idx) => (
              <div key={idx} className="px-4">
                {price.instrument}: {price.price}
              </div>
            ))}
          </animated.div>
        </div>
    </div>
  )
}

export default Topline