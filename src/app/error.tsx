"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="page-wrapper">
      <div className="container py-5 text-center">
        <h2 className="mb-3">Something went wrong</h2>
        <p className="mb-4 text-muted">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="btn button-primary btn-c-rounded"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
