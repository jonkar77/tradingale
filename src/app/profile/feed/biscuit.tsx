import React from 'react'

const Biscuit = () => {
    return (
        <div>
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
    )
}

export default Biscuit