import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";

const fonSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metaData: Metadata = {
  title: "Live Docs",
  description: "Your preferred collaborative editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#3371FF", fontSize: "16px" },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn("min-h-screen font-sans antialiased", fonSans.variable)}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
