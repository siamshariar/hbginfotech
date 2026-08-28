"use client";

import { motion } from "framer-motion";
import { MessageSquare, Brain, Sparkles, Database, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "chatbot",
    icon: MessageSquare,
    title: "AI Chatbot",
    subtitle: "Intelligent Conversations",
    description: "Deploy sophisticated chatbots that understand context, handle complex queries, and provide human-like responses. Supports 50+ languages with real-time translation.",
    features: [
      "Natural language understanding",
      "Multi-turn conversations",
      "Sentiment analysis",
      "Seamless handoff to humans",
    ],
    gradient: "from-blue-500 to-cyan-500",
    demo: {
      messages: [
        { role: "user", text: "I need to change my flight to next Tuesday" },
        { role: "ai", text: "I'd be happy to help you reschedule. I found your booking #FL2847 to London. Let me check availability for Tuesday..." },
        { role: "ai", text: "Great news! I found 3 available flights. The 9:15 AM departure has the same fare. Should I proceed with the change?" },
      ],
    },
  },
  {
    id: "agentic",
    icon: Brain,
    title: "Agentic AI",
    subtitle: "Autonomous Problem Solving",
    description: "AI agents that think, plan, and execute complex tasks autonomously. They break down problems, use tools, and adapt their approach in real-time.",
    features: [
      "Multi-step reasoning",
      "Tool orchestration",
      "Self-correction",
      "Goal-oriented behavior",
    ],
    gradient: "from-violet-500 to-purple-500",
    demo: {
      steps: [
        { status: "complete", text: "Analyzing customer request..." },
        { status: "complete", text: "Checking inventory database" },
        { status: "complete", text: "Calculating shipping options" },
        { status: "active", text: "Generating personalized offer" },
      ],
    },
  },
  {
    id: "assistant",
    icon: Sparkles,
    title: "AI Assistant",
    subtitle: "Your Team's Copilot",
    description: "Intelligent assistants that work alongside your team. Automate repetitive tasks, draft responses, summarize documents, and boost productivity.",
    features: [
      "Email drafting & replies",
      "Document summarization",
      "Meeting preparation",
      "Data analysis & reports",
    ],
    gradient: "from-amber-500 to-orange-500",
    demo: {
      tasks: [
        { icon: "📧", text: "12 emails drafted", time: "2 min" },
        { icon: "📄", text: "Report summarized", time: "30 sec" },
        { icon: "📊", text: "Q3 analysis complete", time: "5 min" },
      ],
    },
  },
  {
    id: "rag",
    icon: Database,
    title: "AI RAG System",
    subtitle: "Knowledge-Powered AI",
    description: "Connect AI to your private data. Our RAG systems retrieve relevant information from your documents, databases, and knowledge bases for accurate, grounded responses.",
    features: [
      "Secure data integration",
      "Real-time retrieval",
      "Source citations",
      "Custom knowledge bases",
    ],
    gradient: "from-emerald-500 to-teal-500",
    demo: {
      sources: [
        { type: "PDF", name: "Policy_2024.pdf", relevance: 98 },
        { type: "DB", name: "customer_records", relevance: 94 },
        { type: "DOC", name: "FAQ_updated.docx", relevance: 87 },
      ],
    },
  },
];

export function NewAIProducts() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section id="products" className="py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our AI Products
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Four powerful solutions designed to transform your customer support operations
          </p>
        </motion.div>

        {/* Product tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeProduct.id === product.id
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <product.icon className="h-4 w-4" />
              {product.title}
            </button>
          ))}
        </div>

        {/* Active product showcase */}
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Info */}
          <div className="order-2 lg:order-1">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${activeProduct.gradient} text-white text-sm font-medium mb-4`}>
              <activeProduct.icon className="h-4 w-4" />
              {activeProduct.subtitle}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {activeProduct.title}
            </h3>
            <p className="text-lg text-white/60 mb-6">
              {activeProduct.description}
            </p>
            <ul className="space-y-3 mb-8">
              {activeProduct.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activeProduct.gradient}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right: Interactive Demo */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden">
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeProduct.gradient} opacity-10 blur-3xl`} />
              
              {/* Chatbot demo */}
              {activeProduct.id === "chatbot" && (
                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${activeProduct.gradient}`} />
                    <span className="text-sm text-white/60">Live Demo</span>
                  </div>
                  {activeProduct.demo.messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.role === "user" 
                          ? "bg-blue-500 text-white" 
                          : "bg-white/10 text-white/90"
                      }`}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Agentic AI demo */}
              {activeProduct.id === "agentic" && (
                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${activeProduct.gradient} animate-pulse`} />
                    <span className="text-sm text-white/60">Agent Working</span>
                  </div>
                  {activeProduct.demo.steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                        step.status === "complete" 
                          ? "bg-emerald-500/20 text-emerald-400" 
                          : "bg-violet-500/20 text-violet-400"
                      }`}>
                        {step.status === "complete" ? "✓" : (
                          <motion.div 
                            className="h-2 w-2 bg-violet-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          />
                        )}
                      </div>
                      <span className={`text-sm ${step.status === "active" ? "text-white" : "text-white/60"}`}>
                        {step.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Assistant demo */}
              {activeProduct.id === "assistant" && (
                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${activeProduct.gradient}`} />
                    <span className="text-sm text-white/60">Tasks Completed Today</span>
                  </div>
                  {activeProduct.demo.tasks.map((task, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{task.icon}</span>
                        <span className="text-white/90">{task.text}</span>
                      </div>
                      <span className="text-sm text-white/40">{task.time}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* RAG demo */}
              {activeProduct.id === "rag" && (
                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${activeProduct.gradient}`} />
                    <span className="text-sm text-white/60">Retrieved Sources</span>
                  </div>
                  {activeProduct.demo.sources.map((source, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-white/60">
                          {source.type}
                        </span>
                        <span className="text-white/90 text-sm">{source.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-emerald-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${source.relevance}%` }}
                            transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
                          />
                        </div>
                        <span className="text-xs text-white/40">{source.relevance}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
