import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "¿CDA PRO funciona en cualquier CDA?",
    answer:
      "Sí. CDA PRO está diseñado para adaptarse a diferentes centros CDA y procesos operativos.",
  },
  {
    question: "¿La app incluye integración con WhatsApp?",
    answer:
      "Sí. Puedes automatizar atención, seguimiento y comunicación con clientes mediante WhatsApp.",
  },
  {
    question: "¿Puedo usar CDA PRO desde celular?",
    answer:
      "Sí. La plataforma está optimizada para dispositivos móviles y escritorio.",
  },
  {
    question: "¿La información queda guardada en la nube?",
    answer:
      "Sí. Toda la información se almacena de forma segura mediante infraestructura cloud.",
  },
  {
    question: "¿Incluye soporte técnico?",
    answer:
      "Sí. Todos los planes incluyen soporte y acompañamiento técnico.",
  },
  {
    question: "¿Puedo solicitar funciones personalizadas?",
    answer:
      "Sí. CDA PRO puede adaptarse según las necesidades específicas de cada operación.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-6 pb-32 md:px-20">

      {/* BACKGROUND */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* TITLE */}

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </p>

          <h2 className="text-5xl font-black md:text-7xl">

            Preguntas
            <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              frecuentes
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">

            Resolvemos las dudas más comunes sobre CDA PRO.

          </p>

        </div>

        {/* FAQ ITEMS */}

        <div className="space-y-6">

          {faqData.map((item, index) => {

            const isOpen = openIndex === index;

            return (

              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              >

                {/* BUTTON */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <span className="text-xl font-bold">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                  >

                    <ChevronDown className="h-6 w-6 text-cyan-400" />

                  </motion.div>

                </button>

                {/* CONTENT */}

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >

                      <div className="px-8 pb-8 text-lg leading-relaxed text-zinc-400">

                        {item.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}