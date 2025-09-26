import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import { Button, Footer, Header } from "@/components/ui";
import { Card, CardHeader } from "@/components/ui/card";

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen flex-col dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<Header />
			<main className="container py-8 flex flex-col flex-1 items-center justify-center">
				<h2 className="z-10 font-display font-extrabold text-[20vw]">404</h2>

				<Card className="min-w-fit w-3/5 z-10">
					<CardHeader>
						<h1 className="font-display text-[5vw] text-center font-bold">Page Not Found</h1>
					</CardHeader>
				</Card>
				<Button variant="link" asChild size="lg">
					<Link href="/" rel="noopener noreferrer" className="gap-1">
						<IconChevronLeft size="16" />
						Return Home
					</Link>
				</Button>
			</main>
			<Footer />
		</div>
	);
}
