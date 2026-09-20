import "./globals.css";

export const metadata = {
  title: "Taç AI | Otonom Kurumsal Yapay Zeka Sistemleri & VIP Danışmanlık",
  description: "Özel RAG bilgi bankaları, otonom yapay zeka ajanları ve kurumsal LLM çözümleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
