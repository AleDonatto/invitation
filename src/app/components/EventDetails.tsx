'use client'
import { useState } from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'

type EventTab = 'church' | 'reception'
const tabs: EventTab[] = ['church', 'reception']

export default function EventDetails() {
  const [activeTab, setActiveTab] = useState<EventTab>('church')

  const events = {
    church: {
      title: 'Misa',
      date: 'Domingo 28 de junio',
      time: '12:00 p.m',
      location: 'Parroquia de Nuestra Señora de Guadalupe',
      address: 'Ejido Modelo',
      url: 'https://maps.app.goo.gl/JNmPPScBTeoyF4548?g_st=iw'
    },
    reception: {
      title: 'Recepción',
      date: 'Domingo 28 de junio',
      time: '5:00 p.m',
      location: 'Terraza de Chavarro',
      address: 'Colonia Unidad Deportiva, Tizapán el Alto, Jalisco',
      url: 'https://maps.app.goo.gl/HD1ZqcKhdg6xjmd16?g_st=iw'
    }
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f0] via-[#f5ede4] to-[#faf6f0] paper-texture" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-px bg-rose-300/30" />
          </div>
          <p className="font-cormorant text-3xl text-rose-600/70 tracking-wider">
            Detalles del Evento
          </p>
        </div>

        {/* Tabs estilo vintage */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 font-cormorant tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-rose-600/10 text-rose-700 border-b-2 border-rose-400'
                  : 'text-rose-400/60 hover:text-rose-500 border-b-2 border-transparent'
              }`}
            >
              {tab === 'church' ? 'Misa' : 'Recepción'}
            </button>
          ))}
        </div>

        {/* Tarjeta de evento estilo invitación */}
        <div className="bg-white/60 backdrop-blur-sm vintage-border rounded-lg p-8 md:p-12 shadow-sm">
          <div className="space-y-8">
            <h4 className="font-great-vibes text-4xl text-rose-700 text-center">
              {events[activeTab].title}
            </h4>

            <div className="space-y-4 max-w-sm mx-auto">
              <div className="flex items-center justify-center gap-3 text-rose-600/70">
                <Calendar className="w-4 h-4 text-rose-400" />
                <span className="font-cormorant text-lg">{events[activeTab].date}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-rose-600/70">
                <Clock className="w-4 h-4 text-rose-400" />
                <span className="font-cormorant text-lg">{events[activeTab].time}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-rose-600/70">
                <MapPin className="w-4 h-4 text-rose-400" />
                <div className="text-center">
                  <p className="font-cormorant text-lg">{events[activeTab].location}</p>
                  <p className="font-cormorant text-sm text-rose-400/60">
                    {events[activeTab].address}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="group inline-flex items-center gap-2 px-6 py-2 text-rose-400/70 hover:text-rose-600 transition-colors border border-rose-200/30 hover:border-rose-300/50 rounded-full cursor-pointer"
                onClick={() => window.open(events[activeTab].url, '_blank')}>
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-cormorant text-sm tracking-wider">ver ubicación</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}