import { useAuth } from "../context/AuthContext";
import UserProfileCard from "../components/UserProfileCard";

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Settings</h1>
        <p className="text-[var(--color-text-muted)] mb-6">
          Manage your account and preferences.
        </p>
      </div>

      <UserProfileCard user={user} />

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col gap-5">
        <div>
          <label className="block text-[11px] font-semibold tracking-widest text-[var(--color-text-faint)] mb-2">
            DISPLAY NAME
          </label>
          <input
            defaultValue={user?.name}
            className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-3.5 py-3 text-sm outline-none focus:border-[var(--color-brand)]/60"
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold tracking-widest text-[var(--color-text-faint)] mb-2">
            EMAIL
          </label>
          <input
            defaultValue={user?.handle?.replace("@", "")}
            className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-3.5 py-3 text-sm outline-none focus:border-[var(--color-brand)]/60"
          />
        </div>
        <button className="self-start bg-[var(--color-brand)] text-black text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[var(--color-brand-dim)] transition-colors focus-ring">
          Save changes
        </button>
      </div>
    </div>
  );
}
