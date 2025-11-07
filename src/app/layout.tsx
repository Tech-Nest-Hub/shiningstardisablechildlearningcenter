import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shining Star Disabled Child Learning Center",
  description: "A nurturing environment for children with special needs to learn and grow.",
  keywords: ["web developer", "portfolio", "react", "nextjs", "fullstack"],
  authors: [{ name: "Ghost Aakash", url: "https://yourwebsite.com" }],
  icons: {
    icon: "/shining_star_logo.svg",
    apple: "/shining_star_logo.svg",
  },
  openGraph: {
    title: "Shining Star Disabled Child Learning Center",
    description:
      "A nurturing environment for children with special needs to learn and grow.",
    url: "https://yourwebsite.com",
    siteName: "Shining Star Disabled Child Learning Center",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shining Star Disabled Child Learning Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shining Star Disabled Child Learning Center",
    description:
      "A nurturing environment for children with special needs to learn and grow.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
