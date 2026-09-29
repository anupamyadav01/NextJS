import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 w-full h-screen ${roboto.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
