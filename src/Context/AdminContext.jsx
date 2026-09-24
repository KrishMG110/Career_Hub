import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(()=>{
    const saved = localStorage.getItem("adminList");
    return saved ? JSON.parse(saved):[];
  });

  const addAdmin = (user,sign_email,mobile = "") => {
    const copyAdmin = [...admin,{user,sign_email,mobile}];
     localStorage.setItem("adminList",JSON.stringify(copyAdmin));
    setAdmin(copyAdmin);
   
     
  };
  const deleteAdmin = (idx)=>{
    const copyAdmin = [...admin];
    const deletedUser = copyAdmin.splice(idx,1)[0];
    setAdmin(copyAdmin);

    localStorage.setItem("adminList",JSON.stringify(copyAdmin));
    const activeUsers = JSON.parse(localStorage.getItem("activeUsers") || "[]");
    localStorage.setItem("activeUsers", JSON.stringify(activeUsers.filter((email) => email !== deletedUser?.sign_email)));
    const deletedUsers = JSON.parse(localStorage.getItem("deletedUsers") || "[]");
    localStorage.setItem("deletedUsers", JSON.stringify([...new Set([...deletedUsers, deletedUser?.sign_email])].filter(Boolean)));
    const currentProfile = JSON.parse(localStorage.getItem("currentUserProfile") || "null");
    if (currentProfile?.email === deletedUser?.sign_email) {
      localStorage.removeItem("currentUserProfile");
      localStorage.removeItem("userProfile");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("activeUserEmail");
      localStorage.removeItem("isLoggedIn");
    }
  }
  

  return (
    <AdminContext.Provider value={{addAdmin,admin,deleteAdmin}}>
      {children}
    </AdminContext.Provider>
  );
};
