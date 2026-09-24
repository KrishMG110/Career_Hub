import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(()=>{
    const saved = localStorage.getItem("postList");
     return saved?JSON.parse(saved):[];
  });

  const addPost = (title, description,author) => {
    const copyPosts = [...posts,{id: crypto.randomUUID(), title,description,author,createdAt: new Date().toISOString()}];
     localStorage.setItem("postList",JSON.stringify(copyPosts))
    setPosts(copyPosts);
   
     
  };
  const deletePost = (idx)=>{
    
    const copyPosts = [...posts];
    copyPosts.splice(idx,1)
    setPosts(copyPosts);
localStorage.setItem("postList",JSON.stringify(copyPosts));
    
   
   
  }
  

  return (
    <PostContext.Provider value={{ posts, addPost,deletePost, }}>
      {children}
    </PostContext.Provider>
  );
};
