// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// export const dynamic = 'force-dynamic'
// export default function AddInvoice() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [source, setSource] = useState("");
//   const [author, setAuthor] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     if (!title||!description||!source||!author) {
//       alert("All fields are required.");
//       return;
//     }

//     // Prepare the data to be sent
//     const data = {
//       title,
//       description,
//       source,
//       author
//     };

//     try {
//       // Send a POST request to add the invoice
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, {
//         method: "POST",
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         // If successful, redirect to homepage
//         router.push("/");
//       } else {
//         throw new Error("Failed to add blog.");
//       }
//     } catch (error) {
//       console.error("Error adding blog:", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 p-6">
//         <div className="col-span-1 sm:col-span-1">
//           <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Title Name</label>
//           <input
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//             type="text"
//             placeholder="Title Name"
//           />
//         </div>
//         <div className="col-span-1 sm:col-span-1">
//           <label htmlFor="description" className="block text-lg font-bold mb-1">Description</label>
//           <input
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//             type="text"
//             placeholder="Description"
//           />
//         </div>
//         <div className="col-span-1 sm:col-span-1">
//           <label htmlFor="serviceType" className="block text-lg font-bold mb-1">Source</label>
//           <input
//             onChange={(e) => setSource(e.target.value)}
//             value={source}
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//             type="text"
//             placeholder="Source"
//           />
//         </div>
//         <div className="col-span-1 sm:col-span-1">
//           <label htmlFor="address" className="block text-lg font-bold mb-1">Author</label>
//           <input
//             onChange={(e) => setAuthor(e.target.value)}
//             value={author}
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//             type="text"
//             placeholder="Author"
//           />
//         </div>
        
        
//         <button
//           type="submit"
//           className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full w-fit transition duration-300 ease-in-out"
//         >
//           Add your Blog
//         </button>
//       </form>
//     </>
//   );
// }


"use client"

import { useState } from "react"

import { useRouter } from "next/navigation";


export default function AddBlog() {
const[title, setTitle] = useState("")
const[description, setDescription] = useState("")
const[source, setSource] = useState("")
const[author, setAuthor] = useState("")

const router = useRouter()

const handleSubmit = async(e)=>{
e.preventDefault();

if (!title||!description||!source||!author) {
      alert("All fields are required.");
      return;
    }

    const data = {
        title,
        description,
        source,
        author
    }

    try {
        
      const res = 
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`,
   { method : "POST",
    headers: {"Content-type" : "application/json"},
    body: JSON.stringify(data)

    })
    if(res.ok){
        router.push("/")
    }

    else{
        throw new Error("Failed to add blog.")
    }

    } catch (error) {
        console.log("Failed to fetch blogs", error)
    }

}


return(
    <>
        <form onSubmit={handleSubmit}className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 p-6">
        <div className="col-span-1 sm:col-span-1">
    <label htmlFor="BlogTitle" className="block text-lg font-bold mb-1">Title Name</label>
    <input onChange={(e)=>setTitle(e.target.value)}
    value={title}
     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Title Name"/>
    </div>

    <div className="col-span-1 sm:col-span-1">
    <label htmlFor="BlogDescription" className="block text-lg font-bold mb-1">Title description</label>
    <input onChange={(e)=>setDescription(e.target.value)}
    value={description}
     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Description Name"/>
    </div>

    <div className="col-span-1 sm:col-span-1">
    <label htmlFor="BlogSource" className="block text-lg font-bold mb-1">Title source</label>
    <input onChange={(e)=>setSource(e.target.value)}
    value={source}
     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Source Name"/>
    </div>

    <div className="col-span-1 sm:col-span-1">
    <label htmlFor="BlogAuthor" className="block text-lg font-bold mb-1">Title author</label>
    <input onChange={(e)=>setAuthor(e.target.value)}
    value={author}
     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Author Name"/>
    </div>


        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full w-fit transition duration-300 ease-in-out"
        >
          Add your Blog
        </button>
        </form>
    </>
)


}