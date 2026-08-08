"use client";

import React, { useState } from "react";
import Button from "@/components/Button";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with backend later
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputStyles =
    "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-base text-brand-black placeholder-zinc-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent font-body";

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className={inputStyles}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className={inputStyles}
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className={inputStyles}
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className={`${inputStyles} resize-none`}
        />
      </div>
      <Button type="submit" variant="dark" size="lg" className="w-full">
        Say Hello
      </Button>
    </form>
  );
}
