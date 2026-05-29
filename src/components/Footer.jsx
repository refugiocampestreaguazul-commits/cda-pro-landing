import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/573105973951",
      "_blank"
    );
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 pb-10 pt-20 md:px-20">

      {/* GLOW */}

      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 md:grid-cols-4">

        {/* BRAND */}

        <div>

          <h2 className="text-4xl font-black">

            CDA
            <span className="text-cyan-400">
              {" "}PRO
            </span>

          </h2>

          <p className="mt-6 leading-relaxed text-zinc-400">

            Plataforma inteligente para automatizar
            y modernizar centros CDA con tecnología,
            IA y automatización avanzada.

          </p>

        </div>

        {/* LINKS */}

        <div>

          <h3 className="mb-6 text-xl font-black">
            Navegación
          </h3>

          <div className="space-y-4 text-zinc-400">

            <p className="cursor-pointer transition hover:text-cyan-400">
              Inicio
            </p>

            <p className="cursor-pointer transition hover:text-cyan-400">
              Funciones
            </p>

            <p className="cursor-pointer transition hover:text-cyan-400">
              Planes
            </p>

            <p className="cursor-pointer transition hover:text-cyan-400">
              Contacto
            </p>

          </div>

        </div>

        {/* CONTACT */}
<p className="text-zinc-400 mt-4">
  MAKROSOFT.NET S.A.S. - presenta "CDA PRO Tecnología Inteligente"
</p>
        <div>

          <h3 className="mb-6 text-xl font-black">
            Contacto
          </h3>

          <div className="space-y-5 text-zinc-400">

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-cyan-400" />

              <span>
                +57 310 597 3951
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Mail className="h-5 w-5 text-cyan-400" />

              <span>
                informacion.makrosoft@gmail.com
              </span>

            </div>
<div className="flex items-center gap-3">
    <MapPin className="h-5 w-5 text-cyan-400" />

    <span>
      Calle 15 # 16-36 2 piso - Duitama, Boyacá - Colombia
    </span>
  </div>
            <div className="flex items-center gap-3">

              <MapPin className="h-5 w-5 text-cyan-400" />


            </div>

          </div>

        </div>

        {/* SOCIAL */}

        {/*
<div>

  <h3 className="mb-6 text-xl font-black">
    Redes
  </h3>

  <div className="flex gap-4">

    ...

  </div>

</div>
*/}
      </div>

      {/* BOTTOM */}

      <div className="relative z-10 mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

        <p>
          © 2026 CDA PRO. Todos los derechos reservados.
        </p>

        <div className="flex gap-6">

          <p className="cursor-pointer transition hover:text-cyan-400">
            Privacidad
          </p>

          <p className="cursor-pointer transition hover:text-cyan-400">
            Términos
          </p>

        </div>

      </div>

    </footer>
  );
}