
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/redux/authSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, loading, initialized, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (initialized && !user) {
      router.replace("/login");
    }
  }, [initialized, user, router]);

  const handleLogout = async () => {
    const result = await dispatch(logoutUser());

    if (logoutUser.fulfilled.match(result)) {
      router.replace("/login");
    }
  };

  if (!initialized || !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">
          Checking your session...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-indigo-600">
              AI Labs
            </p>

            <h1 className="mt-2 text-2xl font-bold text-slate-900">
              Welcome, {user.displayName || "User"}!
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              You have successfully signed in.
            </p>
          </div>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing out..." : "Logout"}
          </button>
        </header>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Your Account
          </h2>

          <div className="mt-5 space-y-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Full Name
              </p>
              <p className="mt-1 font-medium text-slate-900">
                {user.displayName || "Not provided"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Email Address
              </p>
              <p className="mt-1 break-all font-medium text-slate-900">
                {user.email || "No email available"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Authentication Status
              </p>
              <p className="mt-1 font-medium text-green-700">
                Authenticated
              </p>
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-4 text-sm text-red-600">
              {error}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
