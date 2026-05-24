import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Ramírez",
    role: "Administrador CDA",
    text: "Reducimos los tiempos de agendamiento y mejoramos completamente la atención al cliente.",
  },
  {
    name: "Laura Gómez",
    role: "Directora Operativa",
    text: "Ahora gestionamos clientes y vehículos desde una plataforma moderna y rápida.",
  },
  {
    name: "Andrés Torres",
    role: "Gerente CDA",
    text: "CDA PRO nos ayudó a automatizar procesos y aumentar la productividad.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 pb-32 md:px-20">

      {/* BACKGROUND */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TITLE */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            TESTIMONIOS
          </p>

          <h2 className="text-5xl font-black md:text-7xl">

            Lo que dicen
            <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              nuestros clientes
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">

            CDA PRO está ayudando a modernizar y automatizar
            centros CDA en Colombia.

          </p>

        </div>

        {/* GRID */}

        <div className="grid gap-10 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
            >

              {/* STARS */}

              <div className="mb-6 flex gap-2">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-cyan-400 text-cyan-400"
                  />
                ))}

              </div>

              {/* TEXT */}

              <p className="text-lg leading-relaxed text-zinc-300">

                “{item.text}”

              </p>

              {/* USER */}

              <div className="mt-10 flex items-center gap-4">

                {/* AVATAR */}

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/20 text-xl font-black text-cyan-400">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h3 className="text-lg font-black">
                    {item.name}
                  </h3>

                  <p className="text-zinc-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}