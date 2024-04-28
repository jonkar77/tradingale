import React from 'react'

const Post = () => {
    return (
            <div className="flex flex-col">
                <section className="bg-white rounded-lg shadow-md p-4 mb-3">
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
    )
}

export default Post