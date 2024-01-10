import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

// import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans"
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus",
  description: "An app that helps you keep track of time while working on your tasks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {/* <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}> */}
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
