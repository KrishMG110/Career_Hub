import { useContext, useState } from "react";
import { PostContext } from "../Context/PostContext";
import Navbar from "../components/Navbar";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notice, setNotice] = useState("");
  const { addPost } = useContext(PostContext);
  const profile = JSON.parse(localStorage.getItem("userProfile") || "null");
  const author = profile?.fullName || "Krishna Ghanokar";
  const submitHandler = (event) => {
    event.preventDefault();
    if (title.trim().length < 3 || description.trim().length < 10) return setNotice("Add a title and at least 10 characters to your post.");
    addPost(title.trim(), description.trim(), author);
    setTitle(""); setDescription(""); setNotice("Post published successfully.");
  };
  return <div className="min-h-screen bg-slate-50"><Navbar /><main className="mx-auto max-w-3xl px-4 py-7 sm:py-10"><div className="mb-6"><p className="text-sm font-semibold text-blue-600">SHARE WITH YOUR NETWORK</p><h1 className="mt-1 text-3xl font-bold text-slate-900">Create a post</h1><p className="mt-2 text-sm text-slate-500">Share an update, achievement, or an idea with your connections.</p></div><section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center gap-3 border-b border-slate-100 p-5"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">{author.charAt(0)}</div><div><p className="font-semibold text-slate-800">{author}</p><p className="text-xs text-slate-500"><i className="ri-global-line" /> Anyone</p></div></div><form onSubmit={submitHandler} className="p-5 sm:p-6"><label className="block"><span className="mb-2 block text-sm font-medium text-slate-700">Post title</span><input className="post-input" value={title} onChange={(e) => { setTitle(e.target.value); setNotice(""); }} maxLength="90" placeholder="What would you like to talk about?" /></label><label className="mt-5 block"><span className="mb-2 block text-sm font-medium text-slate-700">Your post</span><textarea className="post-input min-h-44 resize-y" value={description} onChange={(e) => { setDescription(e.target.value); setNotice(""); }} maxLength="1500" placeholder="Write your thoughts here…" /><span className="mt-1 block text-right text-xs text-slate-400">{description.length}/1500</span></label><div className="mt-4 flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between"><p className={`text-sm ${notice.includes("success") ? "text-emerald-600" : "text-red-600"}`}>{notice}</p><button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"><i className="ri-send-plane-fill mr-1" /> Publish post</button></div></form></section></main></div>;
};
export default Posts;
