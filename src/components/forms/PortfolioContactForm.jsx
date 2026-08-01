import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import { portfolioContactSchema } from "../../schemas/portfolioContactSchema";
import { portfolioData } from "../../data/portfolioData";

export default function PortfolioContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(portfolioContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const config = portfolioData.contactConfig;
      
      let response;
      if (config?.service === "formspree") {
        if (!config.formspreeFormId) {
          throw new Error("Formspree Form ID is not configured. Please add it to src/data/portfolioData.js.");
        }
        response = await fetch(`https://formspree.io/f/${config.formspreeFormId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data)
        });
      } else {
        // Default to Web3Forms
        if (!config?.web3FormsAccessKey || config.web3FormsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || !config.web3FormsAccessKey.trim()) {
          throw new Error("Web3Forms Access Key is not configured. Please add your key to contactConfig in src/data/portfolioData.js.");
        }
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: config.web3FormsAccessKey,
            subject: data.subject || "New Portfolio Contact Message",
            from_name: data.name,
            name: data.name,
            email: data.email,
            message: data.message
          })
        });
      }

      if (!response || !response.ok) {
        const errorData = response ? await response.json().catch(() => ({})) : {};
        throw new Error(errorData.message || "Failed response from mail server. Please verify your Access Key/Form ID.");
      }

      setSubmitSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
      setSubmitError(err.message || "Failed to deliver message. Please verify network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center gap-4">
        <CheckCircle className="w-12 h-12 text-white animate-bounce mb-2" />
        <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white">
          Transmission Success
        </h3>
        <p className="text-stone-400 text-xs max-w-xs font-light leading-relaxed">
          Your message has been securely sent. John will review your inquiry and reach back to you within 48 hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-6 px-6 py-2.5 bg-stone-900 border border-stone-850 hover:border-white hover:text-white text-stone-200 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      {submitError && (
        <div className="flex items-center gap-3 p-4 bg-red-950/45 border border-red-500/20 text-red-200 rounded-lg text-xs">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name field */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-stone-500 block">
            Name <span className="text-white">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            {...register("name")}
            className={`w-full px-4 py-3 rounded bg-black border text-sm text-white placeholder-stone-700 focus:outline-none transition-all duration-200 ${
              errors.name 
                ? "border-red-500/50 focus:border-red-500" 
                : "border-stone-900 focus:border-white"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-400 font-light mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email field */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-stone-500 block">
            Email <span className="text-white">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email")}
            className={`w-full px-4 py-3 rounded bg-black border text-sm text-white placeholder-stone-700 focus:outline-none transition-all duration-200 ${
              errors.email 
                ? "border-red-500/50 focus:border-red-500" 
                : "border-stone-900 focus:border-white"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 font-light mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject field */}
      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-stone-500 block">
          Subject <span className="text-white">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Collaboration Inquiry"
          {...register("subject")}
          className={`w-full px-4 py-3 rounded bg-black border text-sm text-white placeholder-stone-700 focus:outline-none transition-all duration-200 ${
            errors.subject 
              ? "border-red-500/50 focus:border-red-500" 
              : "border-stone-900 focus:border-white"
          }`}
        />
        {errors.subject && (
          <p className="text-xs text-red-400 font-light mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message field */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-stone-500 block">
          Message <span className="text-white">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project, timeline, and expectations..."
          {...register("message")}
          className={`w-full px-4 py-3 rounded bg-black border text-sm text-white placeholder-stone-700 focus:outline-none transition-all duration-200 resize-y ${
            errors.message 
              ? "border-red-500/50 focus:border-red-500" 
              : "border-stone-900 focus:border-white"
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
        className="w-full py-4 bg-white hover:bg-stone-200 text-black font-bold uppercase tracking-wider text-xs rounded transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            <Send className="w-3 h-3" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
