import React from "react";

const Card = ({ slug, title, author, date, description }) => {
  return (
    <div className="max-w-md bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="text-gray-700 text-sm mb-4">
          <span>
            By <span className="font-semibold">{author} </span>
          </span>
          | <span>Date: {date}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={`/blogs/${slug}`}
          className=" text-indigo-500 hover:text-indigo-600 font-semibold h-full"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
