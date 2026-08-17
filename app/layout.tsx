import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/*
 * Plus Jakarta Sans is drawn in Jakarta - the right workhorse for an
 * Indonesian retailer, and it keeps the page off Inter, which is the
 * most generic thing about the Informa reference.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diana Eva Furniture - Furnitur untuk rumah yang ditinggali",
  description:
    "Demo pitch Hypomone Studio. Koleksi sofa, kursi, meja makan, dan penyimpanan kayu solid.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
