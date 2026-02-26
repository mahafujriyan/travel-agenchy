"use client";

import { useActionState } from "react";
import SubmitButton from "@/components/SubmitButton";
import { submitContact } from "@/app/actions";

const initialState = { ok: false, message: "", error: "" };

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="glass rounded-3xl p-5 md:p-7">
      <div className="grid gap-3 md:grid-cols-2">
        <input name="name" required placeholder="Name" className="rounded-xl border border-white/25 bg-black/20 p-3" />
        <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-white/25 bg-black/20 p-3" />
      </div>
      <input
        name="subject"
        required
        placeholder="Subject"
        className="mt-3 w-full rounded-xl border border-white/25 bg-black/20 p-3"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Message"
        className="mt-3 w-full rounded-xl border border-white/25 bg-black/20 p-3"
      />
      <div className="mt-4 flex items-center gap-3">
        <SubmitButton label="Send Message" />
        {state.ok ? <p className="text-sm text-cyan-100">{state.message}</p> : null}
        {!state.ok && state.error ? <p className="text-sm text-rose-200">{state.error}</p> : null}
      </div>
    </form>
  );
}
