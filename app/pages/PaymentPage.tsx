import { motion } from "motion/react";
import { Check, ShieldCheck, CreditCard, Receipt, Building, DownloadCloud, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

const invoices = [
  { id: "INV-2023-01", date: "Oct 01, 2023", amount: "$1,200.00", status: "Paid" },
  { id: "INV-2023-02", date: "Sep 01, 2023", amount: "$1,200.00", status: "Paid" },
  { id: "INV-2023-03", date: "Aug 01, 2023", amount: "$1,200.00", status: "Paid" },
];

export function PaymentPage() {
  const [activePlan, setActivePlan] = useState("premium");

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" /> Secure Checkout
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Simple, transparent pricing.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-500 dark:text-slate-400">
          No hidden fees. Choose the plan that best fits your educational journey.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-16">
        
        {/* Pricing Tiers / Plans (Left 3 columns) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            onClick={() => setActivePlan("basic")}
            className={`relative p-8 rounded-3xl border-2 transition-all cursor-pointer overflow-hidden ${
              activePlan === "basic" 
                ? "border-slate-900 bg-white shadow-xl dark:bg-slate-900 dark:border-white shadow-slate-200/50" 
                : "border-slate-200 bg-white/50 hover:bg-white dark:bg-slate-900/50 dark:border-slate-800 dark:hover:bg-slate-900"
            }`}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Semester Basic</h3>
              <p className="text-sm text-slate-500">Essential access for standard courses.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$800</span>
              <span className="text-sm font-medium text-slate-500">/ semester</span>
            </div>
            <ul className="space-y-3 mb-8">
              {['Standard Course Access', 'Community Support', 'Basic Analytics', 'Standard Library Access'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" /> {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            onClick={() => setActivePlan("premium")}
            className={`relative p-8 rounded-3xl border-2 transition-all cursor-pointer overflow-hidden ${
              activePlan === "premium" 
                ? "border-indigo-600 bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20" 
                : "border-slate-200 bg-white/50 hover:bg-white dark:bg-slate-900/50 dark:border-slate-800 dark:hover:bg-slate-900"
            }`}
          >
            {activePlan === "premium" && (
              <div className="absolute top-0 right-0 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                MOST POPULAR
              </div>
            )}
            <div className="mb-6">
              <h3 className={`text-xl font-bold ${activePlan === "premium" ? "text-white" : "text-slate-900 dark:text-white"} mb-2`}>Annual Premium</h3>
              <p className={`text-sm ${activePlan === "premium" ? "text-indigo-200" : "text-slate-500"}`}>Full access for serious learners.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className={`text-4xl font-extrabold ${activePlan === "premium" ? "text-white" : "text-slate-900 dark:text-white"}`}>$1,200</span>
              <span className={`text-sm font-medium ${activePlan === "premium" ? "text-indigo-200" : "text-slate-500"}`}>/ year</span>
            </div>
            <ul className="space-y-3 mb-8">
              {['All Premium Courses', '1-on-1 Mentorship', 'Advanced Analytics', 'Unlimited Library Access', 'Offline Downloading'].map((feature, i) => (
                <li key={i} className={`flex items-center gap-3 text-sm font-medium ${activePlan === "premium" ? "text-white" : "text-slate-600 dark:text-slate-300"}`}>
                  <Check className={`w-5 h-5 shrink-0 ${activePlan === "premium" ? "text-indigo-300" : "text-emerald-500"}`} /> {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Payment Form (Right 2 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none"
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Payment Details</h3>
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center"><CreditCard className="w-4 h-4 text-slate-600" /></div>
              <div className="w-8 h-5 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center"><Building className="w-4 h-4 text-slate-600" /></div>
            </div>
          </div>
          
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Card Information</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400 font-mono" 
                />
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Expiry Date</label>
                <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400 font-mono" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">CVC/CVV</label>
                <input type="text" placeholder="123" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400 font-mono" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cardholder Name</label>
              <input type="text" placeholder="Name on card" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400" />
            </div>

            <div className="pt-4 pb-2">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-semibold text-slate-900 dark:text-white">{activePlan === "premium" ? "$1,200.00" : "$800.00"}</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-slate-500">Tax (0%)</span>
                <span className="font-semibold text-slate-900 dark:text-white">$0.00</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="font-bold text-slate-900 dark:text-white text-lg">Total Due</span>
                <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-2xl">{activePlan === "premium" ? "$1,200.00" : "$800.00"}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]">
              <Lock className="w-4 h-4" /> Pay {activePlan === "premium" ? "$1,200.00" : "$800.00"} securely
            </button>
            
            <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 256-bit SSL encrypted.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Billing History Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Billing History</h3>
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div>Invoice ID</div>
            <div>Date</div>
            <div>Amount</div>
            <div className="text-right">Action</div>
          </div>
          {invoices.map((inv) => (
            <div key={inv.id} className="grid grid-cols-4 gap-4 p-4 items-center border-b border-slate-50 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Receipt className="w-4 h-4 text-slate-400" /> {inv.id}
              </div>
              <div className="text-slate-500 text-sm">{inv.date}</div>
              <div className="font-medium text-slate-900 dark:text-white">{inv.amount} <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">{inv.status}</span></div>
              <div className="text-right">
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors" title="Download Invoice">
                  <DownloadCloud className="w-5 h-5 inline-block" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}