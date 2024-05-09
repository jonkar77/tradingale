import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Biscuit = () => {
    const [loader, setLoader] = useState({ links: [], images: [] });
    const [payload, setPayload] = useState({ ticks: [], volumes: [], logos: [] });
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(true);

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
                setLoad(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoad(false);
        }
    };

    useEffect(() => {
        fetchCrypto();
    }, []);

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
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const cryptoSkeletonElements = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="flex items-center mb-4 bg-slate-200 p-1 m-2 rounded-md animate-pulse">
            <div className="h-7 w-7 rounded-full bg-gray-300"></div>
            <div className="ml-2 w-20 h-4 bg-gray-300 rounded"></div>
            <div className="ml-auto w-12 h-4 bg-gray-300 rounded"></div>
        </div>
    ));

    const newsSkeletonElements = Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="flex items-center mb-4 bg-white p-1 m-2 rounded-md animate-pulse">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="ml-4 w-3/4 h-4 bg-gray-300 rounded"></div>
        </div>
    ));

    return (
        <div>
            <div className="flex flex-col space-y-3 mr-1">
                <aside className="bg-white rounded-lg shadow-md p-4">
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Trending Crypto</h2>
                        {load ? (
                            <div>{cryptoSkeletonElements}</div>
                        ) : (
                            <div>
                                {payload.ticks.map((crypto, index) => (
                                    <div key={index} className="flex items-center mb-4 bg-slate-200 p-1 m-2 rounded-md">
                                        <img src={payload.logos[index]} alt={`${crypto} Logo`} className="h-7 w-7 rounded-full" />
                                        <span className="ml-2">{crypto}</span>
                                        <span className="ml-auto text-[15px]">{payload.volumes[index]}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </aside>
                <aside className="bg-white rounded-lg shadow-md p-4">
                    <div className="border-b border-gray-200 pb-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Market Buzz</h2>
                        {loading ? (
                            <div>{newsSkeletonElements}</div>
                        ) : (
                            <div className='overflow-y-scroll no-scrollbar h-[250px]'>
                                {loader.links.map((headline, index) => (
                                    <Link key={index} href="#">
                                        <div className="flex items-center mb-4 rounded-md bg-neutral-200 p-2">
                                            <img src={loader.images[index]} alt="Buzz Image" className="h-12 w-12 rounded-full" />
                                            <span className="ml-2 text-[14px]">{headline}</span>
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
