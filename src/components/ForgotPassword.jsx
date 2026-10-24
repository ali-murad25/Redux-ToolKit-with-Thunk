"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { resetPassword, clearError, clearMessage } from "@/redux/authSlice";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    dispatch(clearError());
    dispatch(clearMessage());

    await dispatch(resetPassword(email));
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
        <Link
          href="/login"
          className="mb-8 inline-flex items-center gap-2 text-xl font-bold text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg text-white">
            ✳
          </span>
          AI Labs
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Forgot password?
        </h1>

        <p className="mt-3 mb-7 text-sm leading-6 text-slate-500">
          Enter your registered email address. We will send you a password
          reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label
              htmlFor="reset-email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email address
            </label>

            <input
              id="reset-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          {message && (
            <p
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending reset link..." : "Send Reset Link"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign In
          </Link>
        </p>
      </section>
    </main>
  );
}