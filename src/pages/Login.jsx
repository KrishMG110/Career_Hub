import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggleButton from "../components/ThemToggleButton";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const next = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!password) next.password = "Password is required.";
    if (Object.keys(next).length) return setErrors(next);
    const profile = JSON.parse(localStorage.getItem("userProfile") || "null");
    const savedEmail = profile?.email || localStorage.getItem("email");
    const savedPassword = profile?.password || localStorage.getItem("password");
    const isAdmin = email === "krishna@123gmail.com" && password === "krishna123";
    const deletedUsers = JSON.parse(localStorage.getItem("deletedUsers") || "[]");
    if (!isAdmin && deletedUsers.includes(email)) next.email = "This account has been deleted by the administrator.";
    if (!isAdmin && email !== savedEmail) next.email = "We couldn't find an account with this email.";
    if (!isAdmin && password !== savedPassword) next.password = "Incorrect password.";
    setErrors(next);
    if (Object.keys(next).length) return;
    localStorage.setItem("isLoggedIn", "true");
    if (!isAdmin) {
      localStorage.setItem("currentUserProfile", JSON.stringify(profile));
      const activeUsers = JSON.parse(localStorage.getItem("activeUsers") || "[]");
      if (!activeUsers.includes(email)) localStorage.setItem("activeUsers", JSON.stringify([...activeUsers, email]));
      localStorage.setItem("activeUserEmail", email);
    }
    setSuccess(isAdmin ? "Admin login successful." : "Login successful. Welcome back!");
    setTimeout(() => navigate(isAdmin ? "/admin" : "/home"), 650);
  };
  return <main className="auth-shell min-h-screen px-4 py-8"><div className="absolute right-4 top-4"><ThemeToggleButton /></div><section className="auth-card w-full max-w-md rounded-3xl p-7 shadow-2xl sm:p-9"><p className="text-sm font-semibold text-blue-600">CAREERHUB</p><h1 className="mt-1 text-3xl font-bold text-slate-900">Welcome back</h1><p className="mt-2 text-sm text-slate-500">Sign in to continue to your professional space.</p><form noValidate onSubmit={submitHandler} className="mt-7 space-y-4"><label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700">Email address</span><input className={`auth-input ${errors.email ? "border-red-400" : ""}`} type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: "" }); }} placeholder="you@example.com" /><span className="mt-1 block min-h-4 text-xs text-red-600">{errors.email}</span></label><label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700">Password</span><input className={`auth-input ${errors.password ? "border-red-400" : ""}`} type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: "" }); }} placeholder="Enter your password" /><span className="mt-1 block min-h-4 text-xs text-red-600">{errors.password}</span></label><button className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Sign in</button>{success && <p className="text-center text-sm font-medium text-emerald-600">{success}</p>}<p className="pt-2 text-center text-sm text-slate-600">New to CareerHub? <NavLink to="/signup" className="font-semibold text-blue-600 hover:underline">Create an account</NavLink></p></form></section></main>;
};
export default Login;
