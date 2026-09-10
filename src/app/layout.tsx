import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "보람찬 게임 놀이터",
    description: "보람찬 게임 놀이터에서 다양한 게임을 즐겨보세요.",
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`size-full antialiased`}
        >
            <body className="min-w-93.5 overflow-x-auto min-h-full flex flex-col items-center">{children}</body>
        </html>
    );
}
