import { motion } from "framer-motion";

const blobs = [
  { size: 380, top: "10%", left: "5%", color: "#a855f7", delay: 0 },
  { size: 300, top: "55%", left: "70%", color: "#6366f1", delay: 2 },
  { size: 260, top: "75%", left: "15%", color: "#22d3ee", delay: 4 },
];

export default function ParticlesBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px] opacity-30"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}