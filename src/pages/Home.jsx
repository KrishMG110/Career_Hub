import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Navbar from "../components/Navbar";
import Card from "./Card";
import LeftContent from "./LeftContent.jsx";
import { UserNameContext } from "../Context/UserNameContext";

const Home = () => {
  const { username } = useContext(UserNameContext);
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">WELCOME BACK</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              {username ? `Hello, ${username}` : "Welcome to CareerHub"}
            </h1>
          </div>
          <NavLink
            to="/profile"
            className="w-fit rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            View my profile
          </NavLink>
        </div>
        <section className="flex flex-col gap-5 lg:flex-row">
          <LeftContent />
          <Card />
        </section>
      </main>
    </div>
  );
};

export default Home;
