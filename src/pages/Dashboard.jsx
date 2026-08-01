import { useMemo, useState } from "react";
import Icon from "../components/Icon";
import PollCard from "../components/PollCard";
import { polls, filterTabs } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

const typeMap = {
  "Yes / No": "yesno",
  "Single Choice": "single",
  Rating: "rating",
  Image: "image",
  "Open Ended": "open",
};

export default function Dashboard() {
  const { user } = useAuth();
  const [tab, setTab] = useState("Explore");
  const [filter, setFilter] = useState("All");
  const [question, setQuestion] = useState("");

  const firstName = user?.name?.split(" ")[0] || "there";
  const role = user?.role ?? "Frontend Developer";

  const visiblePolls = useMemo(() => {
    if (filter === "All") return polls;
    return polls.filter((p) => p.type === typeMap[filter]);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hey, {firstName} </h1>
          <p className="text-sm text-[var(--color-text-muted)]">{role}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 mb-5">
        <img
          src={user?.avatar ?? "/profile.png"}
          alt={user?.name ?? "Profile"}
          className="w-8 h-8 rounded-full object-cover shrink-0"
        />
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask the community something..."
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-text-faint)]"
        />
        <button
          className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-brand)] text-black hover:bg-[var(--color-brand-dim)] transition-colors focus-ring"
          aria-label="Post"
        >
          <Icon name="edit" size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-5">
        {["Explore", "Following"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
              tab === t
                ? "bg-[var(--color-surface-hover)] border border-[var(--color-border-light)] text-[var(--color-text)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            <Icon name={t === "Explore" ? "compass" : "users"} size={15} />
            {t}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-6 -mx-1 px-1">
        {filterTabs.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 px-3.5 py-1.5 rounded-lg text-sm font-medium border transition-colors focus-ring ${
              filter === f
                ? "bg-[var(--color-text)] text-black border-[var(--color-text)]"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {visiblePolls.length === 0 ? (
          <div className="text-center py-16 text-[var(--color-text-faint)] text-sm">
            No polls in this category yet.
          </div>
        ) : (
          visiblePolls.map((poll) => <PollCard key={poll.id} poll={poll} />)
        )}
      </div>
    </div>
  );
}
