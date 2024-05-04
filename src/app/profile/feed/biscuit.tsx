'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Biscuit = () => {
    const trendingCryptos = [
        { rank: '#1', name: 'Bitcoin (BTC)' },
        { rank: '#2', name: 'Ethereum (ETH)' },
        { rank: '#3', name: 'Cardano (ADA)' }
    ];
    const [loader, setLoader] = useState({ links: [], images: [] });
    const [payload, setPayload] = useState({ ticks: [], volumes: [], logos: [] });
    const [loading, setLoading] = useState(true); // Initial loading state set to true

    const fetchCrypto = async () => {
        try {
            const response = await fetch("/api/scrape/cryptoVol", {
                headers: {
                    Accept: "application/json",
                    method: "GET",
                },
            });
            if (response.ok) {
                const data = await response.json();
                setPayload(data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false after fetching data, whether success or error
        }
    };

    useEffect(() => {
        fetchCrypto(); // Call fetchData when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once
    const fetchNews = async () => {
        try {
            const response = await fetch("/api/scrape/news", {
                headers: {
                    Accept: "application/json",
                    method: "GET",
                },
            });
            if (response.ok) {
                const data = await response.json();
                setLoader(data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false after fetching data, whether success or error
        }
    };

    useEffect(() => {
        fetchNews(); // Call fetchData when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <div className="flex flex-col space-y-3 mr-3">
                {/* Sidebar Section for Trending Cryptocurrencies */}
                <aside className="bg-white rounded-lg shadow-md p-4 mb-2">
                    {/* Sidebar content */}
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Trending Cryptocurrencies(by Vol)</h2>
                        {/* Map through the trendingCryptos object and render each item */}
                        {loading? (<div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                            </div>)
                            :
                        (<div>
                            {payload.ticks.map((crypto, index) => (
                                <div key={index} className="flex items-center mb-4 bg-slate-200 p-1 m-2 rounded-md">
                                    {/* Logo */}
                                    <img src={payload.logos[index]} alt={`${crypto} Logo`} className="h-8 w-8 rounded-full" />
                                    {/* Name */}
                                    <span className="ml-2">{crypto}</span>
                                    {/* Volume */}
                                    <span className="ml-auto">{payload.volumes[index]}</span>
                                </div>
                            ))}
                        </div>)}
                    </div>
                </aside>
                {/* Another Sidebar Section for Stocks in News */}
                <aside className="bg-white rounded-lg shadow-md p-4">
                    {/* Sidebar content */}
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Market Buzz</h2>
                        {/* Show loading spinner if loading is true */}
                        {loading ? (
                            <div className="flex items-center justify-center h-[300px]">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                            </div>
                        ) : (
                            // Map through the Loader.links array and render each link with its corresponding image
                            <div className='overflow-y-scroll no-scrollbar h-[300px]'>
                                {loader.links.map((headline, index) => (
                                    <Link key={index} href="#">
                                        <div className="flex items-center mb-4 rounded-md bg-neutral-200 p-2">
                                            <img src={loader.images[index]} alt="Buzz Image" className="h-12 w-12 rounded-full" />
                                            <span className="ml-2 ">{headline}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Biscuit;
