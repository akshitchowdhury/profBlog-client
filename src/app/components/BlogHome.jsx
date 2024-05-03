"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import RemoveBtn from './RemoveBtn';
import EditBlogForm from './EditBlogForm';

const getBlogs = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        const blogFlow = await res.json();
        return blogFlow.blogs;
    } catch (error) {
        throw new Error("Error loading blogs", error);
    }
};

const BlogHome = () => {
    const [blogList, setBlogList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedBlogs = await getBlogs();
                setBlogList(fetchedBlogs);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {blogList.map((blog, index) => (
                    <div key={index} className='bg-white p-4 rounded-lg shadow-lg'>
                        <Link href={`/getOneBlog/${blog._id}`}>
                            <h2 className='text-xl font-semibold'>{blog.title}</h2>
                            <p className='text-gray-700'>{blog.description}</p>
                        </Link>
                        <div className='flex justify-between mt-4'>
                            <RemoveBtn id={blog._id} className='deleteBlog btn'>
                                Delete Blog
                            </RemoveBtn>
                            <Link href={`/editOneBlog/${blog._id}`} className='editBlog border-sky-400
                            bg-sky-500 hover:bg-violet-600 transition ease-in-out p-6
                            duration-300 rounded-md text-white'>
                                Edit Blog
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-8'>
            <Link
    className='addBlog bg-blue-500 hover:bg-blue-700
     text-white font-bold py-4 px-4 mx-4 rounded block w-1/6 text-center mt-4'
    href={'/addBlog'}>
    Add Blog
</Link>

<p className='font-semibold text-3xl
text-slate-800'>Total number of blogs : {blogList.length}</p>

            </div>
        </>
    );
};

export default BlogHome;
