import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const openSansFont = Open_Sans({
	subsets: ["latin"],
	variable: "--font-body",
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
		<html lang="en" className={cn(openSansFont.variable, playfairDisplayFont.variable)} suppressHydrationWarning>
			<body className="min-h-screen font-sans antialiased">
				<ThemeProvider storageKey="@mmounir.dev/theme" attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
