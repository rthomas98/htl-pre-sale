import type { Metadata } from "next";
import { Heebo, Poppins } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HTL Re-Sale | Protect Your Brand in the Digital Age",
  description: "Legalnar™ empowers businesses with on-demand legal webinars, downloadable templates, and practical tools to safeguard your brand from digital threats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heebo.variable} ${poppins.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
