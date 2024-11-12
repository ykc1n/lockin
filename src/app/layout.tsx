import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/components/navbar";

export const metadata: Metadata = {
  title: "Lockin Trainer",
  description: "Hotkey Trainer App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gradient-to-t from-cyan-950 to-slate-900">
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}
