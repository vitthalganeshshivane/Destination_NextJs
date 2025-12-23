import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/ClientProvider";
import UserContext from "@/context/UserContext";

export const metadata: Metadata = {
  title: "NextAuth WebApp",
  description: "First fullstack project by using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <UserContext>{children}</UserContext>
        </ClientProvider>
      </body>
    </html>
  );
}
