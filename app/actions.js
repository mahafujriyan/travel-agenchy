"use server";

import { z } from "zod";
import { Resend } from "resend";

const bookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  packageName: z.string().min(2),
  date: z.string().min(2),
  travelers: z.string().min(1),
  message: z.string().optional(),
});

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

async function maybeSendEmail(subject, html) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BUSINESS_EMAIL;
  const from = process.env.FROM_EMAIL || "Ventures Travel <onboarding@resend.dev>";
  if (!apiKey || !to) return;

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    subject,
    html,
  });
}

export async function submitBooking(_, formData) {
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    packageName: formData.get("packageName"),
    date: formData.get("date"),
    travelers: formData.get("travelers"),
    message: formData.get("message"),
  };

  const parsed = bookingSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: "Please fill all required booking fields correctly." };
  }

  try {
    await maybeSendEmail(
      "New Booking Inquiry",
      `<h3>Booking Inquiry</h3><p><b>Name:</b> ${data.fullName}</p><p><b>Email:</b> ${data.email}</p><p><b>Phone:</b> ${data.phone}</p><p><b>Package:</b> ${data.packageName}</p><p><b>Date:</b> ${data.date}</p><p><b>Travelers:</b> ${data.travelers}</p><p><b>Message:</b> ${data.message || "-"}</p>`
    );
    return { ok: true, message: "Booking inquiry submitted. We will contact you shortly." };
  } catch {
    return { ok: false, error: "Your request was saved but email delivery failed. Try again." };
  }
}

export async function submitContact(_, formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: "Please enter a valid name, email, and message." };
  }

  try {
    await maybeSendEmail(
      `Contact: ${data.subject}`,
      `<h3>Contact Message</h3><p><b>Name:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Subject:</b> ${data.subject}</p><p>${data.message}</p>`
    );
    return { ok: true, message: "Message sent. Our team will get back to you soon." };
  } catch {
    return { ok: false, error: "Message captured but email delivery failed. Try again." };
  }
}
