import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@components/header/Header";
import ThemesProvider from "@providers/themesProvider";
import SmallGridLines from "@components/bg/SmallGridLines";
import NavMenuBtn from "@components/buttons/NavMenuBtn";
import "@styles/globals.css";

const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "black" },
        { media: "(prefers-color-scheme: light)", color: "white" }
    ]
};

export const metadata: Metadata = {
    title: {
        default: "Ahmed Rabbi",
        template: "Ahmed Rabbi | %s"
    },
    description:
        "Pursuing a career for being a developer. Still a novice, but making progress on a daily basis.",
    manifest: "/manifest.json",
    keywords: [
        "Ahmed Rabbi",
        "portfolio",
        "dev-portfolio",
        "developer",
        "itsahrabbi"
    ],
    authors: [
        { name: "Ahmed Rabbi" },
        {
            name: "itsahrabbi",
            url: "https://github.com/itsahrabbi"
        }
    ]
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <ThemesProvider>
                    <SmallGridLines />
                    <Header />
                    <main>
                        {children}
                        <Analytics />
                        <SpeedInsights />
                    </main>
                    <NavMenuBtn />
                </ThemesProvider>
            </body>
        </html>
    );
}
