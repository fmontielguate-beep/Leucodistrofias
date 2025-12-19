
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

const Quiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (idx: number) => {
    if (showFeedback) return;
    setSelectedOption(idx);
    setShowFeedback(true);
    if (idx === QUIZ_QUESTIONS[currentIdx].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(i => i + 1);
      setShowFeedback(false);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const restart = () => {
    setCurrentIdx(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedOption(null);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="p-6 text-center bg-white rounded-xl shadow-lg border border-sky-100 animate-in zoom-in duration-300">
        <h3 className="text-2xl font-black text-sky-900 mb-2 uppercase tracking-tight">¡Evaluación Completada!</h3>
        <p className="text-sm text-slate-600 mb-4">Puntuación final: <span className="font-black text-sky-600">{score} / {QUIZ_QUESTIONS.length}</span></p>
        <button 
          onClick={restart}
          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-black uppercase tracking-widest transition-all shadow-md active:scale-95 text-[10px]"
        >
          Reiniciar Evaluación
        </button>
      </div>
    );
  }

  const q = QUIZ_QUESTIONS[currentIdx];

  return (
    <div className="max-w-4xl mx-auto p-2 md:p-0">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
          <p className="text-md font-bold text-slate-800 leading-tight pr-4">{q.question}</p>
          <span className="flex-shrink-0 text-[8px] font-black text-sky-600 bg-sky-100 px-2 py-1 rounded border border-sky-200 uppercase tracking-tighter">
            Q {currentIdx + 1}/{QUIZ_QUESTIONS.length}
          </span>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {q.options.map((opt, idx) => {
            let style = "border-slate-100 text-slate-700 hover:border-sky-200 hover:bg-sky-50";
            if (showFeedback) {
              if (idx === q.correctAnswer) style = "border-green-500 bg-green-50 text-green-700";
              else if (idx === selectedOption) style = "border-red-500 bg-red-50 text-red-700";
              else style = "border-slate-50 text-slate-300 opacity-40";
            }

            return (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => handleOptionClick(idx)}
                className={`p-3 text-left border rounded-lg transition-all duration-150 font-medium text-[12px] flex items-center gap-3 ${style}`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center text-[9px] font-black">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="px-6 py-4 bg-sky-50 border-t border-sky-100 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-grow">
               <span className={`text-[10px] font-black uppercase block mb-1 ${selectedOption === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                 {selectedOption === q.correctAnswer ? '✓ Correcto' : '✗ Incorrecto'}
               </span>
               <p className="text-slate-600 text-[11px] leading-tight italic line-clamp-2">
                 {q.explanation}
               </p>
            </div>
            <button 
              onClick={nextQuestion}
              className="flex-shrink-0 bg-slate-900 hover:bg-black text-white px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[9px] transition-all"
            >
              {currentIdx === QUIZ_QUESTIONS.length - 1 ? 'Finalizar' : 'Siguiente'}
            </button>
          </div>
        )}
      </div>

      <div className="mt-3 flex justify-between items-center px-1">
        <div className="text-[8px] text-slate-500 font-black uppercase">Aciertos: <span className="text-sky-400">{score}</span></div>
        <div className="w-40 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-sky-500 transition-all duration-500" 
            style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
