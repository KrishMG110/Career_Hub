import { useContext } from "react";
import { PostContext } from "../Context/PostContext";
import AdminNav from "../components/AdminNav";

const UserPosts = () => {
  const { posts, deletePost } = useContext(PostContext);
  return <div className="min-h-screen bg-slate-50"><AdminNav /><main className="mx-auto max-w-6xl px-4 py-7 sm:px-6"><p className="text-sm font-semibold text-blue-600">ADMIN DASHBOARD</p><h1 className="mt-1 text-3xl font-bold text-slate-900">Community posts</h1><p className="mt-2 text-sm text-slate-500">Review and remove posts from the platform.</p><div className="mt-6 grid gap-4 md:grid-cols-2">{posts.length === 0 ? <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 md:col-span-2">No posts created yet.</div> : posts.map((post, index) => <article key={post.id || index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><div><p className="font-semibold text-slate-800">{post.author}</p><p className="text-xs text-slate-500">{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Earlier post"}</p></div><button onClick={() => { if (window.confirm("Delete this post?")) deletePost(index); }} className="rounded-lg p-2 text-red-600 hover:bg-red-50" aria-label="Delete post"><i className="ri-delete-bin-6-line" /></button></div><h2 className="mt-4 font-semibold text-slate-900">{post.title}</h2><p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-600">{post.description}</p></article>)}</div></main></div>;
};
export default UserPosts;
