import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Tim Chmieletzki - Student für Wirtschaftsinformatik",
    description: "Home Page von Tim Chmieletzki",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
            </head>
            <body
                className={`${inter.variable} font-sans antialiased bg-black text-white`}
            >
                {children}
            </body>
        </html>
    );
}
