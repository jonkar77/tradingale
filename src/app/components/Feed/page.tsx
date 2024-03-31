import React from "react";

interface FeedItemProps {
  data: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
  };
}

const FeedItem: React.FC<FeedItemProps> = ({ data }) => {
  const { id, name, imageUrl, description } = data;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-700">{description}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Details</button>
      </div>
    </div>
  );
};

export default FeedItem;
