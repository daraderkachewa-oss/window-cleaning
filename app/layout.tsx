import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Atmosphere from "@/components/Atmosphere";

const geologica = Geologica({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geologica",
  display: "swap",
});

const tildaSans = localFont({
  variable: "--font-tilda",
  display: "swap",
  src: [
    { path: "./fonts/TildaSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TildaSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/TildaSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yamshik.ru"),
  title: "Профильная мойка остекления фасадов в Москве и МО | ИП Ямщикова",
  description:
    "Профессиональная мойка остекления фасадов коммерческой недвижимости в Москве и Московской области. Работа без остановки объекта, договор с юрлицами, фотоотчёт, полный пакет документов. Расчёт по объекту.",
  keywords: [
    "мойка остекления фасадов",
    "мойка стеклянных фасадов",
    "мойка витражей",
    "промышленный альпинизм мойка",
    "мойка фасадов Москва",
    "клининг бизнес-центров",
  ],
  authors: [{ name: "ИП Ямщикова Анна Александровна" }],
  openGraph: {
    title: "Профильная мойка остекления фасадов в Москве и МО",
    description:
      "Безупречная мойка остекления фасадов без остановки работы объекта. 10+ лет, 500+ объектов, 2 млн м².",
    type: "website",
    locale: "ru_RU",
    siteName: "ИП Ямщикова — мойка фасадного остекления",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1a2f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ИП Ямщикова Анна Александровна",
  description:
    "Профессиональная мойка остекления фасадов коммерческой недвижимости в Москве и Московской области.",
  telephone: "+79164731640",
  email: "ip-yamsh@mail.ru",
  address: { "@type": "PostalAddress", addressLocality: "Москва", addressCountry: "RU" },
  areaServed: ["Москва", "Московская область"],
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${geologica.variable} ${tildaSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="page-atmosphere" aria-hidden />
        <Atmosphere />
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
