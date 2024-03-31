// pages/index.tsx (or any other relevant page)
import Head from 'next/head';
import FeedItem from '@/app/components/Feed/page';

interface SneakerData {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

const data: SneakerData[] = [
  { id: 1, name: 'Sneaker 1', imageUrl: '/sneaker1.jpg', description: 'Lorem ipsum dolor sit amet...' },
  // Add more data items as needed
];

const Home: React.FC = () => {
  return (
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item: SneakerData) => (
          <FeedItem key={item.id} data={item} />
        ))}
      </div>
  );
};

export default Home;
