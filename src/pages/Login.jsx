import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Users2,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
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
    <div className="min-h-screen flex bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(16,185,129,0.15), transparent 55%)",
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 mb-16">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-brand)] flex items-center justify-center">
              <TrendingUp size={16} className="text-black" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-lg">Pollify</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
            Live community
          </span>

          <h1 className="text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Every opinion
            <br />
            <span className="text-[var(--color-brand)]">deserves to</span>
            <br />
            be counted.
          </h1>

          <p className="text-[var(--color-text-muted)] max-w-sm leading-relaxed">
            Create polls in seconds, collect votes instantly, and discover what
            your community truly thinks.
          </p>
        </div>

        <div className="relative grid grid-cols-3 gap-4 max-w-md">
          {[
            { icon: Users2, value: "50K+", label: "Community members" },
            { icon: TrendingUp, value: "2M+", label: "Votes cast" },
            { icon: Zap, value: "500K+", label: "Polls created" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-4"
            >
              <stat.icon size={18} className="text-[var(--color-brand)] mb-3" />
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-[var(--color-text-faint)] mt-0.5 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel / form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-[var(--color-text-muted)] mb-8 text-sm">
            Sign in to your Pollify account.
          </p>

          <label className="block text-[11px] font-semibold tracking-widest text-[var(--color-text-faint)] mb-2">
            EMAIL ADDRESS
          </label>
          <div className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3.5 py-3 mb-5 focus-within:border-[var(--color-brand)]/60 transition-colors">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youwexample.com"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-text-faint)]"
            />
            <Mail size={16} className="text-[var(--color-text-faint)]" />
          </div>

          <div className="flex items-center justify-between mb-2">
            <label className="block text-[11px] font-semibold tracking-widest text-[var(--color-text-faint)]">
              PASSWORD
            </label>
            <Link
              to="/login"
              className="text-xs text-[var(--color-brand)] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
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
            Sign in
            <ArrowRight size={16} />
          </button>

          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-x-0 h-px bg-[var(--color-border)]" />
            <span className="relative bg-[var(--color-bg)] px-3 text-xs text-[var(--color-text-faint)]">
              New to Pollify?
            </span>
          </div>

          <Link
            to="/signup"
            className="block w-full text-center border border-[var(--color-border-light)] rounded-lg py-3 text-sm font-medium hover:bg-[var(--color-surface-hover)] transition-colors focus-ring"
          >
            Create a free account
          </Link>
        </form>
      </div>
    </div>
  );
}
