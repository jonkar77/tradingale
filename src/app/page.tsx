"use client"
import React, { useState } from 'react';

interface PageProps {
    onSelect: (num: number) => void;
}

const Page: React.FC<PageProps> = ({ onSelect }) => {
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

    // Function to handle number selection
    const handleSelect = (num: number) => {
        setSelectedNumber(num);
        onSelect(num);
    };

    // Function to render number items
    const renderNumbers = () => {
        const numbers: JSX.Element[] = [];

        // Generate numbers from 1 to 10
        for (let i = 2000; i <= 2024; i++) {
            numbers.push(
                <div
                    key={i}
                    className={`number-item ${selectedNumber === i ? 'selected' : '   '}`}
                    onClick={() => handleSelect(i)}
                    style={{ marginRight: '10px' }}
                >
                    {i}
                </div>
            );
        }

        return numbers;
    };

    return (
        <div className='bg-offwhite h-[653px] flex items-center justify-center'>
            <div className='bg-white px-[660px] py-[300px] rounded-lg'>
                <div className="flex flex-row horizontal-number-picker">
                    {renderNumbers()}
                </div>
                {/* Content */}
                Landing
            </div>
        </div>
    );
};

export default Page;
