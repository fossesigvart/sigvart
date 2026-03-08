import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#000000",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "ROBOTS — Industrial Robots for Scandinavia",
  description:
    "ROBOTS is Scandinavia's hub for industrial robots. We handle sourcing, certification, training, maintenance, service and pilot testing — in Norway, Sweden and Denmark. Launching 2027.",
  keywords: ["industrial robot", "industrial automation", "robot Scandinavia", "ROBOTS", "robotics Norway", "robot training", "robot maintenance", "robot service", "pilot testing"],
  openGraph: {
    title: "ROBOTS — Industrial Robots for Scandinavia",
    description:
      "ROBOTS is Scandinavia's hub for industrial robots. We handle sourcing, certification, training, maintenance, service and pilot testing — in Norway, Sweden and Denmark. Launching 2027.",
    url: "https://sigvart.no",
    siteName: "ROBOTS",
    images: [
      {
        url: "https://norgesdomene.b-cdn.net/3.png",
        width: 1200,
        height: 630,
        alt: "ROBOTS — Industrial Robots for Scandinavia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROBOTS — Industrial Robots for Scandinavia",
    description:
      "ROBOTS is Scandinavia's hub for industrial robots. We handle sourcing, certification, training, maintenance, service and pilot testing — in Norway, Sweden and Denmark. Launching 2027.",
    images: ["https://norgesdomene.b-cdn.net/3.png"],
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
