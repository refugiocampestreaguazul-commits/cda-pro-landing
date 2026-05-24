import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="relative px-6 pb-32 md:px-20">

      {/* BACKGROUND */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TITLE */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            PLANES CDA PRO
          </p>

          <h2 className="text-5xl font-black md:text-7xl">

            Planes
            <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Inteligentes
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">

            Escoge el plan ideal para modernizar y automatizar
            tu Centro CDA.

          </p>

        </div>

        {/* GRID */}

        <div className="grid gap-10 md:grid-cols-3">

          {/* STARTER */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >

            <h3 className="text-3xl font-black">
              Starter
            </h3>

            <p className="mt-4 text-zinc-400">
              Ideal para pequeños CDA.
            </p>

            <div className="mt-10">

              <span className="text-6xl font-black">
                $99K
              </span>

              <span className="ml-2 text-zinc-400">
                / mes
              </span>

            </div>

            <div className="mt-10 space-y-5">

              <Feature text="Gestión de clientes" />
              <Feature text="Agenda básica" />
              <Feature text="WhatsApp manual" />
              <Feature text="Soporte básico" />

            </div>

            <button className="mt-12 w-full rounded-2xl border border-white/10 bg-white/5 py-5 font-bold transition hover:bg-white/10">
              Comenzar
            </button>

          </motion.div>

          {/* PRO */}

          <motion.div
            whileHover={{ y: -10 }}
            className="relative rounded-[40px] border border-cyan-500/30 bg-cyan-500/10 p-10 backdrop-blur-2xl"
          >

            {/* POPULAR */}

            <div className="absolute right-6 top-6 rounded-full bg-cyan-400 px-4 py-2 text-sm font-black text-black">
              MÁS POPULAR
            </div>

            <h3 className="text-3xl font-black">
              PRO
            </h3>

            <p className="mt-4 text-zinc-300">
              Automatización avanzada.
            </p>

            <div className="mt-10">

              <span className="text-6xl font-black text-cyan-400">
                $199K
              </span>

              <span className="ml-2 text-zinc-300">
                / mes
              </span>

            </div>

            <div className="mt-10 space-y-5">

              <Feature text="Agenda inteligente" />
              <Feature text="WhatsApp automatizado" />
              <Feature text="Dashboard premium" />
              <Feature text="Estadísticas" />
              <Feature text="Soporte prioritario" />
              <Feature text="IA integrada" />

            </div>

            <button className="mt-12 w-full rounded-2xl bg-cyan-400 py-5 font-black text-black shadow-[0_0_50px_rgba(34,211,238,0.35)]">
              Solicitar Demo
            </button>

          </motion.div>

          {/* ENTERPRISE */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >

            <h3 className="text-3xl font-black">
              Enterprise
            </h3>

            <p className="mt-4 text-zinc-400">
              Para grandes operaciones.
            </p>

            <div className="mt-10">

              <span className="text-5xl font-black">
                Personalizado
              </span>

            </div>

            <div className="mt-10 space-y-5">

              <Feature text="Multiusuarios" />
              <Feature text="Infraestructura cloud" />
              <Feature text="Integraciones avanzadas" />
              <Feature text="IA personalizada" />
              <Feature text="Soporte VIP" />
              <Feature text="Escalabilidad total" />

            </div>

            <button className="mt-12 w-full rounded-2xl border border-white/10 bg-white/5 py-5 font-bold transition hover:bg-white/10">
              Contactar
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

/* FEATURE */

function Feature({ text }) {
  return (
    <div className="flex items-center gap-4">

      <div className="rounded-full bg-cyan-400/20 p-2">
        <Check className="h-4 w-4 text-cyan-400" />
      </div>

      <span className="text-zinc-300">
        {text}
      </span>

    </div>
  );
}