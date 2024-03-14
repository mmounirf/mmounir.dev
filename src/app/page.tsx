import { Footer, Header } from "@/components/ui";

export default function Home() {
	return (
		<div className="relative flex min-h-screen flex-col dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<Header />
			<main className="container flex-1 align-center justify-center">
				<h1 className="font-body">Hi there</h1>
			</main>
			<Footer />
		</div>
	);
}
