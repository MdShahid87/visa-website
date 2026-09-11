import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOB FINDER | Visa Specialist in Lucknow",
  description:
    "Professional visa and travel assistance in Lucknow for tourist visas, work permits, Umrah visas, air tickets, emigration and visa stamping.",
  keywords: [
    "visa consultant Lucknow",
    "visa specialist Lucknow",
    "tourist visa Lucknow",
    "work permit Lucknow",
    "Umrah visa Lucknow",
    "visa services Lucknow",
  ],
  openGraph: {
    title: "JOB FINDER | Visa Specialist in Lucknow",
    description:
      "Visa and travel assistance from Lucknow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}