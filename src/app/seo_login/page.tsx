"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "@/sass/seo-login.scss";

export default function SeoLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    document.body.classList.add("dashboard-mode");
    document.documentElement.classList.add("dashboard-mode");
    return () => {
      document.body.classList.remove("dashboard-mode");
      document.documentElement.classList.remove("dashboard-mode");
    };
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setBusy(true);

    try {
      const response = await fetch("/api/seo/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.replace("/seo-dashboard");
        router.refresh();
        return;
      }

      setError(data.error ?? "Login failed");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="seo-login">
      <form className="seo-login__form" onSubmit={handleSubmit}>
        <h1>SEO Dashboard</h1>

        <label htmlFor="seo-username">Username</label>
        <input
          id="seo-username"
          type="text"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <label htmlFor="seo-password">Password</label>
        <input
          id="seo-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error && <p className="seo-login__error">{error}</p>}

        <button type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Login"}
        </button>
      </form>
    </main>
  );
}