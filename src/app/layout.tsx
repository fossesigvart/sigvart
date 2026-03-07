import type { Metadata } from "next";
import { Montserrat, DM_Sans, Orbitron } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const orbitron = Orbitron({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "SIGVART — Home Robots for Europe",
  description:
    "SIGVART imports and distributes the world's most advanced home robots to Europe. Invented in Norway. Launching 2027.",
  keywords: ["home robot", "humanoid robot", "robot Europe", "SIGVART", "home automation", "robotics Norway"],
  openGraph: {
    title: "SIGVART — Home Robots for Europe",
    description:
      "SIGVART imports and distributes the world's most advanced home robots to Europe. Invented in Norway. Launching 2027.",
    url: "https://sigvart.no",
    siteName: "SIGVART",
    images: [
      {
        url: "https://norgesdomene.b-cdn.net/Gemini_Generated_Image_p3zuo6p3zuo6p3zu.png",
        width: 1200,
        height: 630,
        alt: "SIGVART — Home Robots for Europe",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIGVART — Home Robots for Europe",
    description:
      "SIGVART imports and distributes the world's most advanced home robots to Europe. Invented in Norway. Launching 2027.",
    images: ["https://norgesdomene.b-cdn.net/Gemini_Generated_Image_p3zuo6p3zuo6p3zu.png"],
  },
  icons: {
    icon: "https://norgesdomene.b-cdn.net/2.png",
    apple: "https://norgesdomene.b-cdn.net/2.png",
  },
  metadataBase: new URL("https://sigvart.no"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${montserrat.variable} ${dmSans.variable} ${orbitron.variable} font-[family-name:var(--font-body)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
