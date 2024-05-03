
"use client";

import React, { useEffect, useState } from "react";


const DisplayBlog = ({ id }) => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);



  // Prepare the data to be sent
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/blogs/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();
        console.log(data)
        
        setBlogs(data.blogs);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogs) {
    return <div>Blog not found</div>;
  }

  // Destructuring the invoice object
  const {
    title,
        description,
        source,
        author
  } = blogs;

  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Blog Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="mb-2">
            <span className="font-bold">Title:</span> {title}
          </p>
          <p className="mb-2">
            <span className="font-bold">description:</span> {description}
          </p>
          <p className="mb-2">
            <span className="font-bold">Source:</span> {source}
          </p>
          <p className="mb-2">
            <span className="font-bold">Author:</span> {author}
          </p>
          {/* <p>
         PF dowloaded:  {pfCount} times
        </p> */}
        </div>
      </div>
      <br />


    </div>
  );
};

export default DisplayBlog;
