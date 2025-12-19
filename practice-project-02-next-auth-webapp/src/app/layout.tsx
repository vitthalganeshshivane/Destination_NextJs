import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
