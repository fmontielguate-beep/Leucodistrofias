
import React, { useRef, useEffect, useState } from 'react';
import { DiseaseData } from '../types';
import { DISEASES } from '../constants';
import { LeukodystrophyType } from '../types';

interface CanvasBrainProps {
  onNodeClick: (disease: DiseaseData | null) => void;
  showLabels: boolean;
  isPaused: boolean;
  progressionLevel: number;
}

const CanvasBrain: React.FC<CanvasBrainProps> = ({ onNodeClick, showLabels, isPaused, progressionLevel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const animationRef = useRef<number>(0);
  
  const [activePopup, setActivePopup] = useState<{ disease: DiseaseData; x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const lastHoveredId = useRef<string | null>(null);

  const getMousePos = (e: MouseEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  /**
   * Dibuja un cerebro detallado con circunvoluciones orgánicas
   */
  const drawDetailedBrain = (
    ctx: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    radius: number, 
    color: string, 
    isHovered: boolean,
    rotation: number
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    // Efecto de brillo exterior (Aura de mielina)
    ctx.shadowBlur = isHovered ? 50 : 20;
    ctx.shadowColor = color;

    // 1. Cuerpo base (Hemisferios)
    const grad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, 0, 0, 0, radius);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.5, color);
    grad.addColorStop(1, color);
    
    ctx.fillStyle = grad;
    ctx.beginPath();
    // Forma levemente "arriñonada" o de nuez
    ctx.moveTo(-radius, 0);
    ctx.bezierCurveTo(-radius, -radius * 1.2, radius, -radius * 1.2, radius, 0);
    ctx.bezierCurveTo(radius, radius * 1.2, -radius, radius * 1.2, -radius, 0);
    ctx.fill();
    ctx.shadowBlur = 0;

    // 2. Dibujar circunvoluciones (surcos) con curvas de Bézier para mayor realismo
    ctx.strokeStyle = 'rgba(0,0,0,0.18)';
    ctx.lineWidth = radius * 0.07;
    ctx.lineCap = 'round';

    const drawSulcus = (x1: number, y1: number, cx1: number, cy1: number, cx2: number, cy2: number, x2: number, y2: number) => {
      ctx.beginPath();
      ctx.moveTo(x1 * radius, y1 * radius);
      ctx.bezierCurveTo(cx1 * radius, cy1 * radius, cx2 * radius, cy2 * radius, x2 * radius, y2 * radius);
      ctx.stroke();
    };

    // Patrón de pliegues frontales, parietales y temporales
    drawSulcus(-0.6, -0.3, -0.4, -0.6, -0.2, -0.1, 0, -0.4); // Lóbulo frontal sup
    drawSulcus(0.1, -0.5, 0.4, -0.6, 0.7, -0.2, 0.5, 0.1);  // Lóbulo parietal
    drawSulcus(-0.7, 0.2, -0.4, 0.5, 0, 0.3, 0.3, 0.6);    // Lóbulo temporal
    drawSulcus(-0.2, 0, 0.1, 0.2, -0.1, 0.5, -0.4, 0.4);   // Cisura silviana simulada

    // 3. Cisura Interhemisférica (Línea central)
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = radius * 0.06;
    ctx.beginPath();
    ctx.moveTo(0, -radius * 0.85);
    ctx.lineTo(0, radius * 0.85);
    ctx.stroke();

    // 4. Reflejo de luz superior (Mielina sana/brillante)
    const highlightGrad = ctx.createLinearGradient(0, -radius, 0, 0);
    highlightGrad.addColorStop(0, 'rgba(255,255,255,0.4)');
    highlightGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = highlightGrad;
    ctx.beginPath();
    ctx.ellipse(0, -radius * 0.4, radius * 0.6, radius * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    window.addEventListener('resize', resize);
    resize();

    const diseases = Object.values(DISEASES);
    // Filtrar para obtener solo las enfermedades (nodos periféricos)
    const peripheralNodes = diseases.filter(d => d.id !== LeukodystrophyType.GENERAL);
    const nodes = peripheralNodes.map((d, i) => ({
      ...d,
      baseAngle: (i * 2 * Math.PI) / peripheralNodes.length // Equidistancia angular perfecta
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const orbitRadius = Math.min(centerX, centerY) * 0.68; // Distancia fija desde el centro

      if (!isPaused) {
        angleRef.current += isHovering ? 0.001 : 0.004;
      }

      // 1. Conexiones (Axones)
      const healthFactor = 1 - (progressionLevel * 0.4);
      ctx.beginPath();
      ctx.setLineDash([4, 10]);
      ctx.strokeStyle = `rgba(14, 165, 233, ${0.12 + healthFactor * 0.08})`;
      nodes.forEach((node) => {
        const x = centerX + Math.cos(node.baseAngle + angleRef.current) * orbitRadius;
        const y = centerY + Math.sin(node.baseAngle + angleRef.current) * orbitRadius;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Cerebro Central (Sustancia Blanca / Centro de Mando)
      const isCenterHovered = lastHoveredId.current === LeukodystrophyType.GENERAL;
      const centerRadius = isCenterHovered ? 65 : 55;
      const centerColor = progressionLevel === 0 ? '#0ea5e9' : '#475569';
      
      if (isCenterHovered) {
        setActivePopup({ disease: DISEASES[LeukodystrophyType.GENERAL], x: centerX, y: centerY });
      }

      drawDetailedBrain(ctx, centerX, centerY, centerRadius, centerColor, isCenterHovered, 0);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 9px Inter';
      ctx.textAlign = 'center';
      ctx.fillText("SUSTANCIA", centerX, centerY - 2);
      ctx.fillText("BLANCA", centerX, centerY + 8);

      // 3. Planetas Cerebroides (Enfermedades)
      nodes.forEach((node) => {
        const x = centerX + Math.cos(node.baseAngle + angleRef.current) * orbitRadius;
        const y = centerY + Math.sin(node.baseAngle + angleRef.current) * orbitRadius;
        
        const isCurrentTarget = lastHoveredId.current === node.id;
        const nodeRadius = isCurrentTarget ? 42 : 30;

        if (isCurrentTarget) {
          // Halo de actividad
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius + 15 + Math.sin(Date.now() / 250) * 6, 0, Math.PI * 2);
          ctx.strokeStyle = `${node.color}33`;
          ctx.lineWidth = 4;
          ctx.stroke();

          setActivePopup({ disease: node, x, y });
        }

        // Dibujar el cerebroide individual
        drawDetailedBrain(ctx, x, y, nodeRadius, node.color, isCurrentTarget, node.baseAngle + angleRef.current);

        // Texto informativo del nodo
        ctx.fillStyle = '#ffffff';
        ctx.font = `900 ${isCurrentTarget ? '14px' : '11px'} Inter`;
        ctx.textAlign = 'center';
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.fillText(node.name, x, y + 5);
        ctx.shadowBlur = 0;

        if (showLabels && !isCurrentTarget) {
          ctx.fillStyle = '#64748b';
          ctx.font = '900 10px Inter';
          ctx.fillText(node.name.toUpperCase(), x, y + 60);
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { x: mx, y: my } = getMousePos(e, canvas);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const orbitRadius = Math.min(centerX, centerY) * 0.68;

      let foundId: string | null = null;

      // Colisión Centro
      const distCenter = Math.sqrt((mx - centerX) ** 2 + (my - centerY) ** 2);
      if (distCenter < 60) {
        foundId = LeukodystrophyType.GENERAL;
      } else {
        // Colisión Planetas
        for (const node of nodes) {
          const nx = centerX + Math.cos(node.baseAngle + angleRef.current) * orbitRadius;
          const ny = centerY + Math.sin(node.baseAngle + angleRef.current) * orbitRadius;
          const dist = Math.sqrt((mx - nx) ** 2 + (my - ny) ** 2);

          if (dist < 45) {
            foundId = node.id;
            break;
          }
        }
      }

      if (foundId) {
        lastHoveredId.current = foundId;
        setIsHovering(true);
        canvas.style.cursor = 'pointer';
      } else {
        lastHoveredId.current = null;
        setIsHovering(false);
        canvas.style.cursor = 'default';
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (lastHoveredId.current === LeukodystrophyType.GENERAL) {
        onNodeClick(null);
      } else if (lastHoveredId.current) {
        const disease = nodes.find(n => n.id === lastHoveredId.current);
        if (disease) onNodeClick(disease);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationRef.current);
    };
  }, [onNodeClick, showLabels, isPaused, progressionLevel, isHovering]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-visible">
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* POP-UP CON DESAPARICIÓN LENTA */}
      {activePopup && (
        <div 
          className={`absolute z-[100] pointer-events-none transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
            isHovering ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
          }`}
          style={{ 
            left: activePopup.x, 
            top: activePopup.y,
            transform: `translate(${activePopup.x > containerRef.current!.clientWidth / 2 ? '-115%' : '15%'}, -50%)`
          }}
        >
          <div 
            className="bg-slate-900/95 backdrop-blur-2xl text-white p-6 rounded-[3rem] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.7)] border-2 w-80 origin-center"
            style={{ borderColor: `${activePopup.disease.color}aa` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3.5 h-3.5 rounded-full animate-pulse shadow-[0_0_15px_currentcolor]" style={{ backgroundColor: activePopup.disease.color, color: activePopup.disease.color }}></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-400">
                {activePopup.disease.id === LeukodystrophyType.GENERAL ? 'Información Base' : 'Análisis de Caso'}
              </span>
            </div>

            <h4 className="text-2xl font-black leading-tight mb-1">{activePopup.disease.name}</h4>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-4 opacity-80">{activePopup.disease.fullName}</p>

            <div className="bg-white/5 rounded-3xl p-5 border border-white/10 mb-5">
              <span className="text-white/30 font-black text-[9px] uppercase tracking-tighter block mb-2">Perla Clínica:</span>
              <p className="text-[12px] leading-relaxed text-slate-100 font-medium italic">
                "{activePopup.disease.id === LeukodystrophyType.GENERAL 
                  ? "La integridad de la mielina es el pilar de la velocidad de conducción nerviosa y la sincronización cerebral." 
                  : activePopup.disease.stages[0].symptoms.split('.')[0] + "."}"
              </p>
            </div>

            <div className="flex justify-between items-center text-[10px] font-black uppercase text-sky-400">
               <span className={isHovering ? "animate-pulse" : ""}>Click para expandir estudio</span>
               <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-inner">🧠</span>
            </div>
          </div>
          
          {/* Flecha del Pop-up con color dinámico */}
          <div 
            className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rotate-45 bg-slate-900/95 border-2 ${activePopup.x > containerRef.current!.clientWidth / 2 ? 'right-[-10px] border-t-0 border-l-0' : 'left-[-10px] border-b-0 border-r-0'}`}
            style={{ borderColor: `${activePopup.disease.color}aa` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CanvasBrain;
