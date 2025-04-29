import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { geistMono, geistSans } from "@/lib/font";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Meriç Mert Bulca",
  creator: "Meriç Mert Bulca",
  authors: [
    {
      name: "Meriç Mert Bulca",
      url: "https://linkedin.com/in/mericmertbulca",
    },
  ],
  description:
    "Software Engineer and MSc student in Big Data Engineering at the University of Amsterdam and Vrije Universiteit.",
  keywords: [
    "Meriç Mert Bulca",
    "Software Engineer",
    "Big Data Engineering",
    "University of Amsterdam",
    "Vrije Universiteit Amsterdam",
    "Sabanci University",
    "OBSS",
    "Amsterdam",
    "Turkey",
    "Software Development",
    "Personal Website",
    "Blog",
  ],
  openGraph: {
    title: "Meriç Mert Bulca",
    // TODO: Add a propert image
    description:
      "Software Engineer and MSc student in Big Data Engineering at the University of Amsterdam and Vrije Universiteit.",
    // url: "https://mericbulca.com", //TODO: Add the correct URL
    siteName: "Meriç Mert Bulca",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("antialiased", geistSans.variable, geistMono.variable, geistSans.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* {TODO: Add Script for analytics} */}
      </body>
    </html>
  );
}
