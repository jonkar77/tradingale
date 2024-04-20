// CommunityPage.tsx
import React from "react";

const CommunityPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-2 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Community</h1>
          {/* Add header navigation or other elements if needed */}
        </div>
      </header>

      <div className="container mx-auto px-3 py-5 flex flex-row justify-around">
        {/* Left Column (Main Content) */}
        <div className="w-[750px] flex flex-col ">
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


        {/* Right Column (Additional Information or Widgets) */}
        <div className="w-1/3 flex flex-col space-y-6">
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
  );
};

export default CommunityPage;
