import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        // Append new data to existing data
        setData((prevData) => [...prevData, ...result.products]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []); // Fetch initial products on mount

  // Log the updated data properly
  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data && data.length
          ? data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-center text-lg font-semibold mt-2">
                  {item.title}
                </p>
                <p className="text-center text-lg font-semibold mt-2">
                  {item.id}
                </p>
              </div>
            ))
          : null}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Load more Products
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;
