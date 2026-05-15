import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cortex-machine.ai"),
  title: "Cortex-Machine",
  description: "Accountable intelligence infrastructure for autonomous systems.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#090909" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Cortex-Machine",
    description: "Accountable intelligence infrastructure for autonomous systems.",
    images: [{ url: "/github-icon-1024.png", width: 1024, height: 1024, alt: "Cortex-Machine logo" }],
  },
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
