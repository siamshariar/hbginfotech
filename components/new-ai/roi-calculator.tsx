"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Calculator, TrendingDown, DollarSign, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export function NewAIROICalculator() {
  const [monthlyTickets, setMonthlyTickets] = useState([5000]);
  const [avgCostPerTicket, setAvgCostPerTicket] = useState([15]);
  const [automationRate, setAutomationRate] = useState([70]);

  const calculations = useMemo(() => {
    const tickets = monthlyTickets[0];
    const cost = avgCostPerTicket[0];
    const rate = automationRate[0] / 100;

    const currentMonthlyCost = tickets * cost;
    const automatedTickets = Math.floor(tickets * rate);
    const aiCostPerTicket = 0.5; // AI cost per ticket
    const newMonthlyCost = (tickets - automatedTickets) * cost + automatedTickets * aiCostPerTicket;
    const monthlySavings = currentMonthlyCost - newMonthlyCost;
    const annualSavings = monthlySavings * 12;
    const percentSavings = Math.round((monthlySavings / currentMonthlyCost) * 100);

    return {
      currentMonthlyCost,
      newMonthlyCost,
      monthlySavings,
      annualSavings,
      automatedTickets,
      percentSavings,
    };
  }, [monthlyTickets, avgCostPerTicket, automationRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Calculator className="h-4 w-4" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how much you can save by automating customer support with our AI solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-8">Your Current Metrics</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm text-white/70">Monthly Support Tickets</label>
                  <span className="text-sm font-medium text-white">{monthlyTickets[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={monthlyTickets}
                  onValueChange={setMonthlyTickets}
                  max={50000}
                  min={100}
                  step={100}
                  className="[&_[role=slider]]:bg-white"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm text-white/70">Avg. Cost Per Ticket</label>
                  <span className="text-sm font-medium text-white">${avgCostPerTicket[0]}</span>
                </div>
                <Slider
                  value={avgCostPerTicket}
                  onValueChange={setAvgCostPerTicket}
                  max={50}
                  min={5}
                  step={1}
                  className="[&_[role=slider]]:bg-white"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm text-white/70">Expected Automation Rate</label>
                  <span className="text-sm font-medium text-white">{automationRate[0]}%</span>
                </div>
                <Slider
                  value={automationRate}
                  onValueChange={setAutomationRate}
                  max={90}
                  min={30}
                  step={5}
                  className="[&_[role=slider]]:bg-white"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Annual savings highlight */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-8 text-center">
              <p className="text-sm text-emerald-400 mb-2">Estimated Annual Savings</p>
              <motion.p 
                key={calculations.annualSavings}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-5xl md:text-6xl font-bold text-white"
              >
                {formatCurrency(calculations.annualSavings)}
              </motion.p>
              <p className="text-white/50 mt-2">
                {calculations.percentSavings}% reduction in support costs
              </p>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 text-white/50 mb-2">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-xs">Monthly Savings</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(calculations.monthlySavings)}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 text-white/50 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs">Automated Tickets</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  {calculations.automatedTickets.toLocaleString()}/mo
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 text-white/50 mb-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-xs">Current Cost</span>
                </div>
                <p className="text-2xl font-bold text-white/60">
                  {formatCurrency(calculations.currentMonthlyCost)}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 text-white/50 mb-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-xs">New Cost</span>
                </div>
                <p className="text-2xl font-bold text-emerald-400">
                  {formatCurrency(calculations.newMonthlyCost)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
