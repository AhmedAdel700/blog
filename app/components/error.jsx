"use client";

export default function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>{error.message}</h1>
      <h2>{error.statusText}</h2>
    </div>
  );
}
