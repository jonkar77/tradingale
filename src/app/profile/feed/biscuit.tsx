import React from 'react';
import Link from 'next/link';

const Biscuit = () => {
    const trendingCryptos = [
        { rank: '#1', name: 'Bitcoin (BTC)' },
        { rank: '#2', name: 'Ethereum (ETH)' },
        { rank: '#3', name: 'Cardano (ADA)' }
    ];

    const stocksInNews = [
        { name: 'Jane Doe', avatar: '/user-avatar.jpg' },
        { name: 'Adam Smith', avatar: '/user-avatar.jpg' },
        { name: 'Emily Brown', avatar: '/user-avatar.jpg' }
    ];

    return (
        <div>
            <div className="flex flex-col space-y-3">
                {/* Sidebar Section for Trending Cryptocurrencies */}
                <aside className="bg-white rounded-lg shadow-md p-4 mb-6">
                    {/* Sidebar content */}
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Trending Cryptocurrencies</h2>
                        {/* Map through the trendingCryptos object and render each item */}
                        {trendingCryptos.map((crypto, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <span className="bg-gray-300 text-gray-800 rounded-full px-2 py-1 text-xs mr-2">{crypto.rank}</span>
                                <span>{crypto.name}</span>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Another Sidebar Section for Stocks in News */}
                <aside className="bg-white rounded-lg shadow-md p-4 mb-6">
                    {/* Sidebar content */}
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Stocks in News</h2>
                        {/* Map through the stocksInNews object and render each item */}
                        {stocksInNews.map((item, index) => (
                            <Link key={index} href="/profile/feed/newsStock" className="flex items-center mb-4">
                                <img src={item.avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
                                <span className="ml-2">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Biscuit;
