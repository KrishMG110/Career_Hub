import { createContext, useState } from "react";



 export const UserNameContext = createContext();
 export const UserNameProvider = ({children})=>{
    const [username, setUsername] = useState(()=> localStorage.getItem("userName")||"");

 const usedUserName = (user)=>{
   localStorage.setItem("userName",user);
   setUsername(user);
   
   
   
  
 }
 return (
     <UserNameContext.Provider value={{username,usedUserName,}}>
        {children}
      
     </UserNameContext.Provider>
   );
 }

