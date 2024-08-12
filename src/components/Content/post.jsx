import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sort, setSort] = useState('-published_at');
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, [currentPage, itemsPerPage, sort]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
        params: {
          'page[number]': currentPage,
          'page[size]': itemsPerPage,
          'sort': sort,
          'append': ['small_image', 'medium_image']
        }
      });
      setPosts(response.data.data.slice(0, 100));
      setTotalItems(Math.min(response.data.meta.total, 100));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.min(Math.ceil(totalItems / itemsPerPage), 5);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div className="flex justify-between mb-10">
        <div>
          <span className="text-sm">Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}</span>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 rounded-lg px-2 py-1"
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={50}>50 per page</option>
          </select>
          <select
            value={sort}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-lg px-2 py-1"
          >
            <option value="-published_at">Newest first</option>
            <option value="published_at">Oldest first</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {posts.map(post => (
          <div key={post.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg transition-transform transform hover:scale-105">
            <img
              src={post.medium_image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-t-lg"
              loading="lazy"
            />
            <p className="text-xs text-gray-500">{formatDate(post.published_at)}</p>
            <h3 className="text-lg font-bold mt-1">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{post.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-10 mt-10">
        <nav aria-label="Page navigation">
          <ul className="flex items-center space-x-1 text-sm md:text-base">
            {/* Previous Page Button */}
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex items-center justify-center px-3 h-8 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-primary hover:text-white dark:bg-primary dark:text-white dark:hover:bg-primary dark:hover:text-white"
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 md:w-3 md:h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>

            {/* Page Number Buttons */}
            {[...Array(totalPages).keys()].map(page => (
              <li key={page + 1}>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  aria-current={page + 1 === currentPage ? 'page' : undefined}
                  className={`flex items-center justify-center px-3 h-8 md:h-10 leading-tight ${
                    page + 1 === currentPage
                      ? 'text-white bg-primary hover:bg-primary'
                      : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                  }`}
                >
                  {page + 1}
                </button>
              </li>
            ))}

            {/* Next Page Button */}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex items-center justify-center px-3 h-8 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 md:w-3 md:h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Post;
