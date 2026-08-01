import PortfolioContactForm from "../forms/PortfolioContactForm";
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Code } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function PortfolioContact() {
  const socialsList = [
    { name: "GitHub", url: portfolioData.socials?.github, icon: Github },
    { name: "LinkedIn", url: portfolioData.socials?.linkedin, icon: Linkedin },
    { name: "Twitter/X", url: portfolioData.socials?.twitter, icon: Twitter },
    { name: "Instagram", url: portfolioData.socials?.instagram, icon: Instagram },
    { name: "Codolio", url: portfolioData.socials?.codolio, icon: Code }
  ].filter(social => social.url); // Only render if the URL is configured

  return (
    <section
      id="contact"
      className="bg-transparent text-white py-24 border-t border-stone-900"
    >
      <div className="w-full px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">

          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-stone-500 font-bold uppercase tracking-widest text-xs block mb-3">
                Connect
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
                Let&apos;s Build <br />Something.
              </h2>
              <div className="w-16 h-[1px] bg-stone-700 mt-6" />
            </div>

            <p className="text-stone-400 font-light text-sm leading-relaxed max-w-sm">
              If you have a design or engineering request, or simply want to chat about custom fonts and interactive grids, drop a line.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stone-500" />
                <a
                  href="mailto:purkaitshubham5@gmail.com"
                  className="text-stone-300 hover:text-white text-sm transition-colors"
                >
                  purkaitshubham5@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-stone-500" />
                <span className="text-stone-300 text-sm">
                  Mumbai, India
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 pt-6">
              {socialsList.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border border-stone-900 rounded hover:border-white text-stone-400 hover:text-white transition-all cursor-pointer"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact form box */}
          <div className="lg:col-span-7 bg-stone-950/40 border border-stone-900 p-8 md:p-10 rounded-2xl">
            <PortfolioContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
