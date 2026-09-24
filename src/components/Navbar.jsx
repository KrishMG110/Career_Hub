import Linkdin from "../assets/LinkedIn Logo.jpeg";
import { NavLink } from "react-router-dom";
import ThemeToggleButton from "./ThemToggleButton";

const Navbar = () => {
 
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:bg-slate-900/85">
    <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
      <NavLink to="/home" className="flex shrink-0 items-center gap-1.5">
        <h1 className="text-xl font-semibold sm:text-2xl">Career<span className="text-blue-600"><i>Hub</i></span></h1>
        <img className="h-8 w-8 rounded-lg object-cover sm:h-9 sm:w-9" src={Linkdin} alt="CareerHub" />
      </NavLink>
        

          
      <nav className="flex items-center gap-3 overflow-x-auto text-sm font-medium capitalize sm:gap-5 sm:text-base">
        <NavLink
          to="/home"
           className={({isActive})=>
        ` border-b-2 ${isActive?" border-red-500":"border-transparent"} cursor-pointer`}
        >
          home
        </NavLink>
        <NavLink
          to="/posts"
          className={({isActive})=>
        ` border-b-2 ${isActive?" border-red-500":"border-transparent"} cursor-pointer`}
        >
          Posts
        </NavLink>
        <NavLink
          to="/profile"
          className={({isActive})=>
        ` border-b-2 ${isActive?" border-red-500":"border-transparent"} cursor-pointer`}
        >
          Profile
        </NavLink>
        <NavLink
          to="/jobs"
         className={({isActive})=>
        ` border-b-2 ${isActive?" border-red-500":"border-transparent"} cursor-pointer`}
        >
          Jobs
        </NavLink>

        <NavLink
          to="/feed"
          className={({isActive})=>
        ` border-b-2 ${isActive?" border-red-500":"border-transparent"} cursor-pointer`}
        >
        
          Feed
        </NavLink>

        <NavLink
          to="/login"
            className={({isActive})=>
        ` border-b-2 ${isActive?" border-red-500":"border-transparent"} cursor-pointer`}
        >
        
          Login
        </NavLink>
        
        <ThemeToggleButton />
      </nav>
    </div>
    </header>
  );
};

export default Navbar;
