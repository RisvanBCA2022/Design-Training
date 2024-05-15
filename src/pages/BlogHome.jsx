import React from "react";
import CardsList from "../components/Cards/CardsList";

const BlogHome = () => {
  const blogs = [
    {
      title: "Nodejs is a Runtime Enviornment",
      thumbnail:
        "https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png",
      body: "Nodejs is a Runtime enviornment not a framework",
      category: "Nodejs",
    },
    {
      title: "Nodejs is a Runtime Enviornment",
      thumbnail:
        "https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png",
      body: "Nodejs is a Runtime enviornment not a framework",
      category: "Nodejs",
    },
    {
      title: "Nodejs is a Runtime Enviornment",
      thumbnail:
        "https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png",
      body: "Nodejs is a Runtime enviornment not a framework",
      category: "Nodejs",
    },
    {
      title: "Nodejs is a Runtime Enviornment",
      thumbnail:
        "https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png",
      body: "Nodejs is a Runtime enviornment not a framework",
      category: "Nodejs",
    },
  ];
  return (
    
    <div className="lg:mx-28">
      <h1 className="md:text-4xl sm:text-2xl lg:text-6xl text-center p-14">
        <hr></hr>
        <span className="m-10 font-semibold">SCRIBEWAY BLOGS</span>
        <hr></hr>
      </h1>
      <h3 className="text-center lg:text-start lg:px-14">Recent Blog Posts</h3>
      <div className="flex flex-col items-center lg:flex lg:flex-row gap-5 h-full lg:px-14 ">
        <div className="w-[75%] lg:w-1/2 object-cover h-full rounded-sm border-2 p-4">
          <img src={blogs[0].thumbnail} className="object-cover w-full h-full lg:h-[40vh] lg:object-contain" />
          <p className="text-[#6941C6]">sunday, 1 Jan 2023</p>
          <h3 className="font-semibold ">{blogs[0].title}</h3>
          <button className="bg-[#ECFDF3] text-[#027A48] rounded-lg p-2 text-sm font-semibold">{blogs[0].category}</button>
        </div>
        <div className="lg:w-1/2 lg:h-full w-[75%] flex flex-col gap-5 lg:gap-0">
          <div className="border-2 flex flex-col lg:flex-row p-3">
            <img
              src={blogs[1].thumbnail}
              className="object-cover w-full lg:w-1/2 h-full"
              alt="thumbnail"
            />
            <div className="p-4">
              <p className="text-[#6941C6]">sunday, 1 Jan 2023</p>
              <h3 className="font-semibold pt-2 line-clamp-1">
                {blogs[1].title}
              </h3>
              <p className="line-clamp-3 text-gray-700 text-sm">
                {blogs[1].body}
              </p>
              <button className="bg-[#ECFDF3] text-[#027A48] rounded-lg p-2 text-sm font-semibold">{blogs[1].category}</button>
            </div>
          </div>
          <div className="border-2 flex flex-col lg:flex-row p-3">
            <img
              src={blogs[2].thumbnail}
              className="object-cover w-full lg:w-1/2 h-full"
              alt="thumbnail"
            />
            <div className="p-4">
              <p className="text-[#6941C6]">sunday, 1 Jan 2023</p>
              <h3 className="font-semibold pt-2 line-clamp-1">
                {blogs[2].title}
              </h3>
              <p className="line-clamp-3 text-gray-700 text-sm">
                {blogs[2].body}
              </p>
              <button className="bg-[#ECFDF3] text-[#027A48] rounded-lg p-2 text-sm font-semibold">{blogs[2].category}</button>

            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-14 w-full flex flex-col items-center lg:px-14 mt-4">
      <div className="border-2 flex flex-col w-[75%] items-center lg:flex-row p-3 mb-10">
            <img
              src={blogs[1].thumbnail}
              className="object-cover w-full lg:w-1/2 h-full"
              alt="thumbnail"
            />
            <div className="p-4 w-full">
              <p className="text-[#6941C6]">sunday, 1 Jan 2023</p>
              <h3 className="font-semibold pt-2 line-clamp-1">
                {blogs[1].title}
              </h3>
              <p className="line-clamp-3 text-gray-700 text-sm">
                {blogs[1].body}
              </p>
              <button className="bg-[#ECFDF3] text-[#027A48] rounded-lg p-2 text-sm font-semibold">{blogs[1].category}</button>
            </div>
          </div>
      </div>
      <div>
        <CardsList />
      </div>
    </div>
  );
};

export default BlogHome;
