import React, { useState, useEffect } from "react";

interface NewsData {
  timestamp: string;
  username: string;
  content: string;
}

const News = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState<number>(0);

  // Fetch and set the news data from the server
  useEffect(() => {
    // You need to implement the actual fetching logic here
    // For now, using a placeholder array
    const placeholderNewsData: NewsData[] = [
      {
        timestamp: "2024-01-01 12:34:56",
        username: "JohnDoe",
        content: "This is the content of the news post.",
      },
      // Add more news posts as needed
    ];

    setNewsData(placeholderNewsData);
  }, []);

  const handleNextNews = () => {
  };

  const handlePrevNews = () => {
  };

  const handleNewNews = () => {
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
