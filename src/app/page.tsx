import { Footer, Header } from "@/components/ui";
import { BentoGrid } from "@/components/ui/bento-grid";
import { CareerJourney, GetInTouch, TechArsenal, TechnicalScribbles } from "./components";

export default function Home() {
	return (
		<div className="relative flex min-h-screen flex-col dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<Header />
			<main className="container py-8 flex flex-col flex-1 justify-center ">
				<BentoGrid className="max-w-4xl mx-auto md:auto-rows-auto">
					<TechArsenal />

					<TechnicalScribbles />
					<GetInTouch />
					<CareerJourney />
				</BentoGrid>
			</main>
			<Footer />
		</div>
	);
}
