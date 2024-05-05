import React, { useState } from 'react';
import Notes from './modal/page'; // Assuming Notes component is in the same directory

const Post = () => {
    const [notesOpen, setNotesOpen] = useState(false);

    const postHandler = () => {
        // Open the Notes modal
        setNotesOpen(true);
    };

    const closeModal = () => {
        // Close the Notes modal
        setNotesOpen(false);
    };

    return (
        <div>
            <div className="flex flex-col border border-black">
                <section className=" rounded-lg shadow-md p-2 mb-3">
                    <div className='py-1 bg-teal-600 mb-0 border border-black flex justify-between items-center'>
                        <h2 className="text-xl font-semibold ml-2 text-white">Community Feed</h2>
                        <button onClick={postHandler} className='p-2 bg-slate-200 mr-3 rounded-lg shadow-lg'>
                            Write
                        </button>
                    </div>
                    {/* Sample Post */}
                    <div className='bg-white p-3 overflow-y-scroll no-scrollbar h-[550px]'>
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
                    </div>
                    {/* Add more posts */}
                    <div className='w-[600px]'>
                    </div>
                </section>
            </div>
            <div >
                <Notes open={notesOpen} toggler={closeModal} />
            </div>
        </div>
    );
};

export default Post;
