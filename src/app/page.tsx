import { Footer, Header } from "@/components/ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconBraces, IconMessage, IconRoad, IconWriting } from "@tabler/icons-react";
import Skills from "./components/Skills";

export default function Home() {
	return (
		<div className="relative flex min-h-screen flex-col dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<Header />
			<main className="container py-8 flex flex-col flex-1 justify-center ">
				<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[15rem]">
					<BentoGridItem
						href="/skills"
						title="Tech Arsenal"
						description="Building exceptional experiences with a powerful tech stack."
						header={<Skills />}
						className="md:col-span-2"
						icon={<IconBraces size={20} className="text-neutral-500" />}
					/>
					<BentoGridItem
						href="/"
						title="Get in touch!"
						description="Connect for your next project or tech chat."
						header={<h1>Header</h1>}
						className="md:col-span-1"
						icon={<IconMessage size={20} className="text-neutral-500" />}
					/>

					<BentoGridItem
						href="/"
						title="Technical Scribbles"
						description="My software & product engineering insights."
						header={<h1>Header</h1>}
						className="md:col-span-1"
						icon={<IconWriting size={20} className="text-neutral-500" />}
					/>
					<BentoGridItem
						href="/"
						title="Career Journey"
						description="My path in the software development landscape."
						header={<h1>Header</h1>}
						className="md:col-span-2"
						icon={<IconRoad size={20} className="text-neutral-500" />}
					/>
				</BentoGrid>
				{/* <div className="flex flex-col gap-24">
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
				</div> */}
			</main>
			<Footer />
		</div>
	);
}
