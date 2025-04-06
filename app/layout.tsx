import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google"; // Importing available Google fonts
import "./globals.css";

// Using Inter and Roboto fonts from Google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "302 Signature | Premium Cosmetics",
  description: "Discover luxury cosmetics from top Asian and European brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        {/* Announcement Bar */}
        <div className="bg-rose-100 text-rose-900 text-sm py-2 px-4 text-center">
          Free shipping on orders over 200 AED
        </div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
