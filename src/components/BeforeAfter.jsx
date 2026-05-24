import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="relative px-6 pb-32 md:px-20">

      {/* BACKGROUND */}

      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TITLE */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            TRANSFORMACIÓN DIGITAL
          </p>

          <h2 className="text-5xl font-black md:text-7xl">

            Antes vs
            <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Después
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">

            Mira cómo CDA PRO transforma completamente
            la operación de tu centro CDA.

          </p>

        </div>

        {/* GRID */}

        <div className="grid gap-10 md:grid-cols-2">

          {/* BEFORE */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[40px] border border-red-500/20 bg-red-500/5 p-10 backdrop-blur-2xl"
          >

            <div className="mb-8 flex items-center gap-4">

              <XCircle className="h-12 w-12 text-red-400" />

              <h3 className="text-4xl font-black">
                Antes
              </h3>

            </div>

            <div className="space-y-6 text-lg text-zinc-300">

              <div className="flex items-start gap-4">
                <XCircle className="mt-1 h-6 w-6 text-red-400" />
                <p>Clientes perdidos por falta de seguimiento.</p>
              </div>

              <div className="flex items-start gap-4">
                <XCircle className="mt-1 h-6 w-6 text-red-400" />
                <p>WhatsApp desordenado y saturado.</p>
              </div>

              <div className="flex items-start gap-4">
                <XCircle className="mt-1 h-6 w-6 text-red-400" />
                <p>Agendamientos manuales y lentos.</p>
              </div>

              <div className="flex items-start gap-4">
                <XCircle className="mt-1 h-6 w-6 text-red-400" />
                <p>Pérdida de tiempo operativo.</p>
              </div>

              <div className="flex items-start gap-4">
                <XCircle className="mt-1 h-6 w-6 text-red-400" />
                <p>Falta de control y estadísticas.</p>
              </div>

            </div>

          </motion.div>

          {/* AFTER */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[40px] border border-cyan-500/20 bg-cyan-500/5 p-10 backdrop-blur-2xl"
          >

            <div className="mb-8 flex items-center gap-4">

              <CheckCircle className="h-12 w-12 text-cyan-400" />

              <h3 className="text-4xl font-black">
                Después con CDA PRO
              </h3>

            </div>

            <div className="space-y-6 text-lg text-zinc-300">

              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-cyan-400" />
                <p>Seguimiento automático de clientes.</p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-cyan-400" />
                <p>Integración inteligente con WhatsApp.</p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-cyan-400" />
                <p>Agenda moderna y automatizada.</p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-cyan-400" />
                <p>Mayor productividad operativa.</p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-cyan-400" />
                <p>Dashboard y estadísticas en tiempo real.</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}