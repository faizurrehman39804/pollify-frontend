import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreatePoll from "./pages/CreatePoll";
import MyPolls from "./pages/MyPolls";
import Voted from "./pages/Voted";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";

function Protected({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Layout>{children}</Layout>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />
      <Route
        path="/create"
        element={
          <Protected>
            <CreatePoll />
          </Protected>
        }
      />
      <Route
        path="/my-polls"
        element={
          <Protected>
            <MyPolls />
          </Protected>
        }
      />
      <Route
        path="/voted"
        element={
          <Protected>
            <Voted />
          </Protected>
        }
      />
      <Route
        path="/saved"
        element={
          <Protected>
            <Saved />
          </Protected>
        }
      />
      <Route
        path="/settings"
        element={
          <Protected>
            <Settings />
          </Protected>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
