# ai-company-website
   TAÇ. Aİ resmi web sitesi ve canlı yapay zeka servis portalı. Next.js &amp; Python FastAPI mimarisi."
"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Python FastAPI Backend'ine İstek Atan Fonksiyon
  const handleRunDemo = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult("");

    try {
      // HF Spaces veya backend API adresinizi buraya yazın
      const response = await fetch("https://BURAYA-HUGGINGFACE-API-LINKI.hf.space/api/ai-process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, task_type: "analysis" }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      // Backend henüz hazır değilse simülasyon çıktısı gösterir
      setResult(`[Test Modu] Gönderilen Girdi: "${prompt}" - API bağlantısı kurulduğunda AI çıktısı burada görünecek.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Üst Menü / Navbar */}
      <nav className="border-b border-slate-800/80 backdrop-blur-md fixed w-full top-0 z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">
              AI
            </div>
            <span className="font-bold text-lg tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              NEXUS AI
            </span>
          </div>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#hizmetler" className="hover:text-white transition">Hizmetler</a>
            <a href="#demo" className="hover:text-white transition">Canlı Demo</a>
            <a href="#iletisim" className="hover:text-white transition">İletişim</a>
          </div>
        </div>
      </nav>

      {/* Hero Bölümü */}
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide">
          Geleceğin Yapay Zeka Sistemleri
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          İşletmenizi Otonom AI Ajanları ile Büyütün
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Özel LLM modelleri, RAG bilgi bankaları ve otomatik iş akışları ile kurumsal süreçlerinizi yapay zeka çağına taşıyoruz.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#demo" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-500/20">
            Demonyu Dene
          </a>
          <a href="#iletisim" className="border border-slate-700 hover:border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-xl transition bg-slate-900/50">
            Toplantı Planla
          </a>
        </div>
      </section>

      {/* Canlı AI Demo Bölümü */}
      <section id="demo" className="py-16 px-6 max-w-3xl mx-auto">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold mb-2 text-white">Canlı AI Test Modülü</h2>
          <p className="text-slate-400 text-sm mb-6">
            Sistemimizin işleme yeteneğini test etmek için bir komut yazın ve çalıştırın.
          </p>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Örn: 'Müşteri destek ekibimiz için bir RAG mimarisi nasıl kurulur?'"
            className="w-full h-28 bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition mb-4 resize-none"
          />

          <button
            onClick={handleRunDemo}
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md disabled:opacity-50"
          >
            {loading ? "AI İşliyor..." : "Çalıştır ve Analiz Et"}
          </button>

          {result && (
            <div className="mt-6 p-4 bg-slate-950 border border-indigo-500/30 rounded-xl">
              <div className="text-xs font-semibold text-indigo-400 mb-1 tracking-wider uppercase">Çıktı / Yanıt</div>
              <p className="text-sm text-slate-300 whitespace-pre-wrap">{result}</p>
            </div>
          )}
        </div>
      </section>

      {/* Hizmetler Bölümü */}
      <section id="hizmetler" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">AI Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold mb-4">01</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Özel RAG & LLM</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Şirketinizin kendi dokümanları ve verileri üzerinde çalışan güvenli AI asistanları.
            </p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">02</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Otonom AI Ajanları</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              İçerik, veri işleme ve müşteri ilişkilerini otomatik yöneten akıllı ajanlar.
            </p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">03</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Model Fine-Tuning</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sektörünüze özel verilerle Python üzerinde ince ayar yapılmış yüksek başarımlı modeller.
            </p>
          </div>
        </div>
      </section>

      {/* Alt Bilgi / Footer */}
      <footer id="iletisim" className="border-t border-slate-800/80 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 NEXUS AI Company. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
