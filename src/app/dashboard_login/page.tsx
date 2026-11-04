"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/hooks/context";

import "@/sass/dashboard-login.scss";

export default function DashboardLogin() {
    const router = useRouter();
    const { setActiveMenuItem } = useMyContext();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setActiveMenuItem("dashboard_login");

        // 👇 body class for layout hide
        document.body.classList.add("dashboard-mode");

        return () => {
            document.body.classList.remove("dashboard-mode");
        };
    }, [setActiveMenuItem]);

    const handleLogin = async () => {
        setError(null);

        try {
            const response = await fetch("https://api.dmv-gc.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                document.cookie = `token=${data.token}; path=/; max-age=86400`;

                router.push("/s_dashboard");
            } else {
                alert(data.msg || "Login failed");
                setError(data.msg || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="dashboard-login-main">
            <div className="login-brand-panel">
                <div className="brand-mark">
                    <img src={'/images/logo.png'} alt={'Dmv-GC logo'} width={"100%"} />
                </div>
                <div>
                    <span className="eyebrow">Admin workspace</span>
                    <h1>Manage customer conversations with clarity.</h1>
                    <p>Review live chats, support bot history, and form submissions from one focused dashboard.</p>
                </div>
                <div className="login-highlights">
                    <div>
                        <strong>Live chat</strong>
                        <span>Respond to active customers</span>
                    </div>
                    <div>
                        <strong>Forms</strong>
                        <span>Track fresh project leads</span>
                    </div>
                    <div>
                        <strong>Secure access</strong>
                        <span>Dashboard-only session</span>
                    </div>
                </div>
            </div>
            <div className="content-holder-main">
                <div className="form-heading">
                    <span className="eyebrow">Welcome back</span>
                    <h4>Sign in to dashboard</h4>
                    <p>Use your admin credentials to continue.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <div className="input-holder">
                        <label>User name</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-holder">
                        <label>Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="error-message text-danger">{error}</div>}

                    <button className="btn button-primary btn-c-rounded" type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}
