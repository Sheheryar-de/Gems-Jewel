import React from "react";

const Card = ({
  src,
  name,
  amount,
  text,
  rating,
  className,
  maxStars = 5,
  isTrue,
}) => {
  return (
    <>
      <div className={`w-80 h-max rounded-lg mb-10 shadow-sm overflow-hidden`}>
        <div
          href="#"
          className="w-[100%] h-[400px] overflow-hidden cursor-pointer"
        >
          <img className={className} src={src} alt="product image" />
        </div>
        <div className="mt-1 p-2">
          <a href="#">
            <h5
              className={`${text} text-lg font-semibold tracking-tight text-gray-900`}
            >
              {name}
            </h5>
          </a>
          {isTrue !== true ? (
            ""
          ) : (
            <>
              <div className="flex items-center mt-2.5">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: maxStars }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-4 h-4 ${
                        index < rating ? "text-yellow-300" : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {rating.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-[17px] italic antialiased font-semibold text-gray-900">
                  {amount}
                </span>

                <button
                  href="#"
                  className="bg-amber-400 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add to cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
