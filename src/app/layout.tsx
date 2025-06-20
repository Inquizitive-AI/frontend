import type { Metadata } from "next";

import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk Next.js Quickstart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
          <body>
              <AuthKitProvider>{children}</AuthKitProvider>
          </body>
      </html>
  );
}