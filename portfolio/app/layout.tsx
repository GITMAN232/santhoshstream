import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "P Santhosh | Full Stack Developer & React Engineer",
  description:
    "Portfolio of P Santhosh — Full Stack Developer, B.Tech CSE student at GITAM University. Specializing in React.js, Next.js, scalable frontend systems, and modern web applications.",
  keywords: [
    "P Santhosh",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "GITAM University",
    "Web Developer Portfolio",
    "TypeScript Developer",
  ],
  authors: [{ name: "P Santhosh" }],
  creator: "P Santhosh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "P Santhosh | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web platforms, modern UI systems, and impactful digital experiences.",
    siteName: "P Santhosh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "P Santhosh | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web platforms and modern UI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
