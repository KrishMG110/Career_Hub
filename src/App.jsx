import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Posts from "./pages/Posts.jsx";
import Feed from "./Feed.jsx";
import Signup from "./pages/Signup.jsx";
import { PostProvider } from "./Context/PostContext";
import { ThemeProvider } from "./Context/ThemContext.jsx";
import { UserNameProvider } from "./Context/UserNameContext.jsx";
import Admin from "./pages/Admin.jsx";
import { AdminProvider } from "./Context/AdminContext.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import UserPosts from "./pages/UserPosts.jsx";
import { JobProvider } from "./Context/JobContext.jsx";
const App = () => {
 
  return (
    <>
 <UserNameProvider>
  <ThemeProvider>
    <PostProvider>
      <AdminProvider>
      <JobProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/admin" element={<Admin />} />
          <Route path="/user-detail" element={<UserDetails />} />
           <Route path="/user-posts" element={<UserPosts />} />


      </Routes>
      </JobProvider>
      </AdminProvider>
      </PostProvider>
      </ThemeProvider>
      </UserNameProvider>
     
     
    </>
  );
};

export default App;
