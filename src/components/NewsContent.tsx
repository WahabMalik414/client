import React, { useState, useEffect } from "react";

interface NewsData {
 timestamp: string;
 username: string;
 content: string;
}

const News: React.FC = () => {
 const [newsData, setNewsData] = useState<NewsData[]>([]);
 const [currentNewsIndex, setCurrentNewsIndex] = useState<number>(0);

 // Fetch and set the news data from the server
 useEffect(() => {
  fetch('http://localhost:3001/news')
    .then(response => response.json())
    .then(data => {
      // Sort the posts by timestamp
      data.sort((a: NewsData, b: NewsData) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      setNewsData(data);
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
 }, []);

 const handleNextNews = () => {
  if (currentNewsIndex < newsData.length - 1) {
    setCurrentNewsIndex(currentNewsIndex + 1);
  }
 };

 const handlePrevNews = () => {
  if (currentNewsIndex > 0) {
    setCurrentNewsIndex(currentNewsIndex - 1);
  }
 };

 const handleNewNews = () => {
  // Implement this function to handle the creation of new news posts
 };

 return (
  <div className="flex flex-col items-center mt-5">
    {newsData.length > 0 && (
      <>
        <div className="border-2 border-black p-4 mb-4">
          <p className="font-bold text-xl">Creation Timestamp: {newsData[currentNewsIndex].timestamp}</p>
          <p className="font-bold text-xl">Username: {newsData[currentNewsIndex].username}</p>
          <div className="mt-4">{newsData[currentNewsIndex].content}</div>
        </div>
        <div className="flex justify-between">
          <button onClick={handlePrevNews}>Prev</button>
          <button onClick={handleNextNews}>Next</button>
        </div>
      </>
    )}
    <button className="bg-green-500 text-white p-2 mt-4" onClick={handleNewNews}>
      +
    </button>
  </div>
 );
};

export default News;