import { motion } from 'framer-motion';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ChevronRight, ShieldCheck, Smartphone, Zap, BarChart3, MessageCircle, CheckCircle2, Phone, Download } from 'lucide-react';

export default function CDAPROLandingPage() {
  const supabaseUrl = 'https://fbwolylobyoskvusiecn.supabase.co';
  const supabaseAnonKey = 'sb_publishable_OYEveoSbvdnUUrX97xvgLQ_qByO7XQ3';

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { error } = await supabase
        .from('leads_cda')
        .insert([
          {
            nombre: formData.nombre,
            empresa: formData.empresa,
            telefono: formData.telefono,
            email: formData.email,
          },
        ]);

      if (error) throw error;

      setSuccess(true);

      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        email: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error enviando formulario');
    } finally {
      setLoading(false);
    }
  };
  const whatsappNumber = '573001234567';

  const whatsappMessage = encodeURIComponent(
    'Hola, quiero información sobre CDA PRO y una demostración de la plataforma.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  const apkUrl = 'https://tu-dominio.com/app/cda-pro.apk';

  const downloadAPK = () => {
    window.open(apkUrl, '_blank');
  };
  const testimonials = [
    {
      name: 'Carlos Ramírez',
      company: 'CDA Premium Motors',
      text: 'Pasamos de responder manualmente WhatsApp a automatizar todo el proceso. Incrementamos las citas en menos de 2 meses.',
    },
    {
      name: 'Andrés Molina',
      company: 'Tecno CDA',
      text: 'CDA PRO cambió completamente la percepción de nuestros clientes. Ahora parecemos una empresa tecnológica premium.',
    },
    {
      name: 'Sandra López',
      company: 'CDA AutoCheck',
      text: 'La automatización y seguimiento por WhatsApp aumentó nuestras conversiones y redujo pérdidas de clientes.',
    },
  ];

  const benefits = [
    {
      title: 'Automatización Inteligente',
      description:
        'Reduce tiempos operativos y elimina procesos manuales dentro del CDA.',
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: 'WhatsApp Integrado',
      description:
        'Recordatorios automáticos, campañas y seguimiento de clientes.',
      icon: <MessageCircle className="h-8 w-8" />,
    },
    {
      title: 'Dashboard en Tiempo Real',
      description:
        'Control total de revisiones, clientes, ingresos y productividad.',
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: 'Acceso Multidispositivo',
      description:
        'Gestiona todo desde celular, tablet o computador.',
      icon: <Smartphone className="h-8 w-8" />,
    },
  ];

  return (
    <>

      {/* SEO META TAGS REMOVED FOR REACT COMPATIBILITY */}

      <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_25%)]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <div>
            <h1 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-3xl font-black tracking-tight text-transparent">
              CDA PRO
            </h1>
          </div>

          <nav className="hidden gap-10 text-sm text-slate-300 lg:flex">
            <a href="#features" className="transition hover:text-white">Funciones</a>
            <a href="#results" className="transition hover:text-white">Resultados</a>
            <a href="#pricing" className="transition hover:text-white">Planes</a>
            <a href="#contact" className="transition hover:text-white">Contacto</a>
          </nav>

          <button
            onClick={openWhatsApp}
            className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 px-6 py-3 font-semibold shadow-2xl shadow-green-500/30 transition hover:scale-105"
          >
            WhatsApp Demo
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-12 lg:pt-28">
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-10 grayscale"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-futuristic-data-center-1560672785258?download=1080p"
            type="video/mp4"
          />
        </video>

        {/* VIDEO OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4" />
              Plataforma premium para CDA
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-8xl">
              La nueva era digital
              <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                para Centros CDA
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
              Mientras otros CDA siguen trabajando manualmente y perdiendo clientes todos los días, CDA PRO convierte tu operación en una máquina automatizada de agendamientos y seguimiento.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-300 backdrop-blur-xl">
              ⚠️ Cada día sin automatización significa clientes perdidos y menos ingresos.
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <button
                onClick={openWhatsApp}
                className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 px-8 py-5 text-lg font-bold shadow-2xl shadow-green-500/30 transition hover:scale-105"
              >
                Hablar por WhatsApp
                <ChevronRight className="transition group-hover:translate-x-1" />
              </button>

              <button
                onClick={downloadAPK}
                className="group flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/5 px-8 py-5 text-lg font-semibold backdrop-blur-xl transition hover:scale-105 hover:bg-white/10"
              >
                Descargar APK
                <Download className="h-5 w-5 transition group-hover:translate-y-1" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-yellow-300">
                🔥 Cupos limitados para implementación este mes
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300">
                +120 CDA interesados actualmente
              </div>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-4xl font-black text-cyan-300">+85%</h3>
                <p className="mt-2 text-sm text-slate-400">Más agendamientos</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-300">24/7</h3>
                <p className="mt-2 text-sm text-slate-400">Automatización</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-300">100%</h3>
                <p className="mt-2 text-sm text-slate-400">Digital y escalable</p>
              </div>
            </div>
          </motion.div>

          {/* DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(37,99,235,0.15)] backdrop-blur-2xl">
              <div className="rounded-[30px] border border-white/10 bg-[#07111f] p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold">CDA PRO Dashboard</h3>
                    <p className="mt-2 text-slate-400">Sistema inteligente operativo</p>
                  </div>

                  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-3 text-green-300">
                    Sistema Online
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-3xl border border-blue-500/10 bg-gradient-to-br from-blue-500/20 to-transparent p-6">
                    <p className="text-sm text-slate-400">Citas del día</p>
                    <h3 className="mt-3 text-5xl font-black">48</h3>
                  </div>

                  <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/20 to-transparent p-6">
                    <p className="text-sm text-slate-400">Clientes nuevos</p>
                    <h3 className="mt-3 text-5xl font-black">12</h3>
                  </div>

                  <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-500/20 to-transparent p-6">
                    <p className="text-sm text-slate-400">Mensajes enviados</p>
                    <h3 className="mt-3 text-5xl font-black">324</h3>
                  </div>

                  <div className="rounded-3xl border border-green-500/10 bg-gradient-to-br from-green-500/20 to-transparent p-6">
                    <p className="text-sm text-slate-400">Ingresos</p>
                    <h3 className="mt-3 text-5xl font-black">$8.4M</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-black lg:text-6xl">
              Tecnología diseñada
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                para hacer crecer tu CDA
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
              Convierte procesos lentos y manuales en una experiencia moderna y automatizada.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:border-cyan-500/40 hover:bg-cyan-500/[0.06]"
              >
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-5 text-cyan-300">
                  {benefit.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">{benefit.title}</h3>

                <p className="mt-5 leading-relaxed text-slate-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PSYCHOLOGICAL SECTION */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-red-500/10 bg-gradient-to-br from-red-500/10 via-transparent to-cyan-500/10 p-12 backdrop-blur-2xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm text-red-300">
                El verdadero problema de muchos CDA
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
                Cada cliente que no responde...
                <span className="block text-red-400">probablemente termina en otro CDA</span>
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-slate-300">
                Muchos Centros de Diagnóstico siguen usando procesos lentos, agendas manuales y respuestas tardías por WhatsApp. Eso genera pérdidas invisibles todos los días.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  'Clientes olvidan sus citas',
                  'El personal pierde tiempo respondiendo mensajes',
                  'No existe seguimiento automático',
                  'La competencia parece más moderna y rápida',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <span className="text-red-400">✖</span>
                    <p className="text-lg text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-cyan-500/20 bg-cyan-500/[0.04] p-10">
              <div className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm text-green-300">
                La solución moderna
              </div>

              <h3 className="mt-8 text-4xl font-black leading-tight">
                CDA PRO automatiza, vende y hace seguimiento por ti.
              </h3>

              <div className="mt-10 space-y-5">
                {[
                  'Confirmaciones automáticas por WhatsApp',
                  'Más citas y menos cancelaciones',
                  'Imagen premium y tecnológica',
                  'Seguimiento inteligente de clientes',
                  'Más confianza y percepción profesional',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.04] p-4">
                    <span className="text-cyan-300">✔</span>
                    <p className="text-lg text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Prueba social
          </div>

          <h2 className="mt-8 text-5xl font-black lg:text-6xl">
            Los CDA que evolucionan primero
            <span className="block text-cyan-300">capturan más clientes</span>
          </h2>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                whileHover={{ y: -8 }}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-left backdrop-blur-2xl"
              >
                <div className="mb-6 flex text-yellow-400">
                  ★★★★★
                </div>

                <p className="text-lg leading-relaxed text-slate-300">
                  “{testimonial.text}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="mt-2 text-slate-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-black leading-tight lg:text-6xl">
              Resultados que
              <span className="block text-cyan-300">impactan tu negocio</span>
            </h2>

            <div className="mt-10 space-y-8">
              {[
                'Incrementa agendamientos automáticamente',
                'Reduce pérdidas de clientes',
                'Automatiza seguimiento y marketing',
                'Mejora la experiencia del usuario',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="h-7 w-7 text-cyan-300" />
                  <p className="text-lg text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl">
            <div className="space-y-8">
              <div>
                <div className="mb-3 flex justify-between text-sm text-slate-400">
                  <span>Incremento de productividad</span>
                  <span>90%</span>
                </div>
                <div className="h-4 rounded-full bg-white/10">
                  <div className="h-4 w-[90%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>
              </div>

              <div>
                <div className="mb-3 flex justify-between text-sm text-slate-400">
                  <span>Automatización</span>
                  <span>95%</span>
                </div>
                <div className="h-4 rounded-full bg-white/10">
                  <div className="h-4 w-[95%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-3 flex justify-between text-sm text-slate-400">
                  <span>Satisfacción del cliente</span>
                  <span>98%</span>
                </div>
                <div className="h-4 rounded-full bg-white/10">
                  <div className="h-4 w-[98%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-16 shadow-[0_0_80px_rgba(255,255,255,0.06)]">
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-black leading-tight lg:text-7xl">
              Lleva tu CDA
              <span className="block">al futuro digital</span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">
              Empieza hoy con la plataforma más moderna para Centros de Diagnóstico Automotor.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <button
                onClick={downloadAPK}
                className="group flex items-center gap-3 rounded-2xl bg-black/30 px-10 py-5 text-lg font-bold text-white backdrop-blur-xl transition hover:scale-105"
              >
                Descargar APK
                <Download className="h-5 w-5 transition group-hover:translate-y-1" />
              </button>
              <button
                onClick={openWhatsApp}
                className="rounded-2xl bg-white px-10 py-5 text-lg font-black text-slate-900 transition hover:scale-105"
              >
                Solicitar Presentación
              </button>

              <button
                onClick={openWhatsApp}
                className="rounded-2xl border border-white/30 bg-white/10 px-10 py-5 text-lg font-bold backdrop-blur-xl transition hover:bg-white/20"
              >
                Hablar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              Solicita una demostración
            </h2>

            <p className="mt-5 text-lg text-slate-400">
              Déjanos tus datos y te contactaremos para mostrarte CDA PRO.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 grid gap-6">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre completo"
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-white outline-none transition focus:border-cyan-400"
            />

            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre del CDA"
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-white outline-none transition focus:border-cyan-400"
            />

            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Número de WhatsApp"
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-white outline-none transition focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-white outline-none transition focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-5 text-lg font-bold transition hover:scale-[1.02]"
            >
              {loading ? 'Enviando...' : 'Solicitar Información'}
            </button>

            {success && (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-center text-green-300">
                Información enviada correctamente.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
          <div>
            <h3 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-black text-transparent">
              CDA PRO
            </h3>
            <p className="mt-3 text-slate-500">
              Transformación digital para Centros de Diagnóstico Automotor.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="transition hover:text-white">Inicio</a>
            <a href="#features" className="transition hover:text-white">Funciones</a>
            <a href="#results" className="transition hover:text-white">Resultados</a>
            <a href="#contact" className="transition hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-white px-6 py-4 text-black shadow-[0_0_50px_rgba(255,255,255,0.12)] transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="hidden font-bold sm:block">WhatsApp</span>
      </motion.button>
    </div>
    </>
  );
}
