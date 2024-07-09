import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Provider from "./context/client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Mangment",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <DefaultLayout>{children}</DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
