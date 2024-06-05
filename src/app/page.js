import Image from "next/image";
import Link from "next/link";

import kid from "../../public/images/kid.jpg";

export default function Home() {
  return (
    <div className="container mx-auto flex-col items-center mt-20 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">Fill your mind with goofy blogs</h1>
        <p className="text-xl mt-5 font-semibold">
          Here you can find the most stupid blogs
        </p>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row justify-center">
        <Link href="/about">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Get to Know Me
          </button>
        </Link>
        <Link href="/blogs">
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            View Blogs
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-5">
        <Image
          className="rounded-xl max-w-full h-auto"
          src={kid}
          alt="photo of kid"
        />
      </div>
    </div>
  );
}
