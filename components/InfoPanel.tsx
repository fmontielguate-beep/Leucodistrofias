
import React, { useState } from 'react';
import { DiseaseData, LeukodystrophyType } from '../types';

interface InfoPanelProps {
  disease: DiseaseData | null;
  isWhiteMatterMode: boolean;
  progressionLevel: number;
  setProgressionLevel: (level: number) => void;
  onClose: () => void;
}

const DeepDiveModal: React.FC<{ title: string; content: string; onClose: () => void }> = ({ title, content, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
    <div className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
      <div className="bg-slate-900 p-6 flex justify-between items-center">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Análisis de Subespecialidad</h4>
        <button onClick={onClose} className="text-white/50 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm font-medium whitespace-pre-line">{content}</p>
      </div>
      <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-end">
        <button onClick={onClose} className="bg-slate-900 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">Cerrar Análisis</button>
      </div>
    </div>
  </div>
);

const InfoPanel: React.FC<InfoPanelProps> = ({ disease, isWhiteMatterMode, progressionLevel, setProgressionLevel, onClose }) => {
  const [deepDive, setDeepDive] = useState<{ title: string; content: string } | null>(null);

  if (isWhiteMatterMode) {
    return (
      <div className="h-full flex flex-col bg-slate-900 text-white overflow-y-auto animate-in slide-in-from-right duration-500">
        <div className="p-6 border-b border-white/10 sticky top-0 bg-slate-900 z-10 shadow-xl">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[9px] font-black text-sky-400 border border-sky-400 px-2 py-0.5 rounded-full uppercase tracking-widest">Fisiología Avanzada</span>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <h2 className="text-3xl font-black leading-tight">Biología de la Mielina</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium italic">Fundamentos de la conectividad neuronal.</p>
        </div>

        <div className="p-6 space-y-10 pb-20">
          <section>
             <h3 className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-3">Microestructura</h3>
             <p className="text-slate-200 text-[13px] leading-relaxed mb-4">
               La mielina es una extensión de la membrana plasmática del <strong>oligodendrocito</strong>. Su función es el aislamiento eléctrico del axón para permitir la conducción saltatoria.
             </p>
             <button 
               onClick={() => setDeepDive({ title: 'Mecanismos de Mielinización', content: 'La mielina del SNC está compuesta por 70-85% lípidos y 15-30% proteínas. Las proteínas clave son PLP (Proteolipid Protein) y MBP (Myelin Basic Protein).\n\nEn las leucodistrofias hipomielinizantes, como PMD, hay una falla en el ensamblaje o compactación de estas capas, mientras que en las desmielinizantes, un insulto tóxico o inflamatorio destruye una vaina previamente sana.' })}
               className="text-[10px] font-black uppercase text-sky-400 flex items-center gap-2 hover:underline"
             >
               <span>+ Profundizar en Mecanismo Molecular</span>
               <span>🔬</span>
             </button>
          </section>
        </div>
        {deepDive && <DeepDiveModal title={deepDive.title} content={deepDive.content} onClose={() => setDeepDive(null)} />}
      </div>
    );
  }

  if (!disease) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 text-center text-slate-400 bg-white">
        <div className="mb-6 opacity-10">
          <svg className="w-40 h-40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <p className="text-sm font-black text-slate-300 uppercase tracking-widest">Enciclopedia Clínica Experta</p>
        <p className="text-[10px] mt-2 font-bold uppercase tracking-tight">Seleccione una entidad para análisis profundo</p>
      </div>
    );
  }

  const currentStage = disease.stages[progressionLevel];
  const colorBg = `${disease.color}05`;
  const colorBorder = `${disease.color}25`;

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto" style={{ backgroundColor: colorBg }}>
      {/* Header */}
      <div className="p-6 border-b sticky top-0 bg-white/95 backdrop-blur-md z-10 shadow-sm" style={{ borderColor: colorBorder }}>
        <div className="flex justify-between items-start mb-1">
          <span className="text-[8px] font-black text-white px-2 py-0.5 rounded-full uppercase tracking-widest" style={{ backgroundColor: disease.color }}>Nivel Subespecialidad</span>
          <button onClick={onClose} className="text-slate-300 hover:text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <h2 className="text-3xl font-black leading-tight text-slate-900">{disease.name}</h2>
        <p className="text-[10px] font-bold uppercase tracking-wide mt-0.5" style={{ color: disease.color }}>{disease.fullName}</p>
      </div>

      {/* Simulator Control */}
      <div className="px-6 py-5 bg-slate-900 text-white shadow-inner">
        <div className="flex justify-between items-center mb-4">
           <label className="text-[9px] font-black uppercase tracking-[0.2em] text-sky-400 italic">Evolución de la Historia Natural</label>
           <span className="text-[10px] font-black text-white bg-white/10 px-3 py-1 rounded-full border border-white/20 uppercase">{currentStage.timeLabel}</span>
        </div>
        <input 
          type="range" min="0" max={disease.stages.length - 1} step="1" 
          value={progressionLevel} 
          onChange={(e) => setProgressionLevel(parseInt(e.target.value))}
          className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-sky-400"
        />
        <div className="flex justify-between mt-2">
          {disease.stages.map((s, i) => (
            <span key={i} className={`text-[8px] font-black uppercase tracking-tighter ${progressionLevel === i ? 'text-sky-400' : 'text-white/30'}`}>{s.timeLabel}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-12 pb-32">
        
        {/* Signos de Alarma (NUEVO / REINCORPORADO) */}
        <section className="bg-rose-50 p-6 rounded-[2rem] border-2 border-rose-200 shadow-lg shadow-rose-100/50">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-rose-700 mb-4 flex items-center gap-2">
             <span className="animate-pulse">⚠️</span>
             Banderas Rojas (Signos de Alarma)
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {disease.warningSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 text-[12px] font-bold text-rose-900 bg-white/50 p-2 rounded-lg border border-rose-100">
                <span className="text-rose-400 font-black">•</span>
                {sign}
              </div>
            ))}
          </div>
        </section>

        {/* Fisiopatología Molecular */}
        <section className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
               <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px]">M</span>
               Mecanismo Molecular
            </h3>
            <button 
              onClick={() => setDeepDive({ title: 'Análisis Molecular Profundo', content: disease.molecularMechanism })}
              className="text-[9px] font-black text-sky-600 uppercase hover:underline"
            >
              + Análisis Detallado
            </button>
          </div>
          <p className="text-[13px] leading-relaxed text-slate-600 font-medium italic">
            {disease.molecularMechanism.substring(0, 150)}...
          </p>
        </section>

        {/* Examen Neurológico Detallado */}
        <section>
          <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
             <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px]">E</span>
             Examen Neurológico por Sistemas
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white border-l-4 p-4 rounded-r-2xl shadow-sm border-sky-400">
               <p className="text-[9px] font-black text-sky-600 uppercase mb-1">Estado Mental y Cognición</p>
               <p className="text-[12px] text-slate-700 font-bold">{currentStage.neuroExamDetail.mentalStatus}</p>
            </div>
            <div className="bg-white border-l-4 p-4 rounded-r-2xl shadow-sm border-emerald-400">
               <p className="text-[9px] font-black text-emerald-600 uppercase mb-1">Pares Craneales y Vía Visual</p>
               <p className="text-[12px] text-slate-700 font-bold">{currentStage.neuroExamDetail.cranialNerves}</p>
            </div>
            <div className="bg-white border-l-4 p-4 rounded-r-2xl shadow-sm border-amber-400">
               <p className="text-[9px] font-black text-amber-600 uppercase mb-1">Sistema Motor (Tono y Fuerza)</p>
               <p className="text-[12px] text-slate-700 font-bold">{currentStage.neuroExamDetail.motorSystem}</p>
            </div>
            <div className="bg-white border-l-4 p-4 rounded-r-2xl shadow-sm border-rose-400">
               <p className="text-[9px] font-black text-rose-600 uppercase mb-1">Reflejos y Signos Patológicos</p>
               <p className="text-[12px] text-slate-700 font-bold">{currentStage.neuroExamDetail.reflexes}</p>
            </div>
          </div>
        </section>

        {/* Neuroimagen */}
        <section>
          <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
             <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px]">R</span>
             Análisis de Neuroimagen (RMN)
          </h3>
          <div className="bg-slate-900 text-sky-100 p-6 rounded-[2rem] border-2 shadow-2xl overflow-hidden relative" style={{ borderColor: disease.color }}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <p className="text-[13px] leading-relaxed font-bold z-10 relative">"{currentStage.mriDetails}"</p>
             <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between z-10 relative">
               <span className="text-[9px] font-black uppercase text-sky-400">Interpretación Radiológica</span>
               <span className="text-[10px]">🔬</span>
             </div>
          </div>
        </section>

        {/* Diagnóstico Diferencial */}
        <section className="bg-amber-50 p-6 rounded-[2rem] border border-amber-200">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-amber-700 mb-3">Diagnóstico Diferencial Clave</h3>
          <div className="flex flex-wrap gap-2">
            {disease.differential.map((diff, i) => (
              <span key={i} className="text-[11px] font-bold bg-white text-amber-800 px-3 py-1 rounded-full border border-amber-100">
                {diff}
              </span>
            ))}
          </div>
        </section>

        {/* Complicaciones */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Complicaciones Potenciales</h3>
          <ul className="space-y-2">
            {disease.complications.map((comp, i) => (
              <li key={i} className="text-[12px] text-slate-600 font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                {comp}
              </li>
            ))}
          </ul>
        </section>

        {/* Bibliografía y Referencias */}
        <section className="pt-10 border-t border-slate-100">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5">Bibliografía y Atlas de Referencia</h3>
          <div className="space-y-3">
            {disease.references.map((ref, i) => (
              <a 
                key={i}
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-sky-300 transition-all"
              >
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{ref.source}</p>
                  <p className="text-[12px] font-bold text-slate-800 group-hover:text-sky-600">{ref.title}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
      {deepDive && <DeepDiveModal title={deepDive.title} content={deepDive.content} onClose={() => setDeepDive(null)} />}
    </div>
  );
};

export default InfoPanel;
