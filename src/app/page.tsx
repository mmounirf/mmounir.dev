import { Footer, Header } from "@/components/ui";

export default function Home() {
	return (
		<div className="relative flex min-h-screen flex-col dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<Header />
			<main className="container py-8 flex flex-col flex-1 justify-center ">
				<div className="flex flex-col gap-24">
					<div>
						<h2 className="flex gap-4 font-display text-9xl">
							Hi there <div className="absolute right-10 sm:relative sm:right-0 motion-safe:animate-bounce">👋🏻</div>
						</h2>
						<h1 className="font-display text-7xl">I'm Mohamed Mounir</h1>
					</div>
					<div>
						<h2 className="font-body text-4xl">
							Senior software engineer with over a decade of experience in the frontend domain. Based between Germany 🇩🇪
							and Egypt 🇪🇬.
						</h2>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
