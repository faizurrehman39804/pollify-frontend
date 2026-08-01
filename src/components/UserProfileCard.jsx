import Icon from "./Icon";

export default function UserProfileCard({
  user,
  showStats = false,
  actionLabel,
  onAction,
}) {
  const avatar = user?.avatar ?? "/profile.png";
  const name = user?.name ?? "Guest User";
  const role = user?.role ?? "Frontend Developer";
  const handle = user?.handle ?? "@guest";

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
      <img
        src={avatar}
        alt={name}
        className="mx-auto w-18 h-18 rounded-full object-cover border-2 border-[var(--color-brand)]/30 mb-4"
      />
      <p className="font-semibold text-base mb-1">{name}</p>
      <p className="text-sm text-[var(--color-text-muted)] mb-2">{role}</p>
      <p className="text-xs text-[var(--color-text-faint)] truncate max-w-full mb-4">
        {handle}
      </p>

      {showStats && (
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Created", value: user?.created ?? 0 },
            { label: "Voted", value: user?.voted ?? 0 },
            { label: "Saved", value: user?.saved ?? 0 },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-faint)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold border border-[var(--color-border-light)] rounded-lg py-2 hover:bg-[var(--color-surface-hover)] transition-colors focus-ring"
        >
          <Icon name="settings" size={16} />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
