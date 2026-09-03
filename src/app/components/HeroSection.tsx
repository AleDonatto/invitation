'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Fondo con textura de papel y degradado */}
      <div className="absolute inset-0  colorful-border" />
      
      {/* Marco decorativo floral */}
      <div className="absolute inset-0 floral-border opacity-30" />
      
      {/* Elementos decorativos de flores (simulados con CSS) */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <div className="absolute top-0 left-0 w-8 h-8 bg-rose-200 rounded-full blur-xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-pink-200 rounded-full blur-xl" />
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20">
        <div className="absolute top-0 right-0 w-10 h-10 bg-rose-200 rounded-full blur-xl" />
        <div className="absolute bottom-0 left-0 w-14 h-14 bg-pink-200 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        {/* Separador decorativo superior */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-rose-300/50" />
          <div className="text-rose-300/50">✦</div>
          <div className="w-12 h-px bg-rose-300/50" />
        </div>

        <p className="font-cormorant text-2xl md:text-3xl text-rose-600/70 tracking-wider">
          Queremos compartir contigo una
        </p>
        
        <h1 className="font-great-vibes text-5xl md:text-7xl text-rose-700 leading-none">
          bendición muy especial:
        </h1>

        <div className="space-y-4 mt-8">
          <p className="font-cormorant text-3xl md:text-4xl text-rose-500/80 tracking-wider">
            el Bautizo
          </p>
          
          <h2 className="font-great-vibes text-6xl md:text-8xl text-rose-800 leading-none">
            Sofía Carolina
          </h2>
          
          <p className="font-cormorant text-2xl md:text-3xl text-rose-500/80 tracking-wider">
            de nuestra hija
          </p>
          
          <p className="font-cormorant text-xl md:text-2xl text-rose-400/70">
            y primer año
          </p>

          {/* Línea decorativa con puntos */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-16 h-px bg-rose-300/30" />
            <span className="text-rose-300/30 text-sm">✦</span>
            <div className="w-16 h-px bg-rose-300/30" />
          </div>

          <p className="font-cormorant text-3xl md:text-4xl text-rose-600/80 tracking-wider">
            Mendoza Rivera
          </p>

          <div 
            className="relative w-full max-w-2xl mx-auto"
            style={{
                aspectRatio: '1/1', // Mantiene el círculo perfecto
                width: '100%',

            }}
            >
                <div 
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: 'url("./images/circulo.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
  
                {/* Contenedor de la imagen (dentro del marco) */}
                <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                            src="/images/hija.jpeg"
                            alt="Sofía Carolina"
                            fill
                            className="object-cover p-[10%] rounded-full shadow-lg"
                            style={{
                                objectPosition: 'center 10%' // 👈 AQUÍ SE MUEVE LA IMAGEN
                            }}
                            sizes="(max-width: 768px) 80vw, 400px"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Botón de música con estilo vintage */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="group inline-flex items-center gap-3 px-8 py-3 bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-rose-200/50 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="text-rose-400 group-hover:text-rose-500 transition-colors">
            {isPlaying ? '⏸' : '▶'}
          </span>
          <span className="font-cormorant text-rose-600/80 tracking-wider">
            Haz Clic para reproducir
          </span>
        </button>

        {/* Versículo con estilo elegante */}
        <div className="max-w-2xl mx-auto mt-12 p-6 vintage-border rounded-lg bg-white/30 backdrop-blur-sm">
          <p className="font-cormorant text-lg md:text-xl text-rose-700/70 italic leading-relaxed tracking-wide">
            "Señor, gracias por enviarnos a este ángel a nuestras vidas. 
            Hoy lo consagramos a Ti para que guíes siempre sus pasos."
          </p>
        </div>

        {/* Decoración inferior */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-rose-300/20" />
          ))}
        </div>
      </div>
    </section>
  )
}