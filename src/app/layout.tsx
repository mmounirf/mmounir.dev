import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansFont = Noto_Sans({
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
});
const notoSansMonoFont = Noto_Sans_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
});

const playfairDisplayFont = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Mohamed Mounir",
	description: "Senior software engineer with over a decade of experience in the frontend domain.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(notoSansFont.variable, playfairDisplayFont.variable, notoSansMonoFont.variable)}
			suppressHydrationWarning
		>
			<body className="min-h-screen font-body antialiased">
				<ThemeProvider storageKey="@mmounir.dev/theme" attribute="class" defaultTheme="system" enableSystem>
					{children}
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
