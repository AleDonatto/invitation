export default function ParentsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden paper-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f0] via-white to-[#faf6f0] paper-texture" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
        {/* Decoración */}
        <div className="flex justify-center">
          <div className="w-16 h-px bg-rose-300/30" />
        </div>

        <div className="space-y-6">
          <p className="font-cormorant text-2xl text-rose-500/70 tracking-wider">
            Mis Padres
          </p>
          <p className="font-cormorant text-3xl md:text-4xl text-rose-700/80 tracking-wide">
            Silvia Mendoza García
          </p>
          <p className="font-cormorant text-2xl text-rose-500/60">&amp;</p>
          <p className="font-cormorant text-3xl md:text-4xl text-rose-700/80 tracking-wide">
            Miguel Fonseca Gálvez
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-rose-300/20" />
          <span className="text-rose-300/30">✦</span>
          <div className="w-12 h-px bg-rose-300/20" />
        </div>

        <div className="space-y-4">
          <p className="font-great-vibes text-4xl text-rose-600/70">
            ¡Gracias por estar aquí!
          </p>
          <p className="font-cormorant text-xl text-rose-500/60 tracking-wider">
            Con todo mi corazón, agradezco a
          </p>
          <p className="font-great-vibes text-5xl text-rose-700/80">
            Mis Padrinos
          </p>
          <p className="font-cormorant text-xl text-rose-500/60 tracking-wider">
            por ser parte de esta nueva etapa.
          </p>

          <div className="">
            <img src="./images/padrinos.jpeg" alt="Padrinos" className="mx-auto w-64 md:w-80 rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-16 h-px bg-rose-300/30" />
        </div>
      </div>
    </section>
  )
}