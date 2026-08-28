"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Table, Image, Database, MessageCircle, Sparkles, Check } from "lucide-react";

const fileTypes = [
  { icon: FileText, label: "PDF", color: "text-red-400", bg: "bg-red-500/20" },
  { icon: Table, label: "Excel", color: "text-green-400", bg: "bg-green-500/20" },
  { icon: Image, label: "Images", color: "text-blue-400", bg: "bg-blue-500/20" },
];

export function DataBrain() {
  const [indexedFiles, setIndexedFiles] = useState<number[]>([]);
  const [showChat, setShowChat] = useState(false);

  const handleDrop = (index: number) => {
    if (!indexedFiles.includes(index)) {
      setIndexedFiles([...indexedFiles, index]);
      if (indexedFiles.length >= 1) {
        setTimeout(() => setShowChat(true), 800);
      }
    }
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Internal Intelligence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Private Data Brain
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Index your history. Chat with your archives. Secure, private, and local-first data embedding 
              that transforms your documents into an intelligent knowledge base.
            </p>

            <ul className="space-y-4">
              {[
                "Zero data leaves your infrastructure",
                "Sub-second semantic search",
                "Multi-modal document understanding",
                "Enterprise-grade access controls",
              ].map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800">
              {/* Drag Zone */}
              <div className="mb-8">
                <p className="text-slate-400 text-sm mb-4">Click files to index them:</p>
                <div className="flex gap-4 justify-center">
                  {fileTypes.map((file, index) => (
                    <motion.button
                      key={file.label}
                      onClick={() => handleDrop(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative p-6 rounded-xl ${file.bg} border-2 border-dashed border-slate-700 hover:border-slate-500 transition-all cursor-pointer ${
                        indexedFiles.includes(index) ? "opacity-50" : ""
                      }`}
                      disabled={indexedFiles.includes(index)}
                    >
                      <file.icon className={`w-10 h-10 ${file.color}`} />
                      <span className="block mt-2 text-xs text-slate-400">{file.label}</span>
                      
                      {indexedFiles.includes(index) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Vector Database Visualization */}
              <div className="relative p-6 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300 font-medium">Vector Database</span>
                  <span className="ml-auto text-xs text-slate-500">
                    {indexedFiles.length} / 3 indexed
                  </span>
                </div>

                {/* Animated Dots */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.2 }}
                      animate={{
                        opacity: indexedFiles.length > 0 ? [0.2, 1, 0.2] : 0.2,
                        scale: indexedFiles.length > 0 ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.05,
                        repeat: Infinity,
                      }}
                      className={`w-2 h-2 rounded-full ${
                        i < indexedFiles.length * 8
                          ? "bg-gradient-to-br from-violet-500 to-cyan-500"
                          : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Chat Interface */}
              <AnimatePresence>
                {showChat && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">
                          <span className="text-cyan-400">"What were our Q3 revenue projections?"</span>
                        </p>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-slate-400 text-sm mt-2"
                        >
                          Based on the indexed Excel file, Q3 projections show a 23% YoY growth...
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showChat && (
                <div className="p-4 rounded-xl border border-dashed border-slate-700 text-center">
                  <MessageCircle className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm">Index files to unlock chat</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
