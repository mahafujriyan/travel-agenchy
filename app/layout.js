import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://ventures-travel.vercel.app"),
  title: {
    default: "Ventures Travel | Premium Corporate Journeys",
    template: "%s | Ventures Travel",
  },
  description:
    "Premium travel and venture experiences with curated destinations, bespoke packages, and concierge-level planning.",
  openGraph: {
    title: "Ventures Travel",
    description:
      "Discover premium global travel with curated destinations and business-class service.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <div className="app-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
