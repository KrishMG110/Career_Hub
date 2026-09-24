import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserNameContext } from "../Context/UserNameContext";
import { AdminContext } from "../Context/AdminContext";
import ThemeToggleButton from "../components/ThemToggleButton";

const emptyForm = { fullName: "", username: "", email: "", mobile: "", location: "", headline: "", technologies: "", education: "", about: "", password: "", confirmPassword: "" };

const Signup = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { usedUserName } = useContext(UserNameContext);
  const { addAdmin } = useContext(AdminContext);

  const validate = (values) => {
    const next = {};
    if (values.fullName.trim().length < 2) next.fullName = "Enter your full name.";
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(values.username)) next.username = "Use 3–20 letters, numbers, or underscores.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!/^\d{10}$/.test(values.mobile.replace(/\s|-/g, ""))) next.mobile = "Enter a valid 10-digit mobile number.";
    if (values.location.trim().length < 2) next.location = "Add your city or location.";
    if (values.headline.trim().length < 3) next.headline = "Add a short professional headline.";
    if (values.technologies.trim().length < 2) next.technologies = "Add at least one technology or skill.";
    if (values.education.trim().length < 3) next.education = "Add your education or qualification.";
    if (values.about.trim().length < 10) next.about = "Write at least 10 characters about yourself.";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) next.password = "Use 8+ characters with upper, lower, number, and symbol.";
    if (values.password !== values.confirmPassword) next.confirmPassword = "Passwords do not match.";
    return next;
  };

  const updateField = (field, value) => {
    const next = { ...form, [field]: value };
    setForm(next);
    setErrors(validate(next));
    setSuccess("");
  };

  const formHandler = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const profile = { ...form, mobile: form.mobile.replace(/\s|-/g, "") };
    delete profile.confirmPassword;
    localStorage.setItem("userProfile", JSON.stringify(profile));
    localStorage.setItem("currentUserProfile", JSON.stringify(profile));
    localStorage.setItem("email", profile.email);
    localStorage.setItem("password", profile.password);
    const deletedUsers = JSON.parse(localStorage.getItem("deletedUsers") || "[]");
    localStorage.setItem("deletedUsers", JSON.stringify(deletedUsers.filter((email) => email !== profile.email)));
    usedUserName(profile.username);
    addAdmin(profile.username, profile.email, profile.mobile);
    setSuccess("Your profile has been created. Redirecting to login…");
    setTimeout(() => navigate("/login"), 900);
  };

  const fields = [["fullName", "Full name", "text", "Your full name"], ["username", "Username", "text", "e.g. alex_dev"], ["email", "Email address", "email", "you@example.com"], ["mobile", "Mobile number", "tel", "10-digit mobile number"], ["location", "Location", "text", "City, Country"], ["headline", "Professional headline", "text", "e.g. Frontend developer"], ["technologies", "Technologies", "text", "e.g. React, JavaScript, Node.js"], ["education", "Education", "text", "e.g. BCA, University name"], ["about", "About you", "text", "Tell your network about yourself"], ["password", "Password", "password", "Create a strong password"], ["confirmPassword", "Confirm password", "password", "Repeat your password"]];

  return <main className="auth-shell min-h-screen px-4 py-8 sm:px-6"><div className="absolute right-4 top-4"><ThemeToggleButton /></div><section className="auth-card w-full max-w-2xl rounded-3xl p-6 shadow-2xl sm:p-9"><div className="mb-7"><p className="text-sm font-semibold text-blue-600">CAREERHUB</p><h1 className="mt-1 text-3xl font-bold text-slate-900">Create your profile</h1><p className="mt-2 text-sm text-slate-500">Add your details to start building your professional network.</p></div><form onSubmit={formHandler} noValidate className="grid gap-x-5 sm:grid-cols-2">{fields.map(([name, label, type, placeholder]) => <label key={name} className={`mb-4 block ${["headline", "technologies", "education", "about"].includes(name) ? "sm:col-span-2" : ""}`}><span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span><input value={form[name]} onChange={(event) => updateField(name, event.target.value)} type={type} inputMode={name === "mobile" ? "numeric" : undefined} placeholder={placeholder} className={`auth-input ${errors[name] ? "border-red-400 ring-1 ring-red-100" : ""}`} /><span className="mt-1 block min-h-4 text-xs text-red-600">{errors[name]}</span></label>)}<div className="sm:col-span-2"><button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Create account</button>{success && <p className="mt-3 text-center text-sm font-medium text-emerald-600">{success}</p>}<p className="mt-5 text-center text-sm text-slate-600">Already have an account? <NavLink to="/login" className="font-semibold text-blue-600 hover:underline">Sign in</NavLink></p></div></form></section></main>;
};

export default Signup;
