import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-20 md:px-20">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* GRID */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* BADGE */}

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">

            <ShieldCheck className="h-5 w-5 text-cyan-400" />

            <span className="text-sm font-semibold text-zinc-300">
              Plataforma Inteligente para CDA
            </span>

          </div>

          {/* TITLE */}

          <h1 className="text-6xl font-black leading-tight md:text-8xl">

            Automatiza tu
            <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Centro CDA
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">

            Gestiona clientes, vehículos, citas y WhatsApp
            desde una plataforma moderna inspirada en Tesla,
            Apple y las startups SaaS más avanzadas.

          </p>

          {/* BUTTONS */}

          <div className="mt-12 flex flex-wrap gap-6">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-bold text-black shadow-[0_0_60px_rgba(34,211,238,0.45)]"
            >

              Solicitar Demo
              <ArrowRight className="h-5 w-5" />

            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-bold backdrop-blur-xl"
            >

              <Play className="h-5 w-5" />
              Ver Demo

            </motion.button>

          </div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                +300%
              </h3>

              <p className="mt-2 text-zinc-500">
                Productividad
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                24/7
              </h3>

              <p className="mt-2 text-zinc-500">
                Automatización
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                IA
              </h3>

              <p className="mt-2 text-zinc-500">
                Inteligencia
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* GLOW */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

          {/* MAIN MOCKUP */}

          <motion.img
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            src="/images/mockup-dashboard.png"
            alt="CDA PRO Dashboard"
            className="relative z-10 w-[320px] drop-shadow-[0_0_80px_rgba(34,211,238,0.35)]"
          />

          {/* FLOATING CARD */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute -right-10 top-20 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl"
          >

            <p className="text-sm text-zinc-400">
              Agendamientos
            </p>

            <h3 className="mt-2 text-4xl font-black text-cyan-400">
              +128
            </h3>

          </motion.div>

          {/* SECOND CARD */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -left-10 bottom-20 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl"
          >

            <p className="text-sm text-zinc-400">
              Clientes
            </p>

            <h3 className="mt-2 text-4xl font-black text-cyan-400">
              +540
            </h3>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}