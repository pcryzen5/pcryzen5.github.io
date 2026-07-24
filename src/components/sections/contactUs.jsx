import ContactForm from "../forms/contactForm";

export default function ContactUs() {
  return (
    <section 
      id="contact" 
      className="bg-black text-white py-24 md:py-32 relative z-20 border-t border-stone-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info and Social Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start text-left gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">
                Legal Consultation Request
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-white uppercase">
                Contact Us
              </h2>
              <div className="w-20 h-1 bg-gold-500 rounded" />
            </div>

            <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
              Contact our chambers directly for scheduling consultations, brief handoffs, or case evaluations. Standard response time is within 24 hours.
            </p>

            {/* Legal Address & Details */}
            <div className="space-y-4 text-stone-300 text-sm">
              <div>
                <h4 className="font-semibold text-gold-400 uppercase tracking-widest text-xs mb-1">Chambers Address</h4>
                <p className="font-light">Suite 405, Counsel Chambers, High Court Complex, Sector 17, New Delhi, 110001</p>
              </div>
              <div>
                <h4 className="font-semibold text-gold-400 uppercase tracking-widest text-xs mb-1">Inquiries</h4>
                <p className="font-light">Phone: +91 98765 43210</p>
                <p className="font-light">Email: chambers@johndoelaw.com</p>
              </div>
            </div>

            {/* Social Channels (Instagram, LinkedIn, WhatsApp) */}
            <div className="flex flex-col gap-3 w-full">
              <h4 className="font-semibold text-gold-400 uppercase tracking-widest text-xs text-left mb-1">Direct Channels</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Chambers%20of%20John%20Doe,%20I%20would%20like%20to%20schedule%20a%20legal%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-3 bg-stone-900 border border-stone-800 hover:border-green-500/50 hover:text-green-400 text-stone-200 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300"
                >
                  WhatsApp
                </a>
                <a
                  href="https://linkedin.com/in/johndoe-advocate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-3 bg-stone-900 border border-stone-800 hover:border-blue-500/50 hover:text-blue-400 text-stone-200 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/johndoe.law"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-3 bg-stone-900 border border-stone-800 hover:border-pink-500/50 hover:text-pink-400 text-stone-200 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 w-full bg-stone-900/40 border border-stone-850 p-8 rounded-xl backdrop-blur-sm shadow-xl">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
