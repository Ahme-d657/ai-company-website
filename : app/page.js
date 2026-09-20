"use client";
import { useState } from "react";
import { Cpu, ShieldCheck, Zap, Bot, Database, ArrowRight, BarChart3, Crown, Sparkles } from "lucide-react";

export default function Home() {
  const [teamSize, setTeamSize] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // ROI Hesaplama
  const annualSavings = Math.round(teamSize * 12 * hourlyRate * 52 * 0.4);

  const handleSimulateAI = () => {
    if (!prompt) return;
    setLoading(true);
    setOutput("");
    setTimeout(() => {
      setOutput(`[Taç AI Ajan Yanıtı]: "${prompt}" talebiniz başarıyla işlendi. Otonom ajanlar iş akışına bağlandı ve verimlilik %100 seviyesine çıkarıldı.`);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans">
      {/* VIP Navbar */}
      <nav className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-xl fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Crown className="w-5 h-5 text-amber-300" />
            </div>
            <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-white via-slate-200 to-amber-300 bg-clip-text text-transparent">
              TAÇ AI
            </span>
          </div>
          <a href="#contact" className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition shadow-lg shadow-indigo-600/30">
            VIP Danışmanlık Al
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          Taç AI Otonom Ajan Mimarisi v3.0 Aktif
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight">
          Şirketinizin Operasyonlarını <br />
          <span className="bg-gradient-to-r from-amber-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Otonom AI Ajanlarına
          </span> Devredin
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Özel RAG bilgi bankaları, bağımsız çalışan yapay zeka ekipleri ve yüksek güvenlikli kurumsal LLM entegrasyonları ile Taç AI kalitesi.
        </p>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-amber-400" />
            <h2 className="text-xl font-bold">Yatırım Getirisi (ROI) Hesaplayıcı</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <label className="text-xs text-slate-400 block mb-2">Ekip Büyüklüğü: <span className="text-white font-bold">{teamSize} Kişi</span></label>
                <input type="range" min="5" max="250" value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} className="w-full accent-indigo-500" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-2">Ortalama Saatlik Ücret: <span className="text-white font-bold">${hourlyRate}/saat</span></label>
                <input type="range" min="15" max="150" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="w-full accent-indigo-500" />
              </div>
            </div>
            <div className="p-6 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-center">
              <div className="text-xs text-indigo-300 font-medium mb-1">Tahmini Yıllık Tasarruf</div>
              <div className="text-3xl font-black text-amber-400">${annualSavings.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Terminal */}
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="text-indigo-400" />
            <h3 className="font-bold">Taç AI Terminali</h3>
          </div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Örn: 'Müşteri destek ekibi için otomasyon senaryosu çıkar...'"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm mb-3 focus:outline-none focus:border-indigo-500 text-slate-200"
          />
          <button onClick={handleSimulateAI} disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-500 font-semibold py-2.5 rounded-xl transition text-sm">
            {loading ? "Taç AI Ajanları Çalışıyor..." : "Simülasyonu Başlat"}
          </button>
          {output && <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-indigo-500/30 text-xs text-indigo-300">{output}</div>}
        </div>
      </section>
    </div>
  );
        }
              
