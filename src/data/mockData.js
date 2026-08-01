export const currentUser = {
  name: "Faiz ur Rehman",
  role: "Frontend Developer",
  handle: "@faiz.rehman",
  avatar: "/profile.png",
  created: 12,
  voted: 96,
  saved: 41,
};

export const pollTypeStats = [
  { label: "Single Choice", value: 14, icon: "list", color: "var(--color-brand)" },
  { label: "Yes / No", value: 15, icon: "toggle", color: "#38bdf8" },
  { label: "Rating", value: 7, icon: "star", color: "#a78bfa" },
  { label: "Image", value: 2, icon: "image", color: "#f59e0b" },
  { label: "Open Ended", value: 6, icon: "message", color: "#ef4444" },
];

export const polls = [
  {
    id: "p1",
    author: "Qazi",
    handle: "@Qazi Ahmad",
    time: "2d ago",
    tag: "Sports",
    type: "single",
    question: "Who is the GOAT?",
    options: [
      { id: "a", label: "Messi", votes: 1 },
      { id: "b", label: "Pele", votes: 0 },
    ],
    upvotes: 1,
    comments: 0,
    saves: 0,
  },
  {
    id: "p2",
    author: "Muhammad Abdullah",
    handle: "@Abdullah",
    time: "2d ago",
    tag: "Education",
    type: "yesno",
    question: "Ai replaced dev",
    options: [
      { id: "yes", label: "Yes", votes: 3 },
      { id: "no", label: "No", votes: 5 },
    ],
    upvotes: 4,
    comments: 2,
    saves: 1,
  },
  {
    id: "p3",
    author: "Sara Khan",
    handle: "@sarakhan",
    time: "3d ago",
    tag: "Tech",
    type: "single",
    question: "Best JS framework in 2026?",
    options: [
      { id: "react", label: "React", votes: 42 },
      { id: "vue", label: "Vue", votes: 11 },
      { id: "svelte", label: "Svelte", votes: 19 },
    ],
    upvotes: 22,
    comments: 8,
    saves: 5,
  },
  {
    id: "p4",
    author: "Bilal Ahmed",
    handle: "@bilal.a",
    time: "5d ago",
    tag: "Food",
    type: "rating",
    question: "Rate karahi at Cafe De Karachi",
    options: [],
    upvotes: 9,
    comments: 3,
    saves: 2,
  },
];

export const navItems = [
  { label: "Dashboard", key: "dashboard", icon: "grid" },
  { label: "Create", key: "create", icon: "plus" },
  { label: "My Polls", key: "my-polls", icon: "edit" },
  { label: "Voted", key: "voted", icon: "check" },
  { label: "Saved", key: "saved", icon: "bookmark" },
];

export const filterTabs = ["All", "Yes / No", "Single Choice", "Rating", "Image", "Open Ended"];
