'use client';

import { useEffect, useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import Link from 'next/link';

const Product = ({ params }: { params: { id: string } }) => {
    const [post, setPost] = useState(null);
    const [menu, setMenu] = useState(false);
    const [id, setId] = useState("");

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
            console.log(id);
            
            const response = await fetch(`http://localhost:3000/api/users/deletePost`, {
                method: 'DELETE',
                body: id
            });
    
            if (response.ok) {
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
        fetchData()
    };

    const toggleDropdown = () => {
        setMenu(!menu);
    };

    return (
        <div className='container p-4'>
           <div className='flex'>
           <h1>Product {params.id}</h1>
            <div onClick={() => toggleDropdown()} className="cursor-pointer">
                        <CiMenuKebab />
                        {menu && (
                            <div className="absolute z-50 mt-2 w-38 bg-white border border-gray-200 rounded shadow-md">
                                <div className="py-1">
                                    <Link href="#">
                                        <span className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                            Edit
                                        </span>
                                    </Link>
                                    <span onClick={()=>deleteHandler(params.id)} className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        Delete
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
           </div>
            {post ? (
                <div>
                    <img src={post.image} alt="Post Image" />
                    <p>{post.description}</p>
                    
                </div>
            ): 
            <div>
                page no longet exists
                </div>}
        </div>
    );
};

export default Product;