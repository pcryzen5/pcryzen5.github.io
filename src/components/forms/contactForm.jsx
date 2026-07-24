import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import { contactSchema } from "../../schemas/contactSchema";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      setSubmitError("Failed to transmit request. Please verify connection and retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center gap-4">
        <CheckCircle className="w-16 h-16 text-gold-400 animate-bounce" />
        <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Brief Transmitted
        </h3>
        <p className="text-stone-400 text-sm max-w-sm font-light">
          Your legal inquiry has been safely logged in our database. The senior counsel's clerk will review the brief and contact you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-6 px-6 py-2.5 bg-stone-900 border border-stone-850 hover:border-gold-500/50 hover:text-gold-400 text-stone-200 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      {submitError && (
        <div className="flex items-center gap-3 p-4 bg-red-950/45 border border-red-500/20 text-red-200 rounded-lg text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name field */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
            Full Name <span className="text-gold-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Johnathan Doe"
            {...register("name")}
            className={`w-full px-4 py-3 rounded bg-stone-950 border text-sm text-white placeholder-stone-600 focus:outline-none transition-all duration-200 ${
              errors.name 
                ? "border-red-500/50 focus:border-red-500" 
                : "border-stone-800 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-400 font-light mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email field */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
            Email Address <span className="text-gold-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={`w-full px-4 py-3 rounded bg-stone-950 border text-sm text-white placeholder-stone-600 focus:outline-none transition-all duration-200 ${
              errors.email 
                ? "border-red-500/50 focus:border-red-500" 
                : "border-stone-800 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 font-light mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone field */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
            Phone Number <span className="text-stone-600">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 9876543210"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded bg-stone-950 border text-sm text-white placeholder-stone-600 focus:outline-none transition-all duration-200 ${
              errors.phone 
                ? "border-red-500/50 focus:border-red-500" 
                : "border-stone-800 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-400 font-light mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject field */}
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
            Subject Matter <span className="text-gold-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Constitutional Defense Counsel"
            {...register("subject")}
            className={`w-full px-4 py-3 rounded bg-stone-950 border text-sm text-white placeholder-stone-600 focus:outline-none transition-all duration-200 ${
              errors.subject 
                ? "border-red-500/50 focus:border-red-500" 
                : "border-stone-800 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20"
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-red-400 font-light mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Message field */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
          Inquiry Brief / Details <span className="text-gold-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Please describe the core details of your legal dispute or consulting requirements..."
          {...register("message")}
          className={`w-full px-4 py-3 rounded bg-stone-950 border text-sm text-white placeholder-stone-600 focus:outline-none transition-all duration-200 resize-y ${
            errors.message 
              ? "border-red-500/50 focus:border-red-500" 
              : "border-stone-800 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-400 font-light mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-stone-950 font-bold uppercase tracking-wider text-xs rounded shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
            Transmitting Brief...
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            Transmit Inquiries
          </>
        )}
      </button>
    </form>
  );
}
