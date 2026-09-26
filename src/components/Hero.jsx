import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import ParticlesBg from "./Particlesbg.jsx";

const SOCIALS = {
  github: "https://github.com/life2-byte",
  linkedin: "https://linkedin.com/in/YOUR-LINKEDIN-HANDLE",
  facebook: "https://facebook.com/YOUR-FACEBOOK-HANDLE",
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <ParticlesBg />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[140px] -z-10"
      />

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-cyan-400 tracking-widest text-sm mb-4 uppercase"
      >
        Ahmed Umair
      </motion.p>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold gradient-text leading-tight max-w-3xl"
      >
        I build production-grade{" "}
        <TypeAnimation
          sequence={[
            "AI Assistants",
            2000,
            "Django Platforms",
            2000,
            "Agentic Systems",
            2000,
            "Full-Stack Apps",
            2000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          className="block gradient-text"
        />
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-400 max-w-xl mt-6"
      >
        CS student at UET Lahore · Django & LLM integration · building ARIA,
        ContractorHub, and other agentic AI systems.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex gap-5 mt-8"
      >
        {[
          { icon: FaGithub, href: SOCIALS.github },
          { icon: FaLinkedin, href: SOCIALS.linkedin },
          { icon: FaFacebook, href: SOCIALS.facebook },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full glass glow-border hover:-translate-y-1 transition-transform text-lg"
          >
            <Icon />
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 1.6, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500 text-xs tracking-widest"
      >
        SCROLL ↓
      </motion.a>
    </section>
  );
}