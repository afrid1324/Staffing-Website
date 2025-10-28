import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Payroll App",
  description: "A simple Next.js payroll demo with dynamic calculations.",
  icons: { icon: "/favicon.svg" }, // <-- lowercase, matches public/favicon.svg
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
