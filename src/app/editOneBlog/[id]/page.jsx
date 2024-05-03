//client side logi to edit a topic ; so we import EditTopicForm component and create the logic and send props to the comp

import EditBlogForm from "@/app/components/EditBlogForm";


export const dynamic = 'force-dynamic'
// const getInvoiceById = async (id) => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
//         cache: "no-store",
//       });
  
//       if (!res.ok) {
//         throw new Error("Failed to fetch invoice");
//       }
  
//       return res.json();
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  export default async function EditOneBlog({ params }) {
    const { id } = params;
//     
  
    return <EditBlogForm id={id} />
  }