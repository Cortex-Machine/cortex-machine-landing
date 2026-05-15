"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let animationId = 0;
    let nodes: Node[] = [];

    const palette = {
      line: "rgba(178, 220, 255, 0.18)",
      node: "rgba(235, 247, 255, 0.82)",
      cyan: "rgba(96, 236, 225, 0.72)",
      red: "rgba(255, 94, 122, 0.5)",
      amber: "rgba(255, 210, 112, 0.44)",
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.max(58, Math.floor((width * height) / 18000));
      nodes = Array.from({ length: count }, (_, index) => {
        const band = index / count;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.18,
          r: 1.1 + Math.random() * 1.9,
          phase: band * Math.PI * 2,
        };
      });
    };

    const drawGlow = (x: number, y: number, radius: number, color: string) => {
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const render = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#07090c";
      context.fillRect(0, 0, width, height);

      drawGlow(width * 0.72, height * 0.3, Math.min(width, height) * 0.48, palette.cyan);
      drawGlow(width * 0.18, height * 0.7, Math.min(width, height) * 0.35, palette.red);
      drawGlow(width * 0.55, height * 0.86, Math.min(width, height) * 0.28, palette.amber);

      for (const node of nodes) {
        node.x += node.vx + Math.sin(frame * 0.006 + node.phase) * 0.04;
        node.y += node.vy + Math.cos(frame * 0.005 + node.phase) * 0.035;

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 145) {
            context.strokeStyle = `rgba(182, 227, 255, ${0.2 * (1 - distance / 145)})`;
            context.lineWidth = 0.8;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      context.strokeStyle = palette.line;
      context.lineWidth = 1;
      for (let y = 0; y < height; y += 42) {
        context.beginPath();
        context.moveTo(0, y + Math.sin(frame * 0.01 + y) * 5);
        context.lineTo(width, y + Math.cos(frame * 0.006 + y) * 5);
        context.stroke();
      }

      for (const node of nodes) {
        context.fillStyle = node.phase % 2 > 1 ? palette.node : palette.cyan;
        context.beginPath();
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}
