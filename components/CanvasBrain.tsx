
import React, { useRef, useEffect } from 'react';
import { DiseaseData } from '../types';
import { DISEASES } from '../constants';

interface CanvasBrainProps {
  onNodeClick: (disease: DiseaseData | null) => void; // null represents white matter center
  showLabels: boolean;
  isPaused: boolean;
  progressionLevel: number;
}

const CanvasBrain: React.FC<CanvasBrainProps> = ({ onNodeClick, showLabels, isPaused, progressionLevel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };

    window.addEventListener('resize', resize);
    resize();

    const diseases = Object.values(DISEASES);
    const nodes = diseases.map((d, i) => ({
      ...d,
      baseAngle: (i * 2 * Math.PI) / diseases.length
    }));

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.75;

      const healthFactor = 1 - (progressionLevel * 0.4); 
      const integrityColor = `rgba(14, 165, 233, ${0.1 + healthFactor * 0.2})`;

      // Draw connections
      ctx.setLineDash([5, 5 + progressionLevel * 5]);
      ctx.strokeStyle = integrityColor;
      ctx.lineWidth = 1;
      nodes.forEach((node) => {
        const x = centerX + Math.cos(node.baseAngle + angleRef.current) * radius;
        const y = centerY + Math.sin(node.baseAngle + angleRef.current) * radius;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Draw Central "Brain" (White Matter Core)
      const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 60);
      const coreColor = progressionLevel === 0 ? '#ffffff' : (progressionLevel === 1 ? '#cbd5e1' : '#64748b');
      const glowColor = progressionLevel === 0 ? '#0ea5e9' : (progressionLevel === 1 ? '#94a3b8' : '#334155');

      gradient.addColorStop(0, coreColor);
      gradient.addColorStop(0.5, progressionLevel === 0 ? '#bae6fd' : '#94a3b8');
      gradient.addColorStop(1, glowColor);

      ctx.shadowBlur = 30 - (progressionLevel * 5);
      ctx.shadowColor = glowColor;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Pulse effect
      if (!isPaused) {
        const pulse = Math.sin(Date.now() / 500) * 4;
        ctx.strokeStyle = '#ffffffaa';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 45 + pulse, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = progressionLevel === 2 ? '#ffffff' : '#0369a1';
      ctx.font = '900 9px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('NÚCLEO', centerX, centerY - 5);
      ctx.fillText('CENTRAL', centerX, centerY + 10);

      // Draw Nodes
      nodes.forEach((node) => {
        const x = centerX + Math.cos(node.baseAngle + angleRef.current) * radius;
        const y = centerY + Math.sin(node.baseAngle + angleRef.current) * radius;

        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 9px Inter';
        ctx.fillText(node.name === 'General' ? 'DEF' : node.name, x, y + 3);

        if (showLabels) {
          ctx.fillStyle = '#1e293b';
          ctx.font = '900 10px Inter';
          ctx.fillText(node.name === 'General' ? 'DEFINICIÓN' : node.name, x, y + 35);
        }
      });

      if (!isPaused) {
        angleRef.current += 0.004;
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.75;

      // Check center click
      const distCenter = Math.sqrt((mx - centerX) ** 2 + (my - centerY) ** 2);
      if (distCenter < 45) {
        onNodeClick(null);
        return;
      }

      // Check node click
      nodes.forEach((node) => {
        const x = centerX + Math.cos(node.baseAngle + angleRef.current) * radius;
        const y = centerY + Math.sin(node.baseAngle + angleRef.current) * radius;
        const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
        if (dist < 22) {
          onNodeClick(node);
        }
      });
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [onNodeClick, showLabels, isPaused, progressionLevel]);

  return <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />;
};

export default CanvasBrain;
