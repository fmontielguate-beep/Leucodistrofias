
import React, { useState } from 'react';
import CanvasBrain from './components/CanvasBrain';
import InfoPanel from './components/InfoPanel';
import NodeList from './components/NodeList';
import Quiz from './components/Quiz';
import Chatbot from './components/Chatbot';
import { DiseaseData } from './types';
import { DISEASES } from './constants';

const App: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseData | null>(null);
  const [isWhiteMatterMode, setIsWhiteMatterMode] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progressionLevel, setProgressionLevel] = useState(0);

  const handleNodeClick = (disease: DiseaseData | null) => {
    if (disease === null) {
      setSelectedDisease(null);
      setIsWhiteMatterMode(true);
    } else {
      setSelectedDisease(disease);
      setIsWhiteMatterMode(false);
      setProgressionLevel(0);
    }
  };

  const handleClosePanel = () => {
    setSelectedDisease(null);
    setIsWhiteMatterMode(false);
  };

  return (
    <div className="min-h-screen flex flex-col medical-bg selection:bg-sky-200 selection:text-sky-900">
      <header className="bg-white border-b border-slate-200 p-3 sticky top-0 z-[60] shadow-sm">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-sky-900 rounded-lg flex items-center justify-center text-white shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 tracking-tight leading-none uppercase">
                LeukoEd<span className="text-sky-600">PRO</span>
              </h1>
              <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Maestría en Neuropediatría</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 border-l border-slate-100 pl-4">
               <div className="text-right">
                 <p className="text-[8px] font-black text-slate-400 uppercase">Estado Clínico</p>
                 <p className="text-[10px] font-bold text-slate-700">Integridad de Mielina</p>
               </div>
               <div className={`w-2 h-2 rounded-full ${progressionLevel === 0 ? 'bg-green-500 shadow-md' : progressionLevel === 1 ? 'bg-orange-500' : 'bg-red-500'} animate-pulse`}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Sección Superior: Se asegura que el contenedor principal NO recorte los pop-ups laterales */}
      <div className="flex-grow flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto overflow-visible relative">
        
        {/* Nav Lateral Izquierdo: Eliminado overflow-y-auto para evitar recortes */}
        <nav className="w-full lg:w-80 flex-shrink-0 border-r border-slate-200 bg-white sticky top-[61px] h-auto lg:h-[65vh] z-50 hidden lg:block overflow-visible">
          <div className="p-3 overflow-visible h-full flex flex-col">
            <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-3">Especialidades</h3>
            <div className="flex-grow overflow-visible">
              <NodeList onSelect={handleNodeClick} selectedId={selectedDisease?.id} />
            </div>
          </div>
        </nav>

        {/* Área Central: Canvas (z-index menor para que el pop-up pase por encima) */}
        <main className="flex-grow relative bg-slate-50 flex flex-col h-[350px] lg:h-[65vh] overflow-hidden z-10 border-x border-slate-100">
          <div className="absolute top-3 left-3 z-10 flex gap-2">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="px-2.5 py-1 bg-white text-slate-900 shadow-sm rounded-lg hover:bg-slate-50 transition-all text-[8px] font-black uppercase tracking-widest border border-slate-200"
            >
              {isPaused ? '▶ Continuar' : '⏸ Pausar'}
            </button>
            <button 
              onClick={() => setShowLabels(!showLabels)}
              className="px-2.5 py-1 bg-white text-slate-900 shadow-sm rounded-lg hover:bg-slate-50 transition-all text-[8px] font-black uppercase tracking-widest border border-slate-200"
            >
              {showLabels ? 'Ocultar Nombres' : 'Mostrar Nombres'}
            </button>
          </div>

          <div className="flex-grow">
            <CanvasBrain 
              onNodeClick={handleNodeClick} 
              showLabels={showLabels}
              isPaused={isPaused}
              progressionLevel={progressionLevel}
            />
          </div>
        </main>

        {/* Ventana Lateral Derecha (InfoPanel): z-index alto para capas de información */}
        <aside className="w-full lg:w-[550px] flex-shrink-0 bg-white shadow-2xl z-40 overflow-hidden h-[500px] lg:h-[65vh]">
          <InfoPanel 
            disease={selectedDisease} 
            isWhiteMatterMode={isWhiteMatterMode}
            progressionLevel={progressionLevel}
            setProgressionLevel={setProgressionLevel}
            onClose={handleClosePanel} 
          />
        </aside>
      </div>

      {/* Sección Inferior: Quiz */}
      <section className="bg-slate-900 py-8 px-4 z-20 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-sky-400 text-[10px] font-black uppercase tracking-[0.4em]">Área de Evaluación de Subespecialidad</span>
            <h2 className="text-3xl font-black text-white mt-2">Examen de Competencias Médicas</h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <Quiz />
        </div>
      </section>

      <Chatbot />

      {/* Navegación Mobile */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40">
         <div className="bg-white shadow-2xl rounded-2xl p-2.5 flex justify-around border border-slate-200">
            <button 
              onClick={() => handleNodeClick(null)}
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-black transition-all ${isWhiteMatterMode ? 'bg-sky-900 text-white' : 'bg-slate-100 text-slate-400'}`}
            >
              SB
            </button>
            {Object.values(DISEASES).map(d => (
              <button 
                key={d.id}
                onClick={() => handleNodeClick(d)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center font-black transition-all ${selectedDisease?.id === d.id ? 'scale-110 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}
                style={{ backgroundColor: selectedDisease?.id === d.id ? d.color : '' }}
              >
                {d.name[0]}
              </button>
            ))}
         </div>
      </div>
    </div>
  );
};

export default App;
