import React, { useState } from 'react';
import axios from 'axios';

const Notes = ({ open, toggler }) => {
    const [image, setImage] = useState(null); // Initialize image state as null
    const [description, setDescription] = useState('');

    const handleCancel = () => {
        setImage(null); // Reset image state to null
        setDescription('');
        toggler();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {image, description};
        console.log(formData);
        

        try {
            const res = await axios.post('http://localhost:3000/api/users/post', formData);
            console.log(res);
            if (res.status === 200) {
                console.log('Yeai!');
            } else {
                console.log('Oops! Something is wrong.');
            }
        } catch (error) {
            console.log(error);
        }

        toggler();
    };

    return (
        <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center ${open ? 'block' : 'hidden'}`}>
            <div className="bg-white p-4 rounded-lg modal-container">
                {/* Notes modal content */}
                <h2 className="text-lg font-semibold mb-2">Write Notes</h2>
                <form onSubmit={handleSubmit}>
                    {/* Upload Image Field */}
                    <input
                        type="file"
                        className="mb-2"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    {/* Description Field */}
                    <textarea
                        className="w-full h-24 border border-gray-300 rounded-md p-2 mb-2"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {/* Buttons */}
                    <div className="flex justify-end">
                        <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-md mr-2">
                            Submit
                        </button>
                        <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Notes;
