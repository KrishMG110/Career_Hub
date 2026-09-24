import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import krishna from "../assets/krishna.jpeg";
import { AdminContext } from "../Context/AdminContext";
import { PostContext } from "../Context/PostContext";

const Profile = () => {
  const { admin } = useContext(AdminContext);
  const { posts } = useContext(PostContext);
  const navigate = useNavigate();
  const profile = useMemo(() => JSON.parse(localStorage.getItem("currentUserProfile") || localStorage.getItem("userProfile") || "null"), []);
  const name = profile?.fullName || admin.at(-1)?.user || "Your name";
  const skills = profile?.technologies?.split(",").map((skill) => skill.trim()).filter(Boolean) || [];
  const userPosts = posts.filter((post) => post.author === name).length;

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== "deletedUsers" || !profile?.email) return;
      if (JSON.parse(event.newValue || "[]").includes(profile.email)) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUserProfile");
        navigate("/login");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [navigate, profile?.email]);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    const activeEmail = localStorage.getItem("activeUserEmail");
    localStorage.setItem("activeUsers", JSON.stringify(JSON.parse(localStorage.getItem("activeUsers") || "[]").filter((email) => email !== activeEmail)));
    localStorage.removeItem("activeUserEmail");
    navigate("/login");
  };

  return <div className="min-h-screen bg-slate-100"><Navbar /><main className="mx-auto max-w-6xl px-3 py-5 sm:px-5 sm:py-7"><div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]"><div className="min-w-0"><section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="h-28 bg-[linear-gradient(115deg,#0a66c2,#227bd5_45%,#51b9e8)] sm:h-40" /><div className="relative px-5 pb-6 sm:px-7"><img className="-mt-14 h-28 w-28 rounded-full border-4 border-white object-cover shadow-md sm:-mt-16 sm:h-32 sm:w-32" src={krishna} alt={`${name}'s profile`} /><div className="absolute right-4 top-4 flex gap-2"><button onClick={logout} className="rounded-full border border-red-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 sm:text-sm">Log out</button></div><div className="mt-3"><div className="flex flex-wrap items-center gap-2"><h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{name}</h1><i className="ri-verified-badge-fill text-xl text-blue-600" title="Verified profile" /></div><p className="mt-1 text-sm text-slate-700 sm:text-base">{profile?.headline || "Add your professional headline"}</p><p className="mt-2 text-sm text-slate-500">{profile?.location || "Add your location"} · <span className="font-medium text-blue-700">{profile?.email || "Add your email"}</span></p><p className="mt-2 text-sm font-semibold text-blue-700">43 connections</p></div><div className="mt-5 flex flex-wrap gap-2"><button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Open to</button><button className="rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">Add profile section</button><button className="rounded-full border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">More</button></div></div></section><section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold text-slate-900">About</h2><i className="ri-pencil-line text-slate-500" /></div><p className="mt-4 text-sm leading-6 text-slate-600">{profile?.about || "Complete your profile during signup to share your story with your network."}</p></section><section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold text-slate-900">Skills</h2><i className="ri-add-line text-xl text-slate-500" /></div><div className="mt-4 flex flex-wrap gap-2">{skills.length ? skills.map((skill) => <span key={skill} className="rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">{skill}</span>) : <p className="text-sm text-slate-500">Add technologies during signup.</p>}</div></section><section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold text-slate-900">Education</h2><i className="ri-pencil-line text-slate-500" /></div><div className="mt-4 flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xl text-blue-700"><i className="ri-graduation-cap-line" /></div><div><h3 className="font-semibold text-slate-800">{profile?.education || "Add your education during signup"}</h3><p className="mt-1 text-sm text-slate-500">CareerHub member</p></div></div></section></div><aside className="space-y-5"><section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold text-slate-900">Profile analytics</h2><p className="mt-1 text-xs text-slate-500">Private to you</p><div className="mt-4 space-y-4"><div className="flex items-center gap-3"><i className="ri-eye-line text-lg text-slate-500" /><p className="text-sm text-slate-600"><strong className="block text-slate-900">0 profile views</strong>Discover who’s viewed your profile.</p></div><div className="flex items-center gap-3"><i className="ri-bar-chart-2-line text-lg text-slate-500" /><p className="text-sm text-slate-600"><strong className="block text-slate-900">{userPosts} posts created</strong>Keep sharing with your network.</p></div></div></section><section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-semibold text-slate-900">Contact info</h2><div className="mt-4 space-y-3 text-sm"><p><span className="block text-xs text-slate-500">Email</span><span className="break-all text-blue-700">{profile?.email || "—"}</span></p><p><span className="block text-xs text-slate-500">Mobile</span><span className="text-slate-700">{profile?.mobile || "—"}</span></p><p><span className="block text-xs text-slate-500">Username</span><span className="text-slate-700">@{profile?.username || "—"}</span></p></div></section></aside></div></main></div>;
};

export default Profile;
