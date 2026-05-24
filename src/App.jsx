import { useState } from "react";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
} from "lucide-react";

import { supabase } from "./lib/supabase";

export default function App() {

  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/573105973951",
      "_blank"
    );
  };

  const guardarLead = async () => {

    const { error } = await supabase
      .from("leads_cda")
      .insert([
        {
          nombre,
          empresa,
          telefono,
          email,
        },
      ]);

    if (error) {
      alert("Error guardando lead");
      console.log(error);
      return;
    }

    alert("Lead enviado correctamente 🚀");

    setNombre("");
    setEmpresa("");
    setTelefono("");
    setEmail("");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      >
        <source
          src="/videos/cda-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-8 py-6 backdrop-blur-xl">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
  CDA
</span>

<span className="ml-2 text-white">
  PRO
</span>
        </motion.h1>

    <motion.button
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1 }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={openWhatsApp}
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-2xl shadow-[0_0_60px_rgba(255,255,255,0.15)]"
>
  <Phone className="h-6 w-6" />

  <span className="hidden sm:block">
    WhatsApp
  </span>
</motion.button>

      </header>

      {/* HERO */}
      <Hero />
      <BeforeAfter />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      {/* STATS */}
      <section className="relative z-10 px-6 pb-24 md:px-20">

        <div className="grid gap-6 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:grid-cols-3">

          <div className="text-center">
            <h3 className="text-5xl font-black">
              +300%
            </h3>

            <p className="mt-3 text-zinc-400">
              Incremento en productividad
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-black">
              24/7
            </h3>

            <p className="mt-3 text-zinc-400">
              Atención automatizada
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-black">
              IA
            </h3>

            <p className="mt-3 text-zinc-400">
              Tecnología inteligente
            </p>
          </div>

        </div>

      </section>

      {/* FORMULARIO */}
      <section className="relative z-10 px-6 pb-24 md:px-20">

        <div className="mx-auto max-w-3xl rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

          <h2 className="text-center text-4xl font-black">
            Solicita una Demo
          </h2>

          <p className="mt-4 text-center text-zinc-400">
            Déjanos tus datos y te contactaremos.
          </p>

          <div className="mt-10 grid gap-6">

            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 text-white outline-none"
            />

            <button
              onClick={guardarLead}
              className="rounded-2xl bg-white py-5 font-bold text-black transition hover:scale-[1.02]"
            >
              Enviar Información
            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="relative z-10 grid gap-8 px-6 pb-32 md:grid-cols-3 md:px-20">

        <motion.div
          whileHover={{ y: -10 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <Zap className="mb-6 h-12 w-12 text-white" />

          <h3 className="text-2xl font-bold">
            Automatización
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            Reduce tiempos y automatiza procesos internos de tu CDA.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <Phone className="mb-6 h-12 w-12 text-white" />

          <h3 className="text-2xl font-bold">
            WhatsApp Integrado
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            Atiende clientes y agenda citas automáticamente.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <Smartphone className="mb-6 h-12 w-12 text-white" />

          <h3 className="text-2xl font-bold">
            App Profesional
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            Lleva tu Centro CDA al siguiente nivel tecnológico.
          </p>
        </motion.div>

      </section>

      {/* FLOATING WHATSAPP */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-white px-6 py-4 font-bold text-black shadow-[0_0_50px_rgba(255,255,255,0.15)]"
      >
        <Phone className="h-6 w-6" />
        WhatsApp
      </motion.button>
    <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-zinc-500">

  <p>
    © 2026 CDA PRO — Plataforma Inteligente para Centros CDA
  </p>

  <p className="mt-2 text-sm">
    Automatización • WhatsApp • Agendamiento • IA
  </p>

</footer>
    </div>
  );
}