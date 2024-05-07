// src/components/ImagePicker.tsx
'use client';

import React, { useRef, useState } from 'react';
import axios from 'axios';

const Notes = ({ open, toggler }) => {


    const handleCancel = () => {
        setImageUrl(''); // Reset image state to null
        setDescription('');
        toggler();
    };

    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [description, setDescription] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
        }
    };

    const handleUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', fileInputRef.current?.files?.[0] as File);
        formData.append('description', description);

        fetch('/api/users/post', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    console.log('File uploaded successfully');
                } else {
                    console.error('Failed to upload file');
                }
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    };

    return (
        <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center ${open ? 'block' : 'hidden'}`}>
            <div className="bg-white p-4 rounded-lg modal-container">
                {/* Notes modal content */}
                <h2 className="text-lg font-semibold mb-2">Write Notes</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                    <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">
                        Select Image
                        <input
                            id="fileInput"
                            type="file"
                            accept='image/*'
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="sr-only"
                        />
                    </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    />
                    
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





// const [imageUrl, setImageUrl] = useState<string | null>(null);
// const [description, setDescription] = useState<string>('');
// const fileInputRef = useRef<HTMLInputElement>(null);

// const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//         const imageUrl = URL.createObjectURL(file);
//         setImageUrl(imageUrl);
//     }
// };

// const handleUpload = () => {
//     if (fileInputRef.current) {
//         fileInputRef.current.click();
//     }
// };

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('file', fileInputRef.current?.files?.[0] as File);
//     formData.append('description', description);

//     fetch('/api/users/post', {
//         method: 'POST',
//         body: formData,
//     })
//         .then(response => {
//             if (response.ok) {
//                 console.log('File uploaded successfully');
//             } else {
//                 console.error('Failed to upload file');
//             }
//         })
//         .catch(error => {
//             console.error('Error uploading file:', error);
//         });
// };