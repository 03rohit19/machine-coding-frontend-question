import React, { useEffect, useState } from "react";

// Fetch product data based on the current page
const fetchProduct = async (page, setProductData, setPages) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
  );
  const data = await res.json();

  if (data && data.products) {
    setProductData(data.products); // Set the product data from the API response
    setPages(Math.ceil(data.total / 10)); // Set total pages in the Pages state
  }
};

const Pagination = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [Pages, setPages] = useState(0); // State for total pages

  // Fetch product data whenever the `page` changes
  useEffect(() => {
    fetchProduct(page, setProductData, setPages); // Pass page, setProductData, and setPages to fetchProduct
  }, [page]); // Re-fetch data when page changes

  const handlePagination = (selectedPage) => {
    setPage(selectedPage); // Set the selected page
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1); // Go to previous page if greater than 1
    }
  };

  const handleNextPage = () => {
    if (page < Pages) {
      setPage(page + 1); // Go to next page if less than total pages
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl mt-4 font-bold">Product Pagination</h1>
      </div>
      <div className="product-container max-w-6xl mx-auto border border-black mt-5 p-4">
        {productData?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:md:grid-cols-3 gap-6">
            {productData.map((product) => {
              return (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-lg flex flex-col items-center cursor-pointer"
                >
                  <img
                    src={product?.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-center font-semibold">{product.title}</p>
                  <p className="text-gray-600 mt-2">${product.price}</p>
                </div>
              );
            })}
          </div>
        )}
        {productData?.length > 0 && (
          <div className="pagination mt-5 flex justify-center items-center p-8">
            {/* Hide the Previous button when on the first page */}
            {page > 1 && (
              <span
                className="border border-gray-400 p-4 cursor-pointer"
                onClick={handlePreviousPage}
              >
                👈
              </span>
            )}

            {/* Render page numbers based on Pages state */}
            {[...Array(Pages)].map((_, i) => {
              return (
                <span
                  key={i} // Adding key to prevent warnings
                  className={
                    page === i + 1
                      ? "border border-gray-400 bg-slate-300 p-4 cursor-pointer"
                      : "border border-gray-400 p-4 cursor-pointer"
                  }
                  onClick={() => {
                    handlePagination(i + 1);
                  }}
                >
                  {i + 1}
                </span>
              );
            })}

            {/* Hide the Next button when on the last page */}
            {page < Pages && (
              <span
                className="border border-gray-400 p-4 cursor-pointer"
                onClick={handleNextPage}
              >
                👉
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Pagination;
