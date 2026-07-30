import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, User, Eye, EyeOff, ArrowRight, TrendingUp } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(email || "you@example.com");
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-16">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-10 justify-center">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)] flex items-center justify-center">
            <TrendingUp size={16} className="text-black" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-lg">Pollify</span>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-center">Create your account</h2>
        <p className="text-[var(--color-text-muted)] mb-8 text-sm text-center">
          Join the community and start polling.
        </p>

        <label className="block text-[11px] font-semibold tracking-widest text-[var(--color-text-faint)] mb-2">
          FULL NAME
        </label>
        <div className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3.5 py-3 mb-5 focus-within:border-[var(--color-brand)]/60 transition-colors">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-text-faint)]"
          />
          <User size={16} className="text-[var(--color-text-faint)]" />
        </div>

        <label className="block text-[11px] font-semibold tracking-widest text-[var(--color-text-faint)] mb-2">
          EMAIL ADDRESS
        </label>
        <div className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3.5 py-3 mb-5 focus-within:border-[var(--color-brand)]/60 transition-colors">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-text-faint)]"
          />
          <Mail size={16} className="text-[var(--color-text-faint)]" />
        </div>

        <label className="block text-[11px] font-semibold tracking-widest text-[var(--color-text-faint)] mb-2">
          PASSWORD
        </label>
        <div className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3.5 py-3 mb-7 focus-within:border-[var(--color-brand)]/60 transition-colors">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-text-faint)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-[var(--color-text-faint)] hover:text-[var(--color-text)] focus-ring rounded"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand)] text-black font-semibold rounded-lg py-3 hover:bg-[var(--color-brand-dim)] transition-colors focus-ring mb-6"
        >
          Create account
          <ArrowRight size={16} />
        </button>

        <p className="text-center text-sm text-[var(--color-text-muted)]">
          Already have an account?{" "}
          <Link to="/login" className="text-[var(--color-brand)] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
