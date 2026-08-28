"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function AIHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const orbX = useSpring(mouseX, springConfig);
  const orbY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(orbY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(orbX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              The Intelligence Layer
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empower Your Enterprise with{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                Agentic AI & RAG
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
              From autonomous support agents to private knowledge retrieval systems. 
              We build the AI infrastructure that turns your legacy data into an active asset.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-violet-500/25"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Request Private Deployment
              </Button>
            </div>
          </motion.div>

          {/* Right - Interactive Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-violet-500/30"
              />
              
              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-cyan-500/40"
              />

              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-violet-400/50"
              />

              {/* Core Orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(6, 182, 212, 0.2)",
                      "0 0 80px rgba(139, 92, 246, 0.6), 0 0 160px rgba(6, 182, 212, 0.4)",
                      "0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(6, 182, 212, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-violet-600 via-violet-500 to-cyan-500"
                />
              </div>

              {/* Floating Nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-3 h-3 rounded-full bg-cyan-400"
                  style={{
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {[...Array(6)].map((_, i) => {
                  const angle1 = (i * Math.PI * 2) / 6;
                  const angle2 = ((i + 1) * Math.PI * 2) / 6;
                  const x1 = 50 + 40 * Math.cos(angle1);
                  const y1 = 50 + 40 * Math.sin(angle1);
                  const x2 = 50 + 40 * Math.cos(angle2);
                  const y2 = 50 + 40 * Math.sin(angle2);
                  return (
                    <motion.line
                      key={i}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
