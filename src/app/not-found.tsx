import { Button, Footer, Header } from "@/components/ui";
import { Card, CardHeader } from "@/components/ui/card";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen flex-col dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<Header />
			<main className="container py-8 flex flex-col flex-1 items-center justify-center">
				<h2 className="z-10 font-display font-extrabold text-[20rem] leading-[8rem]">404</h2>

				<div className="relative text-center min-w-80 min-h-28">
					<div className="text-[10rem] z-0 left-0 right-0 top-100 absolute motion-safe:animate-bounce">👻</div>
				</div>
				<Card className="min-w-fit w-3/5 z-10">
					<CardHeader>
						<h1 className="font-display text-5xl text-center font-bold">Page Not Found</h1>
					</CardHeader>
				</Card>
				<Button variant="link" asChild size="lg">
					<Link href="/" download target="_blank" rel="noopener noreferrer" className="gap-1">
						<IconChevronLeft size="16" />
						Return Home
					</Link>
				</Button>
			</main>
			<Footer />
		</div>
	);
}
