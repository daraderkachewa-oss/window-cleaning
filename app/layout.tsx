import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мойка фасадного остекления в Москве | ИП Ямщикова",
  description:
    "Профессиональная мойка стеклянных фасадов коммерческой недвижимости в Москве и МО. Работаем по договору с юридическими лицами. Фотоотчет, полный пакет документов. Бесплатный расчет за 30 минут.",
  keywords:
    "мойка фасадов, мойка остекления, мойка витражей, мойка бизнес-центра, промышленная мойка стекол, мойка фасадов Москва",
  openGraph: {
    title: "Мойка фасадного остекления в Москве | ИП Ямщикова",
    description:
      "Профессиональная мойка стеклянных фасадов коммерческой недвижимости. 10+ лет, 500+ объектов, 2 млн м² выполнено.",
    type: "website",
    locale: "ru_RU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ИП Ямщикова Анна Александровна",
              description: "Профессиональная мойка фасадного остекления коммерческой недвижимости",
              telephone: "+79164731640",
              email: "ip-yamsh@mail.ru",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Москва",
                addressCountry: "RU",
              },
              areaServed: ["Москва", "Московская область"],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-montserrat)] antialiased">
        {children}
      </body>
    </html>
  );
}
