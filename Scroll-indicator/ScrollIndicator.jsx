import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  console.log(data, loading);

  return (
    <>
      {/* Top Container */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50 border border-yellow-500">
        {/* Scroll Progress Bar */}
        <div
          className="h-full bg-blue-500 border border-red-600 "
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center py-10 gap-5">
        <h1 className="text-4xl font-bold">Custom Scroll Indicator</h1>

        <div className="border border-black p-5 w-full max-w-2xl">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error fetching data.</p>
          ) : (
            data &&
            data.length > 0 &&
            data.map((dataItem, index) => (
              <p key={index} className="text-lg text-gray-700">
                {dataItem.title}
              </p>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
