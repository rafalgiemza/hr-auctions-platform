import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { ThemeProvider } from "~/components/providers/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";

import { TopNavMenu } from "~/components/main-layout/top-nav-menu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App", // TODO
  description: "Generated by create-t3-app", // TODO
  icons: [{ rel: "icon", url: "/favicon.ico" }], // TODO: change it for our HR Auctions icon
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider cookies={cookies().toString()}>
            <div className="flex flex-col">
              <TopNavMenu />
              <main>{children}</main>
            </div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
