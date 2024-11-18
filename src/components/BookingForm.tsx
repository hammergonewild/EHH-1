import React from 'react';
import { Users, ArrowRight, Calendar } from 'lucide-react';

export default function BookingForm() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-[64px] z-10">
      <div className="bg-white rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          <div className="p-6 md:border-r border-gray-100 flex items-end">
            <div className="flex items-center space-x-2 text-hotel-gold">
              <h2 className="text-xl md:text-2xl font-karma">Aufenthalt planen</h2>
              <ArrowRight className="h-6 w-6 animate-[arrow-move_1.5s_ease-in-out_infinite]" />
            </div>
          </div>

          <div className="p-6 md:border-r border-gray-100">
            <label className="block text-sm text-gray-600 font-medium mb-2">
              ANREISE
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full bg-transparent text-gray-800 border-b border-gray-300 focus:border-hotel-gold pb-2 outline-none appearance-none"
                style={{ colorScheme: 'light' }}
              />
              <Calendar className="absolute right-0 bottom-2 h-5 w-5 text-hotel-gold pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>

          <div className="p-6 md:border-r border-gray-100">
            <label className="block text-sm text-gray-600 font-medium mb-2">
              ABREISE
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full bg-transparent text-gray-800 border-b border-gray-300 focus:border-hotel-gold pb-2 outline-none appearance-none"
                style={{ colorScheme: 'light' }}
              />
              <Calendar className="absolute right-0 bottom-2 h-5 w-5 text-hotel-gold pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>

          <div className="p-6 md:border-r border-gray-100">
            <label className="block text-sm text-gray-600 font-medium mb-2">
              GÄSTE
            </label>
            <div className="relative">
              <select 
                className="w-full bg-transparent text-gray-800 border-b border-gray-300 focus:border-hotel-gold pb-2 outline-none appearance-none cursor-pointer pr-8"
                style={{ colorScheme: 'light' }}
              >
                <option>1 Person</option>
                <option>2 Personen</option>
                <option>3 Personen</option>
                <option>4 Personen</option>
                <option>5+ Personen</option>
              </select>
              <Users className="absolute right-0 bottom-2 h-5 w-5 text-hotel-gold pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>

          <div className="p-6 flex items-end">
            <button className="w-full h-[52px] bg-hotel-gold hover:bg-hotel-gold/90 text-white rounded transition-colors duration-300 shadow-lg hover:shadow-xl flex flex-col items-center justify-center px-2 sm:px-4 md:px-6">
              <span className="text-[14px] font-medium leading-tight">Verfügbarkeit</span>
              <span className="text-[14px] font-medium leading-tight">prüfen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}