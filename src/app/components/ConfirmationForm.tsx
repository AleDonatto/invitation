'use client'
import { useState } from 'react'

export default function ConfirmationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Confirmación:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f0] via-white to-[#faf6f0] paper-texture" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center">
            <div className="w-16 h-px bg-rose-300/30" />
          </div>
          <p className="font-great-vibes text-4xl text-rose-700/80">
            Confirmación
          </p>
          <p className="font-cormorant text-lg text-rose-500/70 tracking-wide max-w-md mx-auto">
            Será un honor contar con tu presencia. Agradeceremos tu confirmación 
            para organizar todo con cariño.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm vintage-border rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-cormorant text-rose-600/80 mb-1.5 tracking-wide">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/50 border border-rose-200/50 rounded-lg focus:ring-1 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 font-cormorant text-rose-700"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block font-cormorant text-rose-600/80 mb-1.5 tracking-wide">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/50 border border-rose-200/50 rounded-lg focus:ring-1 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 font-cormorant text-rose-700"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-cormorant text-rose-600/80 mb-1.5 tracking-wide">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/50 border border-rose-200/50 rounded-lg focus:ring-1 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 font-cormorant text-rose-700"
                  placeholder="Teléfono"
                />
              </div>
              <div>
                <label className="block font-cormorant text-rose-600/80 mb-1.5 tracking-wide">
                  Acompañantes
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/50 border border-rose-200/50 rounded-lg focus:ring-1 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 font-cormorant text-rose-700"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-cormorant text-rose-600/80 mb-1.5 tracking-wide">
                Mensaje especial
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2.5 bg-white/50 border border-rose-200/50 rounded-lg focus:ring-1 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 font-cormorant text-rose-700 resize-none"
                placeholder="Tu mensaje..."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-10 py-3 bg-rose-600/80 hover:bg-rose-700/80 text-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-cormorant text-lg tracking-wider backdrop-blur-sm"
              >
                Sí asistiré
              </button>
            </div>

            {isSubmitted && (
              <div className="text-center font-great-vibes text-2xl text-rose-600 animate-fadeIn">
                ¡Gracias por confirmar! ✨
              </div>
            )}
          </form>
        </div>

        {/* Sugerencia de regalos */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-px bg-rose-300/30" />
          </div>
          <h4 className="font-cormorant text-2xl text-rose-600/80 tracking-wide">
            Sugerencia de regalos
          </h4>
          <p className="font-cormorant text-rose-500/60 max-w-md mx-auto">
            Tu presencia es el mejor regalo, pero si deseas obsequiarme algo 
            será muy agradecido
          </p>
          <p className="font-great-vibes text-3xl text-rose-700/70">
            Regalo en sobre
          </p>
          <div className="inline-block px-6 py-2 bg-rose-100/50 border border-rose-200/30 rounded-full">
            <span className="font-cormorant text-sm text-rose-600/70 tracking-wider">
              Dress Code: Formal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}