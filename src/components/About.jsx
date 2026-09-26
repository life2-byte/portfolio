import { motion } from "framer-motion";

const stack = [
  "Django",
  "Python",
  "PostgreSQL",
  "Docker",
  "Celery / Redis",
  "React",
  "Groq / LLaMA",
  "REST APIs",
  "Agentic AI",
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
          About Me
        </h2>
        <p className="text-purple-400 text-lg mb-4">
          Hey, I'm Umair 👋
        </p>
        <p className="text-gray-400 leading-relaxed text-lg">
  Certified overthinker of system architecture and occasional sleep-skipper
  when a bug refuses to die. I build AI-driven software — agentic
  assistants that use tools and run background tasks on their own, and
  full-stack platforms with real-time matching and messaging baked in. My
  stack is Django, PostgreSQL, and LLM integration, and I care a lot more
  about "does it actually work in production" than "does it look good in a
  demo." Currently open to remote internship and junior dev roles where I
  can keep building things like this.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto mt-16 flex flex-wrap justify-center gap-3">
        {stack.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-white hover:border-purple-400/50 transition-colors"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}