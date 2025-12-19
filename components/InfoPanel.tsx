
import React from 'react';
import { DiseaseData } from '../types';

interface InfoPanelProps {
  disease: DiseaseData | null;
  isWhiteMatterMode: boolean;
  progressionLevel: number;
  setProgressionLevel: (level: number) => void;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ disease, isWhiteMatterMode, progressionLevel, setProgressionLevel, onClose }) => {
  // Módulo de Sustancia Blanca
  if (isWhiteMatterMode) {
    return (
      <div className="h-full flex flex-col bg-slate-900 text-white overflow-y-auto animate-in slide-in-from-right duration-500">
        <div className="p-6 border-b border-white/10 sticky top-0 bg-slate-900 z-10 shadow-xl">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[9px] font-black text-sky-400 border border-sky-400 px-2 py-0.5 rounded-full uppercase tracking-widest">Fisiología del SNC</span>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <h2 className="text-3xl font-black leading-tight">Sustancia Blanca Cerebral</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium italic">La infraestructura de conectividad humana.</p>
        </div>

        <div className="p-6 space-y-10 pb-20">
          <section>
            <h3 className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-3">¿Qué es la Sustancia Blanca?</h3>
            <p className="text-slate-200 text-[13px] leading-relaxed mb-4 font-medium">
              Conjunto de axones recubiertos por <strong>mielina</strong>. A diferencia de la sustancia gris (cuerpos neuronales), la blanca conecta regiones distantes del cerebro.
            </p>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <h4 className="text-[9px] font-black text-slate-400 uppercase mb-2">Composición Crítica</h4>
              <ul className="space-y-1.5 text-[11px]">
                <li className="flex gap-2 text-slate-300"><span>•</span> <span><strong>70-85% Lípidos:</strong> Colesterol y galactocerebrósido.</span></li>
                <li className="flex gap-2 text-slate-300"><span>•</span> <span><strong>Proteínas:</strong> PLP1 y MBP (esenciales para el aislamiento).</span></li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-3">¿Para qué sirve?</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 bg-sky-600/20 rounded-xl border border-sky-600/30">
                <h5 className="text-[10px] font-black uppercase mb-1">Conducción Saltatoria</h5>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Permite que los impulsos "salten" entre nodos de Ranvier, acelerando la transmisión hasta 100 veces.
                </p>
              </div>
              <div className="p-4 bg-emerald-600/20 rounded-xl border border-emerald-600/30">
                <h5 className="text-[10px] font-black uppercase mb-1">Sincronización</h5>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Asegura que la información motora y sensorial llegue coordinada a los centros de comando.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Módulo de Patología con colores personalizados
  if (!disease) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 text-center text-slate-400 bg-white">
        <div className="mb-6 opacity-10">
          <svg className="w-40 h-40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <p className="text-sm font-black text-slate-300 uppercase tracking-widest">Enciclopedia de Leucodistrofias</p>
        <p className="text-[10px] mt-2 font-bold uppercase tracking-tight">Seleccione un módulo para comenzar el estudio</p>
      </div>
    );
  }

  const currentStage = disease.stages[progressionLevel];
  const colorBg = `${disease.color}08`; // Ultra light transparency
  const colorBorder = `${disease.color}30`;
  const colorText = disease.color;

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto animate-in slide-in-from-right duration-300" style={{ backgroundColor: colorBg }}>
      {/* Header */}
      <div className="p-6 border-b sticky top-0 bg-white/90 backdrop-blur-md z-10 shadow-sm" style={{ borderColor: colorBorder }}>
        <div className="flex justify-between items-start mb-1">
          <span className="text-[8px] font-black text-white px-2 py-0.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: disease.color }}>Módulo Experto Residentes</span>
          <button onClick={onClose} className="text-slate-300 hover:text-slate-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <h2 className="text-3xl font-black leading-tight" style={{ color: '#1e293b' }}>{disease.name}</h2>
        <p className="text-[10px] font-bold uppercase tracking-wide mt-0.5" style={{ color: colorText }}>{disease.fullName}</p>
      </div>

      {/* Simulator Slider */}
      <div className="px-6 py-4 bg-slate-900 text-white">
        <div className="flex justify-between items-center mb-3">
           <label className="text-[9px] font-black uppercase tracking-widest text-sky-400">Progresión del Caso</label>
           <span className="text-[9px] font-bold text-white/60 uppercase">{currentStage.timeLabel}</span>
        </div>
        <input 
          type="range" min="0" max="2" step="1" 
          value={progressionLevel} 
          onChange={(e) => setProgressionLevel(parseInt(e.target.value))}
          className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
        />
      </div>

      {/* Medical Content Sections */}
      <div className="p-6 space-y-10 pb-20">
        
        {/* Historia Clínica */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white" style={{ backgroundColor: disease.color }}>01</div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-800">Historia Clínica y Riesgos</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[13px] leading-relaxed text-slate-700 font-medium">{disease.historyBase}</p>
            </div>
            <div className="p-4 rounded-xl border" style={{ backgroundColor: `${disease.color}15`, borderColor: colorBorder }}>
              <p className="text-[9px] font-black uppercase mb-1" style={{ color: colorText }}>Presentación en este estadio:</p>
              <p className="text-[12px] text-slate-700 leading-relaxed font-bold italic">"{currentStage.symptoms}"</p>
            </div>
          </div>
        </section>

        {/* Signos de Alarma */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white" style={{ backgroundColor: disease.color }}>02</div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-800">Signos de Alarma</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {disease.warningSigns.map(sign => (
              <div key={sign} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: disease.color }}></div>
                <span className="text-[12px] font-bold text-slate-700">{sign}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Examen Físico y Hallazgos */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white" style={{ backgroundColor: disease.color }}>03</div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-800">Examen Físico y Pruebas</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md">
            <p className="text-[13px] leading-relaxed text-slate-800 font-black italic mb-3">"{currentStage.physicalExam}"</p>
            <div className="mt-2 pt-3 border-t border-slate-100">
              <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Marcadores Bioquímicos</p>
              <p className="text-[12px] font-bold text-slate-900">{disease.biomarkers}</p>
            </div>
          </div>
        </section>

        {/* RMN */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white" style={{ backgroundColor: disease.color }}>04</div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-800">Hallazgos Neuroimagen RMN</h3>
          </div>
          <div className="bg-slate-900 text-white p-5 rounded-2xl border-l-4" style={{ borderColor: disease.color }}>
             <p className="text-[12px] leading-relaxed font-medium opacity-90">{currentStage.mriDetails}</p>
          </div>
        </section>

        {/* Tratamiento y Pronóstico */}
        <section className="grid grid-cols-1 gap-4">
          <div className="p-6 rounded-2xl border bg-white" style={{ borderColor: colorBorder }}>
            <h3 className="text-[9px] font-black uppercase mb-2" style={{ color: colorText }}>Intervención Sugerida</h3>
            <p className="text-[13px] leading-relaxed font-bold text-slate-800">{disease.treatment}</p>
          </div>
          <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-[9px] font-black uppercase text-slate-500 mb-2">Pronóstico</h3>
            <p className="text-[13px] leading-relaxed text-slate-800 font-bold italic">{disease.prognosis}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoPanel;
