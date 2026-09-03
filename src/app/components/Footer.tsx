export default function Footer() {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f0] to-[#f5ede4] paper-texture" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-px bg-rose-300/30" />
        </div>
        
        <p className="font-great-vibes text-4xl md:text-5xl text-rose-700/70">
          Te esperamos
        </p>
        
        <p className="font-cormorant text-lg text-rose-500/60 max-w-sm mx-auto tracking-wide">
          Tu presencia hará este día aún más especial. ¡Nos vemos pronto!
        </p>
        
        <div className="pt-8">
          
        </div>
      </div>
    </footer>
  )
}