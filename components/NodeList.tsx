
import React from 'react';
import { DISEASES } from '../constants';
import { DiseaseData } from '../types';

interface NodeListProps {
  onSelect: (disease: DiseaseData) => void;
  selectedId?: string;
}

const NodeList: React.FC<NodeListProps> = ({ onSelect, selectedId }) => {
  return (
    <div className="flex flex-col gap-4 p-3 overflow-visible">
      {Object.values(DISEASES).map((disease) => (
        <div key={disease.id} className="relative group overflow-visible">
          {/* Botón Principal de la Especialidad */}
          <button
            onClick={() => onSelect(disease)}
            className={`w-full p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border shadow-sm ${
              selectedId === disease.id 
                ? 'bg-slate-50 border-current scale-[1.02] ring-1 ring-offset-2' 
                : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md'
            }`}
            style={{ 
              color: selectedId === disease.id ? disease.color : 'inherit',
              boxShadow: selectedId === disease.id ? `0 8px 15px -3px ${disease.color}30` : ''
            }}
          >
            <div 
              className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-md flex-shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: disease.color }}
            >
              {disease.name === 'General' ? 'DEF' : disease.name[0]}
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-[15px] font-black text-slate-900 leading-tight mb-1">{disease.name}</p>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest opacity-80">Unidad Clínica</p>
            </div>
          </button>

          {/* Pop-up Info: Posicionado para flotar sobre el Canvas sin ser recortado */}
          <div className="absolute left-[105%] top-0 w-80 bg-slate-900 text-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-[100] border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: disease.color }}></div>
              <h4 className="text-[11px] font-black uppercase tracking-widest text-sky-400">Resumen de Módulo</h4>
            </div>
            
            <h5 className="text-[13px] font-black mb-2 text-white leading-snug">
              {disease.fullName}
            </h5>
            
            <p className="text-[11px] leading-relaxed text-slate-300 font-medium mb-4">
              Explore los hallazgos de RMN, marcadores bioquímicos y protocolos de tratamiento específicos.
            </p>

            <div className="flex justify-between items-center pt-3 border-t border-white/5 text-[9px] font-black uppercase text-sky-500/90 tracking-tighter">
               <span className="animate-pulse">Click para iniciar estudio</span>
               <div className="flex gap-1">
                 <span className="opacity-40">ST-01</span>
                 <span>📖</span>
               </div>
            </div>

            {/* Triángulo indicador (Flecha) */}
            <div className="absolute -left-2 top-8 w-4 h-4 bg-slate-900 rotate-45 border-l border-b border-white/10"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NodeList;
