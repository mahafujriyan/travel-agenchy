"use client";

import { useActionState } from "react";
import { submitBooking } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";

const initialState = { ok: false, message: "", error: "" };

export default function BookingForm() {
  const [state, formAction] = useActionState(submitBooking, initialState);

  return (
    <form action={formAction} className="glass rounded-3xl p-5 md:p-7">
      <div className="grid gap-3 md:grid-cols-2">
        <input name="fullName" required placeholder="Full Name" className="rounded-xl border border-white/25 bg-black/20 p-3" />
        <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-white/25 bg-black/20 p-3" />
        <input name="phone" required placeholder="Phone" className="rounded-xl border border-white/25 bg-black/20 p-3" />
        <input name="packageName" required placeholder="Package or Destination" className="rounded-xl border border-white/25 bg-black/20 p-3" />
        <input name="date" type="date" required className="rounded-xl border border-white/25 bg-black/20 p-3" />
        <input name="travelers" required placeholder="Travelers" className="rounded-xl border border-white/25 bg-black/20 p-3" />
      </div>
      <textarea
        name="message"
        rows={4}
        placeholder="Tell us your preferences"
        className="mt-3 w-full rounded-xl border border-white/25 bg-black/20 p-3"
      />
      <div className="mt-4 flex items-center gap-3">
        <SubmitButton label="Send Booking Inquiry" />
        {state.ok ? <p className="text-sm text-cyan-100">{state.message}</p> : null}
        {!state.ok && state.error ? <p className="text-sm text-rose-200">{state.error}</p> : null}
      </div>
    </form>
  );
}
