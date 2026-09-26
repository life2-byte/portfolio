import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects.js";

function ProjectCard({ project, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 items-center mb-32`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative rounded-2xl overflow-hidden glass glow-border group">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <p className="text-cyan-400 text-sm tracking-widest uppercase mb-2">
          {project.tagline}
        </p>
        <h3 className="text-3xl font-bold gradient-text mb-4">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        <ul className="mb-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="text-sm text-gray-300 flex gap-2">
              <span className="text-purple-400">▹</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full glass glow-border hover:scale-105 transition-transform"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full glass glow-border hover:scale-105 transition-transform"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold gradient-text text-center mb-20"
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}