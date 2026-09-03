export default function MessageSection() {
  return (
    <section className="py-16 px-4 bg-white/80">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <p className="font-playfair text-3xl text-rose-700">Mis Padres</p>
          <p className="font-playfair text-2xl text-rose-600">
            Silvia Mendoza García &amp; Miguel Fonseca Gálvez
          </p>
        </div>
        
        <div className="w-16 h-0.5 bg-rose-300 mx-auto" />
        
        <div>
          <p className="font-playfair text-2xl text-rose-700 mb-2">¡Gracias por estar aquí!</p>
          <p className="font-playfair text-xl text-rose-600">
            Con todo mi corazón, agradezco a
          </p>
          <p className="font-playfair text-3xl text-rose-700 mt-2">Mis Padrinos</p>
          <p className="font-playfair text-xl text-rose-600">
            por ser parte de esta nueva etapa.
          </p>
        </div>
      </div>
    </section>
  )
}