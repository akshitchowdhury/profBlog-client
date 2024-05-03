//client side logi to edit a topic ; so we import EditTopicForm component and create the logic and send props to the comp

import DisplayBlog from "@/app/components/DisplayBlog";


export const dynamic = 'force-dynamic'
// const getBlogbyId = async (id) => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/blogs/${id}`, {
//         cache: "no-store",
//       });
  
//       if (!res.ok) {
//         throw new Error("Failed to fetch blogs");
//       }
        
//       return res.json();
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  export default async function GetOneBlog({ params }) {
    const { id } = params;
    // const { blogs } = await getBlogbyId(id);
    // const { 
    //     title,
    //     description,
    //     source,
    //     author} = blogs;
  
    return <DisplayBlog id={id}  
/>;
  }

