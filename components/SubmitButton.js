"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary disabled:opacity-70" disabled={pending}>
      {pending ? "Submitting..." : label}
    </button>
  );
}
