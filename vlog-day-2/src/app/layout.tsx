import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={
  title: "Authentication Using NextJS",
  description: "Learning nextjs by creating projects"
}
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
