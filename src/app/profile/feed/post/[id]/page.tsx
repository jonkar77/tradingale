'use client';

import { useEffect, useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import Link from 'next/link';
import { showToast } from '@/app/components/toast/Toast';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

const Product = ({ params }: { params: { id: string } }) => {
    const [post, setPost] = useState(null);
    const [menu, setMenu] = useState(false);
    const [likeStatus, setLikeStatus] = useState(false);
    const [dislikeStatus, setDislikeStatus] = useState(false);
    const [id, setId] = useState("");
    const data = {
        id: "",
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/getPosts`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            const post = data.find((post) => post._id === params.id);
            setPost(post);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteHandler = async (postId) => {
        try {
            setId(postId)
            data.id = postId
            console.log(data);

            const response = await fetch(`http://localhost:3000/api/users/deletePost`, {
                method: 'DELETE',
                body: JSON.stringify(data)
            });

            if (response.ok) {
                document.location.replace('/profile/feed')
                console.log('Post deleted successfully');
                // Handle any UI updates or notifications after successful deletion
            } else {
                console.error('Failed to delete post');
                // Handle error scenarios, show error messages, etc.
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            // Handle any errors that occur during the deletion process
        }
        showToast('Post deleted successfully');
        fetchData()
    };
    const likeClicked = () => {
        if (!likeStatus) {
            setLikeStatus(true);
            setDislikeStatus(false);
        }
        if (likeStatus) {
            setLikeStatus(false);
        }
    };

    const dislikeClicked = () => {
        if (!dislikeStatus) {
            setDislikeStatus(true);
            setLikeStatus(false);
        }
        if (dislikeStatus) {
            setDislikeStatus(false);
        }
    };

    const toggleDropdown = () => {
        setMenu(!menu);
    };

    return (
        <div className='flex justify-center'>
            <div className='container p-4'>
                <div className='flex items-center justify-end mb-4'>
                    <div className='relative'>
                        <CiMenuKebab onClick={toggleDropdown} className='cursor-pointer' />
                        {menu && (
                            <div className='absolute z-10 mt-2 w-38 bg-white border border-gray-200 rounded shadow-md'>
                                <div className='py-1'>
                                    <Link href='#'>
                                        <span className='block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                                            Edit
                                        </span>
                                    </Link>
                                    <span
                                        onClick={() => deleteHandler(params.id)}
                                        className='block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                                    >
                                        Delete
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {post && (
                    <div className='bg-white rounded-lg shadow-md p-4'>
                        <img src={post.image} alt='Post Image' className='rounded-lg mb-4' />
                        <p className='text-gray-700'>{post.description}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-500" onClick={() => likeClicked()}>
                                    {likeStatus ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
                                </span>
                                <span className="text-gray-500" onClick={() => dislikeClicked()}>
                                    {dislikeStatus ? <AiFillDislike size={22} /> : <AiOutlineDislike size={22} />}
                                </span>
                                <span className="text-gray-500">20 comments</span>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;