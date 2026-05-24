import { motion } from "framer-motion";
import { ArrowRight, Phone, Download } from "lucide-react";

export default function FinalCTA() {

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/573105973951",
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden px-6 pb-32 md:px-20">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[50px] border border-white/10 bg-white/5 p-12 backdrop-blur-2xl md:p-20">

        {/* SMALL BADGE */}

        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3">

          <span className="h-3 w-3 rounded-full bg-cyan-400" />

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Automatización Inteligente
          </span>

        </div>

        {/* TITLE */}

        <h2 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">

          Lleva tu
          <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            {" "}Centro CDA{" "}
          </span>
          al siguiente nivel tecnológico.

        </h2>

        {/* DESCRIPTION */}

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-zinc-400">

          Automatiza clientes, vehículos, citas y WhatsApp
          desde una plataforma moderna diseñada para aumentar
          productividad y mejorar la experiencia de tus usuarios.

        </p>

        {/* BUTTONS */}

        <div className="mt-14 flex flex-wrap gap-6">

          {/* DEMO */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-black text-black shadow-[0_0_60px_rgba(34,211,238,0.45)]"
          >

            Solicitar Demo
            <ArrowRight className="h-5 w-5" />

          </motion.button>

          {/* WHATSAPP */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openWhatsApp}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-bold backdrop-blur-xl"
          >

            <Phone className="h-5 w-5" />

            WhatsApp

          </motion.button>

          {/* APK */}

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/apk/cda-pro.apk"
            download
            className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-8 py-5 text-lg font-bold text-cyan-300"
          >

            <Download className="h-5 w-5" />

            Descargar APK

          </motion.a>

        </div>

        {/* STATS */}

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              +300%
            </h3>

            <p className="mt-3 text-zinc-400">
              Incremento en productividad
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              24/7
            </h3>

            <p className="mt-3 text-zinc-400">
              Atención automatizada
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              IA
            </h3>

            <p className="mt-3 text-zinc-400">
              Tecnología inteligente
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}