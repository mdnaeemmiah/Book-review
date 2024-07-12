
import { deleteBlog, getBlogs } from "../Utility";
import Single from "./Single";
import { useEffect, useState } from "react";


  

const ReadBooks = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
            const storedBlogs = getBlogs()
            setBlogs(storedBlogs);
    },[])

    const handleDelete =id=>{
        deleteBlog(id);
        const storedBlogs = getBlogs()
            setBlogs(storedBlogs);
      }
    
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
            blogs.map(blog=><Single handleDele={handleDelete}  key={blog.id} blog={blog}></Single>)
        }
        
    </div>
    );
};

export default ReadBooks;