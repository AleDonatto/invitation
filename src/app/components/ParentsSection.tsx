"use client";
import { motion } from "framer-motion";

export default function ParentsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden paper-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f0] via-white to-[#faf6f0] paper-texture" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
        {/* Decoración */}
        <div className="flex justify-center">
          <div className="w-16 h-px bg-rose-700/30" />
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
            transition={{ duration: 0.6, ease: "linear" }}
            className=""
          >
            <p className="font-great-vibes text-5xl text-rose-500/70 tracking-wider mb-16">
              Mis Padres
            </p>
            <p className="font-cormorant text-3xl md:text-4xl text-rose-700/80 tracking-wide">
              Adilene Kahory Villegas Lopéz
            </p>
            <p className="font-cormorant text-2xl text-rose-500/60">&amp;</p>
            <p className="font-cormorant text-3xl md:text-4xl text-rose-700/80 tracking-wide">
              Angel Noel Felipe Rodriguez
            </p>

            <div className="mt-10">
              <img
                src="./images/padres.jpeg"
                alt="Padres"
                className="mx-auto w-64 md:w-80 rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-rose-300/20" />
          <span className="text-rose-700/30">✦</span>
          <div className="w-12 h-px bg-rose-300/20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
          transition={{ duration: 0.6, ease: "linear" }}
          className=""
        >
          <div className="space-y-4">
            <p className="font-great-vibes text-4xl text-rose-600/70">
              ¡Gracias por estar aquí!
            </p>
            <p className="font-cormorant text-xl text-rose-500/60 tracking-wider my-10">
              Con todo mi corazón, agradezco a
            </p>
            <p className="font-great-vibes text-5xl text-rose-700/80">
              Mis Padrinos
            </p>
            <p className="font-cormorant text-3xl text-rose-700/80">
              Alicia Guevara
            </p>
            <p className="font-cormorant text-3xl text-rose-700/80">Y</p>
            <p className="font-cormorant text-3xl text-rose-700/80">
              Daniel Amigon
            </p>
            <p className="font-cormorant text-xl text-rose-500/60 tracking-wider">
              por ser parte de esta nueva etapa.
            </p>

            <div className="">
              <img
                src="./images/padrinos.jpeg"
                alt="Padrinos"
                className="mx-auto w-64 md:w-80 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-16 h-px bg-rose-700/30" />
        </div>
      </div>
    </section>
  );
}
