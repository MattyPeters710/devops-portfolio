import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathew Peters | DevOps Engineer",
  description:
    "DevOps Engineer specializing in Azure, Terraform, Kubernetes, CI/CD, and cloud automation.",

  openGraph: {
    title: "Mathew Peters | DevOps Engineer",
    description:
      "DevOps Engineer portfolio showcasing Azure, Terraform, Kubernetes and automation projects.",
    url: "https://devops-portfolio-coral.vercel.app/",
    siteName: "Mathew Peters Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mathew Peters | DevOps Engineer",
    description:
      "DevOps Engineer specializing in cloud automation and infrastructure as code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
