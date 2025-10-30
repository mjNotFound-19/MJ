import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 -top-40 w-[90vw] h-[90vw] rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.18),transparent_60%)]"/>
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity:0, y: 20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8 }}
          className="title text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
          Manas Jha
        </motion.h1>
        <motion.p
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.6, duration:.8 }}
          className="mt-4 text-[clamp(1rem,2.2vw,1.25rem)] text-gray-300">
          AI Researcher • F1 Analytics • Developer
        </motion.p>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1, duration:.8 }}
          className="mt-8 flex justify-center gap-3">
          <a href="#projects" className="px-5 py-3 rounded-xl bg-primary text-black font-semibold shadow-glow hover:brightness-110 transition">
            View Projects
          </a>
          <a href="#experience" className="px-5 py-3 rounded-xl border border-gray-800 hover:border-primary">
            Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}
