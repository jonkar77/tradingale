import React, { useState, useEffect } from 'react';
import Notes from '../modal/createPost/page';
import { CiMenuKebab } from 'react-icons/ci';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { BiSolidLike } from "react-icons/bi";


const Post = () => {
    const [posts, setPosts] = useState([]);
    const [likeStatus, setLikeStatus] = useState({});
    const [dislikeStatus, setDislikeStatus] = useState({});
    const [notesOpen, setNotesOpen] = useState(false);
    const [load, setLoad] = useState(true);
    const [activePostIndex, setActivePostIndex] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users/getPosts');
                if (!response.ok) {
                    setLoad(false);
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPosts(data);
                // Initialize like and dislike status for each post
                const initialLikeStatus = {};
                const initialDislikeStatus = {};
                data.forEach((post, index) => {
                    initialLikeStatus[index] = false;
                    initialDislikeStatus[index] = false;
                });
                setLikeStatus(initialLikeStatus);
                setDislikeStatus(initialDislikeStatus);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoad(false);
            }
        };

        fetchData();
    }, []);

    const postHandler = () => {
        // Open the Notes modal
        setNotesOpen(true);
    };

    const likeClicked = (index) => {
        setLikeStatus((prevStatus) => ({
            ...prevStatus,
            [index]: !prevStatus[index],
        }));
        setDislikeStatus((prevStatus) => ({
            ...prevStatus,
            [index]: false,
        }));
    };

    const dislikeClicked = (index) => {
        setDislikeStatus((prevStatus) => ({
            ...prevStatus,
            [index]: !prevStatus[index],
        }));
        setLikeStatus((prevStatus) => ({
            ...prevStatus,
            [index]: false,
        }));
    };

    const closeModal = () => {
        // Close the Notes modal
        setNotesOpen(false);
    };

    const toggleDropdown = (index) => {
        setActivePostIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const skeletonElements = Array.from({ length: 1 }, (_, index) => (
        <div key={index} className="border-b border-gray-200 pb-4 mb-4 relative">
            <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="ml-3 flex-1">
                    <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-21 bg-gray-300 rounded"></div>
                </div>
            </div>
            <div className="w-full h-[300px] bg-gray-300 rounded mb-4"></div>
            <div className="text-lg font-semibold w-[150px] h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-16 bg-gray-300 rounded"></div>

        </div>
    ));



    return (
        <div>
            <div className="flex flex-col shadow-md">
                <section className="rounded-lg p-2 mb-3">
                    <div className="py-1 bg-teal-600 mb-0 border border-black flex justify-between items-center">
                        <h2 className="text-xl font-semibold ml-2 text-white">Community Feed</h2>
                        <button onClick={postHandler} className="p-2 bg-slate-200 mr-3 rounded-lg shadow-lg">
                            Write
                        </button>
                    </div>
                    <div className="bg-white p-3 overflow-y-scroll no-scrollbar h-[550px]">
                        {load ? (
                            <div>{skeletonElements}</div>
                        ) : (
                            <div>
                                {posts.map((post, index) => (
                                    <div key={index} className="border-b border-gray-400 pb-4 mb-4 relative">
                                        <Link href={`feed/post/${post?._id}`}>
                                        <div className="flex items-center mb-2 justify-between">
                                            <div className="w-[250px] flex">
                                                <img src="/user-avatar.jpg" alt="User Avatar" className="h-10 w-10 rounded-full" />
                                                <div className="ml-3 flex">
                                                    <div>
                                                        <p className="font-semibold">John Doe</p>
                                                        <p className="text-gray-500 text-sm">Just posted a new update!</p>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <img src={post.image} alt="Post Image" className="w-full h-[300px] object-cover mb-4" />
                                        <p className="text-gray-700 mb-4">{post.description}</p>
                                        </Link>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span className="text-gray-500" onClick={() => likeClicked(index)}>
                                                    {likeStatus[index] ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
                                                </span>
                                                <span className="text-gray-500" onClick={() => dislikeClicked(index)}>
                                                    {dislikeStatus[index] ? <AiFillDislike size={22} /> : <AiOutlineDislike size={22} />}
                                                </span>
                                                <span className="text-gray-500">20 comments</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* <div className="w-[600px]"></div> */}
                </section>
            </div>
            <div>
                <Notes open={notesOpen} toggler={closeModal} />
            </div>
            
        </div>
    );
};

export default Post;
