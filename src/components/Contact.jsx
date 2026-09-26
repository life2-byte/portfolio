import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const SOCIALS = {
  github: "https://github.com/life2-byte",
  linkedin: "https://linkedin.com/in/YOUR-LINKEDIN-HANDLE",
  facebook: "https://facebook.com/YOUR-FACEBOOK-HANDLE",
  email: "mailto:your-email@example.com",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Let's Build Something
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          Open to remote internships and junior developer roles. Reach out —
          I reply fast.
        </p>

        <div className="flex justify-center gap-5">
          {[
            { icon: FaGithub, href: SOCIALS.github, label: "GitHub" },
            { icon: FaLinkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
            { icon: FaFacebook, href: SOCIALS.facebook, label: "Facebook" },
            { icon: FaEnvelope, href: SOCIALS.email, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full glass glow-border hover:-translate-y-1 transition-transform text-lg"
              title={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>

      <p className="text-gray-600 text-xs mt-24">
        © {new Date().getFullYear()} Ahmed Umair. Built with React.
      </p>
    </section>
  );
}