'use client'
import React, { useEffect, useState } from 'react';

const HalfPageScrollable: React.FC = () => {
  const [prices, setPrices] = useState({
    Nifty: 15000,
    SP500: 4500,
    BTCUSD: 45000,
    INRUSD: 0.014,
    GBPUSD: 1.35,
    FTSE: 7000,
    IndiaVIX: 20,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update prices randomly for demonstration
      setPrices({
        ...prices,
        Nifty: getRandomPrice(prices.Nifty),
        SP500: getRandomPrice(prices.SP500),
        BTCUSD: getRandomPrice(prices.BTCUSD),
        INRUSD: getRandomPrice(prices.INRUSD),
        GBPUSD: getRandomPrice(prices.GBPUSD),
        FTSE: getRandomPrice(prices.FTSE),
        IndiaVIX: getRandomPrice(prices.IndiaVIX),
      });
    }, 1000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [prices]);

  const getRandomPrice = (currentPrice: number) => {
    const randomChange = Math.random() * 10 - 5; // Random change between -5 and 5
    return parseFloat((currentPrice + randomChange).toFixed(2));
  };
  return (
    <div className='bg-gray-200'>
      <header className="bg-black shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-4 overflow-hidden">
          {Object.keys(prices).map((instrument, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white rounded-full px-4 py-2 transform transition-transform duration-1000 hover:scale-110"
              style={{ minWidth: '100px' }}
            >
              {instrument}: {prices[instrument]}
            </div>
          ))}
        </div>
      </div>
      </header>
      <div className="container mt-5  mx-auto flex flex-row justify-around h-[650px]">
        <div className="w-[850px] overflow-y-scroll no-scrollbar p-4">

          <div className="flex flex-col ">
            {/* Community Feed Section */}
            <section className="bg-white rounded-lg shadow-md p-4 mb-6">
              {/* Title */}
              <h2 className="text-xl font-semibold mb-4">Community Feed</h2>

              {/* Sample Post */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                {/* Post Header */}
                <div className="flex items-center mb-2">
                  <img src="/user-avatar.jpg" alt="User Avatar" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-500 text-sm">Just posted a new update!</p>
                  </div>
                </div>

                {/* Post Image */}
                <img src="/post-image.jpg" alt="Post Image" className="w-full h-48 object-cover mb-4" />

                {/* Post Content */}
                <p className="text-lg font-semibold">Post Title</p>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                {/* Post Actions (Likes, Comments, Retweets) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">100 likes</span>
                    <span className="text-gray-500">50 comments</span>
                    <span className="text-gray-500">20 retweets</span>
                  </div>
                  {/* Add like, comment, and retweet buttons/icons here */}
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                {/* Post Header */}
                <div className="flex items-center mb-2">
                  <img src="/user-avatar.jpg" alt="User Avatar" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-500 text-sm">Just posted a new update!</p>
                  </div>
                </div>

                {/* Post Image */}
                <img src="/post-image.jpg" alt="Post Image" className="w-full h-48 object-cover mb-4" />

                {/* Post Content */}
                <p className="text-lg font-semibold">Post Title</p>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                {/* Post Actions (Likes, Comments, Retweets) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">100 likes</span>
                    <span className="text-gray-500">50 comments</span>
                    <span className="text-gray-500">20 retweets</span>
                  </div>
                  {/* Add like, comment, and retweet buttons/icons here */}
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                {/* Post Header */}
                <div className="flex items-center mb-2">
                  <img src="/user-avatar.jpg" alt="User Avatar" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-500 text-sm">Just posted a new update!</p>
                  </div>
                </div>

                {/* Post Image */}
                <img src="/post-image.jpg" alt="Post Image" className="w-full h-48 object-cover mb-4" />

                {/* Post Content */}
                <p className="text-lg font-semibold">Post Title</p>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                {/* Post Actions (Likes, Comments, Retweets) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">100 likes</span>
                    <span className="text-gray-500">50 comments</span>
                    <span className="text-gray-500">20 retweets</span>
                  </div>
                  {/* Add like, comment, and retweet buttons/icons here */}
                </div>
              </div>
              {/* Add more posts */}
            </section>
          </div>

        </div>
        <div className="w-1/3 p-4">
          <div className="flex flex-col space-y-6">
            {/* Sidebar Section */}
            <aside className="bg-white rounded-lg shadow-md p-4 mb-6">
              {/* Sidebar content */}
              {/* Example Widget */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h2 className="text-lg font-semibold mb-2">Trending Cryptocurrencies</h2>
                <div className="flex items-center mb-2">
                  <span className="bg-gray-300 text-gray-800 rounded-full px-2 py-1 text-xs mr-2">#1</span>
                  <span>Bitcoin (BTC)</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="bg-gray-300 text-gray-800 rounded-full px-2 py-1 text-xs mr-2">#2</span>
                  <span>Ethereum (ETH)</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="bg-gray-300 text-gray-800 rounded-full px-2 py-1 text-xs mr-2">#3</span>
                  <span>Cardano (ADA)</span>
                </div>
                {/* Add more trending cryptocurrencies */}
              </div>
              {/* Add more widgets or information */}
            </aside>

            {/* Another Sidebar Section */}
            <aside className="bg-white rounded-lg shadow-md p-4 mb-6">
              {/* Sidebar content */}
              {/* Example Widget */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h2 className="text-lg font-semibold mb-2">Top Contributors</h2>
                <div className="flex items-center mb-2">
                  <img src="/user-avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full" />
                  <span className="ml-2">Jane Doe</span>
                </div>
                <div className="flex items-center mb-2">
                  <img src="/user-avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full" />
                  <span className="ml-2">Adam Smith</span>
                </div>
                <div className="flex items-center mb-2">
                  <img src="/user-avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full" />
                  <span className="ml-2">Emily Brown</span>
                </div>
                {/* Add more top contributors */}
              </div>
              {/* Add more widgets or information */}
            </aside>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HalfPageScrollable;
