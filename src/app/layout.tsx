import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSansFont = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
});

export const metadata: Metadata = {
	title: "Mohamed Mounir",
	description: "Senior software engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen font-sans antialiased", openSansFont.variable)}>
				<ThemeProvider storageKey="@mmounir.dev/theme" attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
